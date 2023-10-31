'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function Home() {
  const [orderedList, setOrderedList] = useState<string[]>(['image-1.webp', 'image-2.webp', 'image-3.webp', 'image-4.webp', 'image-5.webp', 'image-6.webp', 'image-7.webp', 'image-8.webp', 'image-9.webp', 'image-10.jpeg', 'image-11.jpeg']);
  const dragItem = useRef<number | null>(null!);
  const dragOverItem = useRef<number | null>(null!);
  let reOrderedList = [...orderedList]
  const handleSorting = () => {
    const dragItemContent = reOrderedList.splice(dragItem.current!, 1)[0];
    reOrderedList.splice(dragOverItem.current!, 0, dragItemContent);
    setOrderedList(reOrderedList);
  }
  return (
    <main className='container mx-auto p-8 flex justify-center'>
      <div className="grid grid-cols-2 sm:grid-cols-4 w-full md:w-4/5 gap-8 sm:[&>*:nth-child(1)]:col-start-2 [&>*:nth-child(1)]:col-span-2 [&>*:nth-child(2)]:col-start-1 transition-all duration-300">
        {orderedList.map((url, index) => <div
          key={index}
          className='border rounded-md overflow-hidden cursor-grab '
          draggable={true}
          onDrag={() => dragItem.current = index}
          onDragEnter={() => dragOverItem.current = index}
          onDragEnd={handleSorting}
          onDragOver={e => e.preventDefault()}
        >
          <Image
            src={`/images/${url}`}
            alt='image'
            width={200}
            height={200}
            className='w-full h-auto'
          />
        </div>)}
      </div>
    </main>
  )
}