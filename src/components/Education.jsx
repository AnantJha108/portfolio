import React from 'react'
import pu from '../images/pu.png'
import svm from '../images/svm.png'

const Education = () => {
    return (
        <section id="education" class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-wrap w-full mb-6 flex-col font-medium items-center text-center">
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200">Education</h1>
                    <p class="lg:w-3/4 w-full text-lg leading-relaxed text-gray-500 dark:text-gray-300">Here are some of my Experience on which I have been working on for the past 3 years.</p>
                </div>
                <div class="container px-5 py-4 mx-auto flex flex-wrap justify-center">
                    <div class="lg:w-3/4 md:w-1/2 md:py-6">
                        <div className='flex'>
                            <div class="w-2/4 flex-grow">
                                <div class="p-4">
                                    <div class="border border-gray-200 p-5 rounded-lg shadow-xl">
                                        <div className='flex'>
                                            <div class="flex-shrink-0 w-20 h-20 p-3 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                                <img src={pu} alt="" />
                                            </div>
                                            <div>
                                                <h2 class="text-xl text-gray-900 font-medium title-font dark:text-gray-200">Purnea college Purnea</h2>
                                                <p className='text-gray-900 font-serif dark:text-gray-300'>Bachelor of Computer Application (BCA)</p>
                                                <small className='text-gray-900 dark:text-gray-200'>Oct 2020 - Sep 2023</small>
                                            </div>
                                        </div>
                                        <p class="leading-relaxed text-base dark:text-gray-300 text-center text-gray-800 mt-1">I am completed my Bachelor's degree in Computer Application at Purnea College Purnea .</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex relative pb-12">
                                <div class="h-full w-20 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-20 h-20 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                    <img src={pu} alt="" />
                                </div>
                            </div>
                            <div class="w-2/4">
                                <h2 class="font-medium title-font text-gray-900 mb-1 tracking-wider text-lg mt-2 p-4 dark:text-gray-200">Oct 2021 - Sep 2025</h2>
                            </div>
                        </div>
                        <div className='flex'>
                            <div class="w-2/4 flex-grow pl-4">
                                <div class="flex-grow pl-4">
                                    <h2 class="font-medium title-font text-gray-900 mb-1 tracking-wider text-lg mt-2 p-4 float-end dark:text-gray-200">Passing Year : 2020</h2>
                                </div>
                            </div>
                            <div class="flex relative pb-12">
                                <div class="h-full w-20 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-20 h-20 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                    <img src={pu} alt="" />
                                </div>
                            </div>
                            <div class="w-2/4 p-4">
                                <div class="border border-gray-200 p-5 rounded-lg shadow-xl">
                                    <div className='flex'>
                                        <div class="flex-shrink-0 w-20 h-20 p-3 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                            <img src={pu} alt="" />
                                        </div>
                                        <div>
                                            <h2 class="text-xl text-gray-900 font-medium title-font dark:text-gray-200">BBM Secondary High School Purnea</h2>
                                            <p className='text-gray-900 font-serif dark:text-gray-300'>BSEB(XII), Science With Math</p>
                                            <small className='text-gray-900 dark:text-gray-200'>Passing Year : 2020</small>
                                        </div>
                                    </div>
                                    <p class="leading-relaxed text-base dark:text-gray-300 text-center text-gray-800 mt-1">I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div class="w-2/4 flex-grow">
                                <div class="p-4">
                                    <div class="border border-gray-200 p-5 rounded-lg shadow-xl">
                                        <div className='flex'>
                                            <div class="flex-shrink-0 w-20 h-20 p-3 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                                <img src={svm} className='rounded-full' alt="" />
                                            </div>
                                            <div>
                                                <h2 class="text-xl text-gray-900 font-medium title-font dark:text-gray-200">Saraswati Vidhya Mandir Baghmara Purnea </h2>
                                                <p className='text-gray-900 font-serif dark:text-gray-300'>CBSE(X), Science With Computer</p>
                                                <small className='text-gray-900 dark:text-gray-200'>Passing Year : 2018</small>
                                            </div>
                                        </div>
                                        <p class="leading-relaxed text-base text-center text-gray-800 dark:text-gray-300 mt-1">I am completed my Bachelor's degree in Computer Application at Purnea College Purnea .</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex relative pb-12">
                                <div class="h-full w-20 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-20 h-20 rounded-full inline-flex items-center justify-center text-white relative z-10">
                                    <img src={svm} className='rounded-full' alt="" />
                                </div>
                            </div>
                            <div class="w-2/4">
                                <h2 class="font-medium title-font text-gray-900 mb-1 tracking-wider text-lg mt-2 p-4 dark:text-gray-300">Passing Year : 2018</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education