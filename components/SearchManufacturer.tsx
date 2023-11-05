'use client';
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types/interface'
import Image from 'next/image';
import { manufacturers } from '@/constants';


const SearchManufacturer = ({ Manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

    const filteredManufacturers = query === "" 
        ? manufacturers 
        : manufacturers.filter((item) => (
            item.toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        ))
    return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
        <Combobox value={Manufacturer} onChange={setManufacturer}>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                <Image 
                    src = '/car-logo.svg'
                    width = {20}
                    height = {20}
                    className = 'ml-4'
                    alt = 'Car logo' 
                />
                </Combobox.Button>
                <Combobox.Input
                    className='w-full bg-slate-100 h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'
                    placeholder='Volkswagen'
                    displayValue={(Manufacturer: string) =>
                    Manufacturer}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options>
                        {filteredManufacturers.length === 0 && query !== "" ? (
                            <Combobox.Option
                                value={query}
                                className='absolute mt-1 max-h-60 w-full overflow-auto rounded-l-full bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                            >
                                Create '{query}'
                            </Combobox.Option>
                        ):(
                            filteredManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    className={({ active }) => `relative cursor-default rounded-l-full select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                                    value={item}
                                >
                                    {item}
                                </Combobox.Option>     
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>

  )
}

export default SearchManufacturer