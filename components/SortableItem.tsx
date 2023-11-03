import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ItemType } from '@/providers/ItemsContextProvider';
import CheckBox from "./SelectInput";

const SortableItem = ({ item, index }: { item: ItemType, index: number }) => {
  const { id, url, isSelected } = item;
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
    <div className={`${index === 0 ? 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2' : 'w-full'} place-items-center h-auto rounded-md hover:[&>div>div]:opacity-30`}>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`${index === 0 ? 'w-full' : 'w-full'} border rounded-md overflow-hidden cursor-grab bg-[#8d2d2d] relative`}
      >
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#444444] opacity-0'></div>
        <CheckBox id={id}/>
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