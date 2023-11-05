import { CustomFilter, SearchBar } from '@/components'
import { Hero } from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
  <main className='overflow-hidden bg-slate-400'>
    <Hero />
    <div className='mt-12 sm:px-16 px-6 py-4 max-width' id='discover'>
      <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100;'>
          <h1 className='text-4xl font-extrabold'>Car Catalog</h1>
      </div>
      <div className='mt-12 w-full flex justify-between items-center flex-wrap gap-5'>
        <SearchBar />
        <div className='flex justify-end flex-wrap items-center gap-2'>
          <CustomFilter title='fuel'/>
          <CustomFilter title='year' />
        </div>
      </div>
    </div>
  </main>  
)
}
