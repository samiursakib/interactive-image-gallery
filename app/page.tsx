'use client';

import { ItemsContextProvider } from '@/providers/ItemsContextProvider';
import FunctionalGallery from '@/components/FunctionalGallery';

export default function Home() {
  return (
    <ItemsContextProvider>
      <main className='h-screen bg-[#f1f1f1]'>
        <div className='container mx-auto p-8 flex justify-center  bg-[#e9e9e9]'>
          <div className="grid grid-cols-3 sm:grid-cols-5 w-full md:w-3/5 gap-6 transition-all">
            <FunctionalGallery />
          </div>
        </div>
      </main>
    </ItemsContextProvider>
  );
}