import { createContext } from 'react';

export type ItemType = {
  id: number,
  url: string,
  isSelected: boolean
}

export const items: ItemType[] = [{
  id: 1,
  url: 'image-1.webp',
  isSelected: false
}, {
  id: 2,
  url: 'image-2.webp',
  isSelected: false
}, {
  id: 3,
  url: 'image-3.webp',
  isSelected: false
}, {
  id: 4,
  url: 'image-4.webp',
  isSelected: false
}, {
  id: 5,
  url: 'image-5.webp',
  isSelected: false
}, {
  id: 6,
  url: 'image-6.webp',
  isSelected: false
}, {
  id: 7,
  url: 'image-7.webp',
  isSelected: false
}, {
  id: 8,
  url: 'image-8.webp',
  isSelected: false
}, {
  id: 9,
  url: 'image-9.webp',
  isSelected: false
}, {
  id: 10,
  url: 'image-10.jpeg',
  isSelected: false
}, {
  id: 11,
  url: 'image-11.jpeg',
  isSelected: false
}];



export const ContextProvider = createContext<ItemType[]>([]);