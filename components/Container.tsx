import FunctionalGallery from '@/components/FunctionalGallery';
import { useItemsContext } from '@/providers/ItemsContextProvider';
import { BiSolidSelectMultiple } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';


const Container = () => {
  const { state, setState } = useItemsContext();
  const numOfSelectedItems = state.filter(item => item.isSelected).length;
  const handleDelete = () => {
    setState(state => state.filter(item => !item.isSelected));
  }
  
  return (
    <div className='container mx-auto p-8 flex flex-col space-y-4 justify-center'>
      <div className='mx-auto grid grid-cols-3 sm:grid-cols-5 w-full md:w-3/5 border-b border-gray-300 pb-2'>
        <div className="text-lg place-content-start pl-1 font-bold">Gallery</div>
        <div className="col-start-3 sm:col-start-5 flex space-x-2 place-content-end place-items-center">
          {numOfSelectedItems > 0 && <span className='p-1 relative'>
            <BiSolidSelectMultiple className='text-xl text-[#36c0e6]' />
            <span className='absolute h-4 w-4 bg-black -top-1 left-4 rounded-full text-xs text-white text-center'>{numOfSelectedItems}</span>
          </span>}
          <span className='p-1 hover:cursor-pointer' onClick={handleDelete}>
            <MdDelete className='text-xl text-[#da3737]' />
          </span>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-5 w-full md:w-3/5 gap-6 transition-all">
        <FunctionalGallery />
      </div>
      { state.length === 0 && <p className='text-center text-lg'>No items to display!</p>}
    </div>
  );
}

export default Container;