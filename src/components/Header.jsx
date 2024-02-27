import React from 'react'

const Header = () => {
    return (
        <header class="text-gray-500 bg-green-200 body-font">
            <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span class="ml-3 text-xl">My Portfolio</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap font-medium items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">About</a>
                    <a class="mr-5 hover:text-gray-900">Skills</a>
                    <a class="mr-5 hover:text-gray-900">Experience</a>
                    <a class="mr-5 hover:text-gray-900">Projects</a>
                    <a class="mr-5 hover:text-gray-900">Education</a>
                </nav>
                <button class="inline-flex items-center rounded-full bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base font-medium mt-4 md:mt-0">GitHub Profile
                </button>
            </div>
        </header>
    )
}

export default Header