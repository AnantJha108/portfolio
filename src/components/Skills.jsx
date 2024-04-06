import React from 'react'
import { Backend, Frontend, Others, ProgrammingLanguage } from '../Data/skills'

const Skills = () => {
    return (
        <section id="skills" class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-wrap w-full mb-6 flex-col font-medium items-center text-center">
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200">Skills</h1>
                    <p class="lg:w-3/4 w-full text-lg leading-relaxed text-gray-500 dark:text-gray-300">Here are some of my skills on which I have been working on for the past 3 years.</p>
                </div>
                <div class="w-full flex flex-wrap xl:px-20">
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">FrontEnd</h2>
                            <div class='flex flex-wrap justify-center'>
                                {Frontend.map((v, i) => {
                                    return (
                                        <div key={i} className='border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap'>
                                            <img src={v.img} width={26} alt="" />
                                            <span className='ml-2 font-medium dark:text-gray-400'>{v.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div >
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">BackEnd</h2>
                            <div class='flex flex-wrap justify-center'>
                                {Backend.map((v, i) => {
                                    return (
                                        <div key={i} className='border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap'>
                                            <img src={v.img} width={26} alt="" />
                                            <span className='ml-2 font-medium dark:text-gray-400'>{v.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">Others</h2>
                            <div class='flex flex-wrap justify-center'>
                                {Others.map((v, i) => {
                                    return (
                                        <div key={i} className='border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap'>
                                            <img src={v.img} width={26} alt="" />
                                            <span className='ml-2 font-medium dark:text-gray-400'>{v.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">Programming Language</h2>
                            <div class='flex flex-wrap justify-center'>
                                {ProgrammingLanguage.map((v, i) => {
                                    return (
                                        <div key={i} className='border border-gray-200 xl:px-4 xl:py-2 px-2 py-1 rounded-lg shadow-lg xl:mx-2 xl:my-3 mx-2 my-2  flex flex-wrap'>
                                            <img src={v.img} width={26} alt="" />
                                            <span className='ml-2 font-medium dark:text-gray-400'>{v.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Skills