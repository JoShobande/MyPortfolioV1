'use client'

import Link from "next/link"
import { usePathname} from 'next/navigation';
import clsx from 'clsx';
import Image from "next/image";
import { useState } from "react";


const Header = () => {
    const pathname = usePathname();
    const [isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

    return(
        <nav className='flex justify-between items-center'>
          
            <div className='flex items-center'>
                <Link href='/'  className='pr-[5px] cursor-pointer'>
                    <Image
                        src={'/roundedLogo.png'}
                        alt='jossy_logo'
                        width={120}
                        height={120}
                    />
                </Link>
                <div className='hidden lg:block'>
                    <Link 
                        href='/portfolio' 
                        className={clsx(
                            'p-[5px] text-[16px] font-[300]',
                            {
                            'font-[700]': pathname === '/portfolio',
                            },
                        )}
                    >
                        Portfolio
                    </Link>
                    <Link 
                        href='/skills' 
                        className={clsx(
                            'p-[5px] text-[16px] font-[300]',
                            {
                            'font-[700]': pathname === '/skills',
                            },
                        )}
                    >
                        Skills
                    </Link>
                    <Link 
                        href='/contact' 
                        className={clsx(
                            'p-[5px] text-[16px] font-[300]',
                            {
                            'font-[700]': pathname === '/contact',
                            },
                        )}
                    >
                        Contact
                    </Link>
                </div>
             
            </div>

            <div className='hidden lg:flex'>
                <div 
                    className='grid place-content-center border border-[#66CCFF] w-[120px] lg:w-[200px] h-[50px] rounded-t-[20px] rounded-br-[20px] cursor-pointer'
                >
                    <div className='flex items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.25 0 0 5.25 0 12C0 19.875 7.125 23.25 8.25 23.25C9 23.25 9 22.875 9 22.5V20.625C6.375 21.375 5.25 19.875 4.875 18.75C4.875 18.75 4.875 18.375 4.125 17.625C3.75 17.25 2.25 16.5 3.75 16.5C4.875 16.5 5.625 18 5.625 18C6.75 19.5 8.25 19.125 9 18.75C9 18 9.75 17.25 9.75 17.25C6.75 16.875 4.5 15.75 4.5 11.625C4.5 10.125 4.875 9 5.625 8.25C5.625 8.25 4.875 6.75 5.625 4.875C5.625 4.875 7.5 4.875 9 6.375C10.125 5.625 13.875 5.625 15 6.375C16.5 4.875 18.375 4.875 18.375 4.875C19.125 7.5 18.375 8.25 18.375 8.25C19.125 9 19.5 10.125 19.5 11.625C19.5 15.75 16.875 16.875 14.25 17.25C14.625 17.625 15 18.375 15 19.5V22.5C15 22.875 15 23.25 15.75 23.25C16.875 23.25 24 19.875 24 12C24 5.25 18.75 0 12 0Z" fill="white"/>
                        </svg>
                        <p className='ml-[5px] text-[12px] lg:text-[16px]'>Github</p>
                    </div>
                   
                </div>
                <div 
                    className='grid place-content-center bg-[#707FB7] w-[140px] lg:w-[200px] h-[50px] rounded-t-[20px] rounded-br-[20px] ml-[15px] cursor-pointer'
                >
                    <div className='flex items-center'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 11V17L11 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 17L7 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className='ml-[5px] text-[12px] lg:text-[16px]'>Download CV</p>
                    </div>
                   
                </div>
            </div>

            <div 
                className='lg:hidden cursor-pointer'
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} 
            >
                <div>
                    <div className='w-[40px] h-0 border border-[white] mb-[5px] rounded-[20px]'/>
                    <div className='w-[40px] h-0 border border-[white] mb-[5px] rounded-[20px]'/>
                    <div className='w-[40px] h-0 border border-[white] mb-[5px] rounded-[20px]'/>
                    <div className='w-[40px] h-0 border border-[white] mb-[5px] rounded-[20px]'/>
                </div>
            </div>
            <div className={`${isHamburgerOpen ? '' : 'hidden'} fixed top-0 inset-x-0 p-2 lg:hidden z-50`}>
                <div className="rounded-lg shadow-md bg-[#252424] overflow-hidden pt-4 pb-7">
                    <div className="px-5 flex items-center justify-end">
                        <div className="-mr-2 cursor-pointer">
                            <svg onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link 
                            href={"/portfolio"} 
                            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} 
                            className='py-5 border-b border-black/10 w-1/2'
                        >
                            <p className='self-center text-center'>Portfolio</p>
                        </Link>
                        <Link 
                            href={"/skills"} 
                            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} 
                            className='py-5 border-b border-black/10 w-1/2'
                        >
                            <p className='self-center text-center'>Skills</p>
                        </Link>
                        <Link 
                            href={"/contact"} 
                            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)} 
                            className='py-5 border-b border-[#5757576e] cursor-pointer w-[90%]'
                        >
                            <p className='self-center text-center'>Contact</p>
                        </Link>
    
                        <div className='flex items-center space-x-6 pt-5'>
                            <div 
                                className='grid place-content-center border border-[#66CCFF] w-[120px] lg:w-[200px] h-[50px] rounded-t-[20px] rounded-br-[20px] cursor-pointer'
                            >
                                <div className='flex items-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0C5.25 0 0 5.25 0 12C0 19.875 7.125 23.25 8.25 23.25C9 23.25 9 22.875 9 22.5V20.625C6.375 21.375 5.25 19.875 4.875 18.75C4.875 18.75 4.875 18.375 4.125 17.625C3.75 17.25 2.25 16.5 3.75 16.5C4.875 16.5 5.625 18 5.625 18C6.75 19.5 8.25 19.125 9 18.75C9 18 9.75 17.25 9.75 17.25C6.75 16.875 4.5 15.75 4.5 11.625C4.5 10.125 4.875 9 5.625 8.25C5.625 8.25 4.875 6.75 5.625 4.875C5.625 4.875 7.5 4.875 9 6.375C10.125 5.625 13.875 5.625 15 6.375C16.5 4.875 18.375 4.875 18.375 4.875C19.125 7.5 18.375 8.25 18.375 8.25C19.125 9 19.5 10.125 19.5 11.625C19.5 15.75 16.875 16.875 14.25 17.25C14.625 17.625 15 18.375 15 19.5V22.5C15 22.875 15 23.25 15.75 23.25C16.875 23.25 24 19.875 24 12C24 5.25 18.75 0 12 0Z" fill="white"/>
                                    </svg>
                                    <p className='ml-[5px] text-[12px] lg:text-[16px]'>Github</p>
                                </div>
                            </div>

                            <div 
                                className='grid place-content-center bg-[#707FB7] w-[140px] lg:w-[200px] h-[50px] rounded-t-[20px] rounded-br-[20px] ml-[15px] cursor-pointer'
                            >
                                <div className='flex items-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 11V17L11 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 17L7 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className='ml-[5px] text-[12px] lg:text-[16px]'>Download CV</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </nav>
    )
}

export default Header;