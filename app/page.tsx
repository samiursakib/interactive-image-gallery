'use client';

import Container from '@/components/Container';
import { ItemsContextProvider } from '@/providers/ItemsContextProvider';

export default function Home() {
  return (
    <ItemsContextProvider>
      <main className='h-screen bg-[#f1f1f1]'>
        <Container />
        <p className='text-center text-sm font-light p-4'>
          <span className='p-2 border border-red-300 bg-white rounded-md shadow-lg'>
          <span className='text-red-500 text-lg'>*</span>Click & hold for at least 250ms to drag!
          </span>
        </p>
      </main>
    </ItemsContextProvider>
  );
}