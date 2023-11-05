'use client';

import React, { useState } from 'react'
import { SearchManufacturer } from './';

function SearchBar() {
    const [Manufacturer, setManufacturer] = useState(''); 
    const handleSearch = () => {}
  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
            <SearchManufacturer 
            Manufacturer = {Manufacturer}
            setManufacturer = {setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar