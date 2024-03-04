import React from 'react'
import reactLogo from '../images/react.svg'
import html from '../images/html.png'
import css from '../images/css.png'
import BootStrap from '../images/bootstrap.png'
import Tailwind from '../images/tailwind.png'
import Javascript from '../images/JavaScript-logo.png'
import material from '../images/material.png'
import php from '../images/php.png'
import laravel from '../images/laravel.png'
import python from '../images/python.png'
import django from '../images/django.png'
import firebase from '../images/firebase.svg'
import mySql from '../images/mysql.svg'
import git from '../images/git.png'
import github from '../images/github.png'
import netlify from '../images/netlify.png'
import postman from '../images/postman.png'
import c from '../images/c.png'
import cPlus from '../images/c++.png'

const Skills = () => {
    return (
        <section id="skills" class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-wrap w-full mb-6 flex-col font-medium items-center text-center">
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200">Skills</h1>
                    <p class="lg:w-3/4 w-full text-lg leading-relaxed text-gray-500 dark:text-gray-300">Here are some of my skills on which I have been working on for the past 3 years.</p>
                </div>
                <div class="flex flex-wrap xl:px-20">
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">FrontEnd</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={html} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>HTML</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={css} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>CSS</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={BootStrap} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>BootStrap</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={Tailwind} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'> Tailwind Css</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={Javascript} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>JavaScript</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={reactLogo} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>React js</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={material} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Material UI</span>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">BackEnd</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={php} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Php</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={laravel} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Laravel</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={python} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Python</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={django} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Django</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={firebase} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>FireBase</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={mySql} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>MySql</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">Others</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={git} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Git</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={github} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Github</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={netlify} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Netlify</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={postman} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Postman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 dark:text-gray-200 text-xl text-center font-medium title-font mb-2">Programming Language</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={c} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>C</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={cPlus} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>C++</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={python} width={26} alt="" />
                                    <span className='ml-2 font-medium dark:text-gray-400'>Python</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Skills