import React from 'react'
import { Link} from "react-scroll";

const Header = () => {
    return (
        <header id="header" class="text-gray-500 bg-green-200 body-font z-20 top-0 start-0 fixed w-full">
            <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">My Portfolio</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap font-medium items-center text-base justify-center">
                    <Link to='about' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 cursor-pointer'>About</Link>
                    <Link to='skills' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 cursor-pointer'>Skills</Link>
                    <Link to='experience' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 cursor-pointer'>Experience</Link>
                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 cursor-pointer'>Projects</Link>
                    <Link to='education' spy={true} smooth={true} offset={-100} duration={700} className='mr-5 hover:text-gray-900 cursor-pointer'>Education</Link>
                </nav>
                <button class="inline-flex items-center rounded-full bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base font-medium mt-4 md:mt-0">GitHub Profile
                </button>
            </div>
        </header>
    )
}

export default Header