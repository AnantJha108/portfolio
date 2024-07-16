import React, { useState } from 'react'
import ProjectsData from '../Data/projects'

const Projects = () => {
    let [modalStatus, setModalStatus] = useState(ProjectsData.id)
    return (
        <section id="projects" class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
                <div class="flex flex-wrap w-full mb-6 flex-col font-medium items-center text-center">
                    <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900 dark:text-gray-200">Projects</h1>
                    <p class="lg:w-3/4 w-full text-lg leading-relaxed text-gray-500 dark:text-gray-300">Here are some of my Projects on which I have been working on for the past 3 years.</p>
                </div>
                <div class="flex flex-wrap">
                    {ProjectsData.map((projectsItems, i) => {
                        return (
                            <>
                                <div className={`ModalDiv xl:w-2/4 w-full max-h-full z-50 ${modalStatus === projectsItems.id ? "showModalDiv" : ""}`}>
                                    <div class="xl:w-full md:w-full max-h-full p-4">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div class="px-4 py-3 ">
                                                <button className="absolute right-4 top-3 px-2 py-1 bg-red-600 rounded-lg text-white" onClick={() => setModalStatus(false)}>X</button>
                                                <div class="w-100 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                                    <img src={projectsItems.image} alt="" />
                                                </div>
                                                <h2 class="text-lg text-gray-900 font-medium title-font dark:text-gray-200">{projectsItems.title}</h2>
                                                <p class="leading-relaxed text-base">{projectsItems.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="xl:w-1/3 md:w-1/2 p-4" key={i} onClick={() => setModalStatus(projectsItems.id)}>
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