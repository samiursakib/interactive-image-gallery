'use client';

import { ItemType, useItemsContext } from '@/providers/ItemsContextProvider';

const CheckBox = ({ item }: { item: ItemType }) => {
  const { state, setState } = useItemsContext();
  const isSelected = state.find(i => i.id === item.id)!.isSelected;
  const handleCheck = () => {
    setState(state => state.map(i => i.id === item.id ? { ...i, isSelected: !isSelected } : i));
  }

  return (
    <input
      className='absolute top-1 left-1 form-checkbox rounded text-[#36c0e6] focus:ring-transparent z-10 invisible group-hover:visible'
      type='checkbox'
      checked={isSelected}
      onChange={handleCheck}
    />
  );
}

export default CheckBox;