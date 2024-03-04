import React from 'react'
import { Link } from "react-scroll";
import { useState, useEffect } from 'react';

const Header = () => {
    const [theme, setTheme] = useState("light");

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
        <header id="header" class="text-gray-500 bg-green-200 body-font  top-0 start-0 fixed w-full dark:bg-slate-900">
            <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <Link class="cursor-pointer flex title-font font-medium items-center text-gray-900 dark:text-gray-200 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">My Portfolio</span>
                </Link>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap font-medium items-center text-gray-700 text-base justify-center">
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>About</Link>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Skills</Link>
                    <Link to='experience' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Experience</Link>
                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Projects</Link>
                    <Link to='education' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 dark:text-gray-300 cursor-pointer'>Education</Link>
                </nav>

                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" onClick={handleThemeSwitch}/>
                        <div class="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
                </label>
                <a href='https://github.com/AnantJha108' class="inline-flex items-center rounded-full bg-gray-100 border-0 py-1 px-3 mx-6 focus:outline-none hover:bg-gray-200 text-base font-medium mt-4 md:mt-0" target='_blank'>GitHub Profile
                </a>
            </div>
        </header>
    )
}

export default Header