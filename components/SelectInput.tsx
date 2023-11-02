import { useState } from 'react';

const CheckBox = ({ id, isSelected }: { id: number, isSelected: boolean}) => {
  const [checked, setChecked] = useState(isSelected);
  console.log(id, isSelected);
  return (
    <input
      className='absolute top-2 left-2 form-checkbox rounded text-[#36c0e6] focus:ring-transparent'
      type='checkbox'
      checked={checked}
      onChange={() => setChecked(prev => !prev)}
      name='select'
    />
  );
}

export default CheckBox;