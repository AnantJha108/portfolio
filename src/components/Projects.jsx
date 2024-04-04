import React, { useState } from 'react'
import ProjectsData from '../Data/projects'

const Projects = () => {
    let [modalStatus, setModalStatus] = useState(false)
    return (
        <section id="projects" class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-wrap w-full mb-6 flex-col font-medium items-center text-center">
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200">Projects</h1>
                    <p class="lg:w-3/4 w-full text-lg leading-relaxed text-gray-500 dark:text-gray-300">Here are some of my skills on which I have been working on for the past 3 years.</p>
                </div>
                <div class="flex flex-wrap">
                    {ProjectsData.map((projectsItems, i) => {
                        return (
                            <>
                                <div className={`ModalDiv ${modalStatus ? "showModalDiv" : ""}`}>
                                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div class="p-4 md:p-5 space-y-4">
                                                <div class="w-100 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                                    <img src={projectsItems.image} alt="" />
                                                </div>
                                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 dark:text-gray-200">{projectsItems.title}</h2>
                                                <p class="leading-relaxed text-base">{projectsItems.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="xl:w-1/3 md:w-1/2 p-4" key={i} onClick={() => setModalStatus(!modalStatus)}>
                                    <div class="border border-gray-200 p-6 rounded-lg">
                                        <div class="w-100 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <img src={projectsItems.image} alt="" />
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2 dark:text-gray-200">{projectsItems.title}</h2>
                                        <p class="leading-relaxed text-base">{projectsItems.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects