import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';




const Footer = () => {
  return (
    <footer className='flex flex-col text-black mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain'/>
                <p className='text-base text-gray-700'>
                    CarRental 2023 <br/>
                    All rights reserved &copy;
                </p>
            </div>
            <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
                    {footerLinks.map((link) => (
                        <div className='flex flex-col gap-6 text-base min-w-[170px]' key={link.title}>
                            <h3 className='font-bold'> 
                                {link.title}
                            </h3>
                            {link.links.map((links) => (
                                <Link 
                                    key={links.title}
                                    href={links.url}
                                    className='text-gray-500'
                                >
                                    {links.title}
                                </Link>
                            ))}
                        </div> 
                    ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer