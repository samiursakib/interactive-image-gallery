'use client';

import { useState } from 'react';
import { ItemType, items } from '@/data';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import dynamic from 'next/dynamic';
import { arrayMove } from '@dnd-kit/sortable';

const CardItem = dynamic(() => import('@/components/SortableItem'), { ssr: false });

export default function Home() {
  const [state, setState] = useState<ItemType[]>(items);
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if(active.id !== over.id) {
      setState(state => {
        const oldId = state.findIndex((item: ItemType) => item.id === active.id);
        const newId = state.findIndex((item: ItemType) => item.id === over.id);
        return arrayMove(state, oldId, newId);
      });
    }
  }
  return (
    <main className='h-screen bg-[#151515]'>
      <div className='container mx-auto p-8 flex justify-center  bg-[#151515]'>
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full md:w-3/5 gap-8 transition-all">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={state}>
              {state.map((item: ItemType, index) => <CardItem key={item.id} item={item} index={index} />)}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </main>
  )
}