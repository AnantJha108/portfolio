import React from 'react'
import { Link } from "react-scroll";
import { useState, useEffect } from 'react';

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header id="header" class="text-gray-500 bg-green-200 body-font  top-0 start-0 fixed w-full dark:bg-slate-900 z-10">
            <div class="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link class="cursor-pointer title-font font-medium items-center text-gray-900 dark:text-gray-200 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">My Portfolio</span>
                </Link>
                <nav class="md:ml-auto md:mr-auto font-medium items-center text-gray-700 text-base justify-center  hidden lg:block">
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>About</Link>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Skills</Link>
                    <Link to='experience' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Experience</Link>
                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Projects</Link>
                    <Link to='education' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Education</Link>
                </nav>
                <label class="items-center cursor-pointer hidden lg:block">
                    <input type="checkbox" value="" class="sr-only peer" onClick={handleThemeSwitch} />
                    <div class="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
                </label>
                <a href='https://github.com/AnantJha108' class=" hidden lg:block items-center rounded-full bg-gray-100 border-0 py-1 px-3 mx-6 focus:outline-none hover:bg-gray-200 text-base font-medium mt-4 md:mt-0" target='_blank'>GitHub Profile
                </a>
                <button onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }} className='visible lg:invisible'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30" className='dark:fill-white fill-black' fill='#FFFFFF'>
                        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                    </svg>
                </button>
                {isMenuOpen && (
                    <div className='w-full bg-gray-100 dark:bg-gray-800'>
                        <nav className="">
                            <div
                                className="hidden max-lg:block cursor-pointer"
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                }}>
                            </div>
                            <ul className="lg:hidden flex flex-col items-center justify-center ">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={700} className='hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4'>About</Link>
                                <Link to='skills' spy={true} smooth={true} offset={-100} duration={700} className='hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4'>Skills</Link>
                                <Link to='experience' spy={true} smooth={true} offset={-100} duration={700} className='hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4'>Experience</Link>
                                <Link to='projects' spy={true} smooth={true} offset={-100} duration={700} className='hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4'>Projects</Link>
                                <Link to='education' spy={true} smooth={true} offset={-100} duration={700} className='hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4'>Education</Link>
                                <label class="hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4 flex">
                                    <span className='pr-3'>Dark Mode</span>
                                    <input type="checkbox" value="" class="sr-only peer" onClick={handleThemeSwitch} />
                                    <div class="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
                                </label>
                                <a href='https://github.com/AnantJha108' class="hover:text-gray-900 dark:text-gray-300 cursor-pointer font-medium hover:bg-gray-600 w-full py-2 px-4" target='_blank'>GitHub Profile
                                </a>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header