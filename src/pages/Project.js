import React, { useEffect } from "react";
import "../styles/ProjectStyles/project.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProjectData } from "../features/projectSlice";
import { notifyError } from "../utils/toastfy/Notification";
import { motion } from "framer-motion";
import ProjectCardSkeleton from "../components/ProjectComponents/ProjectCardSkeleton";
import ProjectCard from "../components/ProjectComponents/ProjectCard";

const Project = () => {
    const dispatch = useDispatch()
    const projectData = useSelector((state) => state.project.projectData)

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            const fetchProjectResponse = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/project/fetchall/project`)

            if (fetchProjectResponse.data.success) {
                dispatch(setProjectData(fetchProjectResponse.data.data))
            }
        } catch (error) {
            notifyError("something went wrong while fetching project data")
        }
    }

    return (
        <>
            <section className="all_projects_section">
                <div className="all_projects_container">
                    <div className="project_title_desc_wrapper">
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            Take a look at my projects
                        </motion.h2>
                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            My Portfolio of Projects that showcase my skills and experience
                        </motion.p>
                    </div>
                    {
                        !projectData.length ?
                            Array.from({ length: 3 }).map((curProject, index) => {
                                return <ProjectCardSkeleton />
                            })
                            :
                            projectData.map((curProject, index) => {
                                return <ProjectCard index={index} curProject={curProject} />
                            })
                    }
                </div>
            </section>
        </>
    )
}

export default Project;