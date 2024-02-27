import React from 'react'

const Banner = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-4xl mb-1 font-medium text-gray-900">Hi, I am 
                            <br class="hidden lg:inline-block"/>Anant Jha
                        </h1>
                        <p class="mb-2 text-3xl leading-relaxed font-medium">I am a Full Stack Devloper</p>
                        <p class="mb-8 leading-relaxed font-medium"> I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex rounded-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">Button</button>
                            <button class="ml-4 inline-flex rounded-full text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-lg">Button</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded-full" alt="hero" src="https://dummyimage.com/600x600"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner