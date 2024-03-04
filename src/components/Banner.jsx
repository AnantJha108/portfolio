import React from 'react'
import dp from '../images/IMG_20230328_122333.jpg'

const Banner = () => {
    return (
        <>
            <section id="about" class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 pt-36 pb-16 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pl-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-4xl mb-1 font-medium text-gray-900 dark:text-gray-300">Hi, I am
                            <br class="hidden lg:inline-block" />Anant Jha
                        </h1>
                        <p class="mb-2 text-3xl leading-relaxed font-medium dark:text-gray-300">I am a Full Stack Devloper</p>
                        <p class="mb-8 leading-relaxed font-medium dark:text-gray-300"> Software development professional with experience in developing and designing web applications using
                            HTML , CSS , JavaScript , Python , Django , Php , Laravel , MySql , SqlLite , Bootstrap and React. Adept at
                            developing and deploying complex backend systems, web services.<br/></p>
                        <div class="flex justify-center">
                            <a href='https://drive.google.com/file/d/1zPiSjT8pZuJ7lH8eBspiCDaQ52cMr3TK/view?usp=sharing' class=" ring-2 ring-blue-500 inline-flex rounded-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg" target='_blanck'>My Resume</a>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2">
                        <img class="ring-2 ring-green-200 dark:ring-gray-300 object-cover object-center rounded-full lg:ml-16" width={340} alt="hero" src={dp} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner