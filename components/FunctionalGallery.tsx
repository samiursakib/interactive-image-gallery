import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import dynamic from 'next/dynamic';
import { ItemType } from '@/providers/ItemsContextProvider';
import { useItemsContext } from '@/providers/ItemsContextProvider';
import { arrayMove } from '@dnd-kit/sortable';

const CardItem = dynamic(() => import('@/components/SortableItem'), { ssr: false });

const FunctionalGallery = () => {

const { state, setState } = useItemsContext();

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
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    })
  );
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={state}>
        {state.map((item: ItemType, index: number) => <CardItem key={item.id} item={item} index={index} />)}
      </SortableContext>
    </DndContext>
  );
}

export default FunctionalGallery;