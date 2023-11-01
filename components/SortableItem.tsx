import { ItemType } from "@/data";
import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ item, index }: { item: ItemType, index: number }) => {
  const { id, url } = item;
  const { attributes, listeners, setNodeRef, transition, transform } = useSortable({
    id,
    transition: {
      duration: 300,
      easing: 'cubic-bezier(0.01,0.5,0,1)'
    }
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div className={`${index === 0 ? 'col-span-2 sm:col-span-4 place-items-center' : 'w-full'} h-auto bg-[#1b1b1b] rounded-md`}>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${index === 0 ? 'w-1/2 mx-auto' : 'w-full'} border rounded-md overflow-hidden cursor-grab bg-[#f0f0f0]`}
      >
        <Image
          src={`/images/${url}`}
          alt='image'
          className='w-full h-auto object-cover'
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default SortableItem;