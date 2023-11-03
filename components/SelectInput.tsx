'use client';

import { useItemsContext } from '@/providers/ItemsContextProvider';
import { ChangeEvent } from 'react';

const CheckBox = ({ id }: { id: number }) => {
  const { state, setState } = useItemsContext();
  const checked = state.find(item => item.id === id)?.isSelected;
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    // const checked = e.target.checked;
    console.log('handleCheck')
    setState(prev => prev.map(item => item.id === id ? { ...item, isSelected: !e.target.checked } : item));
    console.log(state);
  }
  return (
    <input
      className='absolute top-2 left-2 form-checkbox rounded text-[#36c0e6] focus:ring-transparent'
      type='checkbox'
      checked={checked}
      name='select'
      onChange={handleCheck}
    />
  );
}

export default CheckBox;