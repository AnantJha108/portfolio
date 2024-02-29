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
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900">Skills</h1>
                    <p class="lg:w-3/4 w-full text-lg leading-relaxed text-gray-500">Here are some of my skills on which I have been working on for the past 3 years.</p>
                </div>
                <div class="flex flex-wrap px-20">
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 text-xl text-center font-medium title-font mb-2">FrontEnd</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={html} width={26} alt="" />
                                    <span className='ml-2 font-medium'>HTML</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={css} width={26} alt="" />
                                    <span className='ml-2 font-medium'>CSS</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={BootStrap} width={26} alt="" />
                                    <span className='ml-2 font-medium'>BootStrap</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={Tailwind} width={26} alt="" />
                                    <span className='ml-2 font-medium'> Tailwind Css</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={Javascript} width={26} alt="" />
                                    <span className='ml-2 font-medium'>JavaScript</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={reactLogo} width={26} alt="" />
                                    <span className='ml-2 font-medium'>React js</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={material} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Material UI</span>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 text-xl text-center font-medium title-font mb-2">BackEnd</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={php} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Php</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={laravel} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Laravel</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={python} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Python</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={django} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Django</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={firebase} width={26} alt="" />
                                    <span className='ml-2 font-medium'>FireBase</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 text-xl text-center font-medium title-font mb-2">Others</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={git} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Git</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={github} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Github</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={netlify} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Netlify</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={postman} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Postman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-2/4 md:w-1/2 p-4">
                        <div class="border border-gray-200 p-6 rounded-lg shadow-lg">
                            <h2 class="text-gray-900 text-xl text-center font-medium title-font mb-2">Programming Language</h2>
                            <div class='flex flex-wrap justify-center'>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={c} width={26} alt="" />
                                    <span className='ml-2 font-medium'>C</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={cPlus} width={26} alt="" />
                                    <span className='ml-2 font-medium'>C++</span>
                                </div>
                                <div className='border border-gray-200 px-4 py-2 rounded-lg shadow-lg mx-2 my-3 flex flex-wrap'>
                                    <img src={python} width={26} alt="" />
                                    <span className='ml-2 font-medium'>Python</span>
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