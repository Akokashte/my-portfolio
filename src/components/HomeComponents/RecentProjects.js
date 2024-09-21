import React, { useEffect, useState } from "react";
import "../../styles/HomeStyles/recentprojects.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setRecentProjectData } from "../../features/projectSlice";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toastfy/Notification";
import { motion } from "framer-motion";

const RecentProjects = () => {
    const [currentScreenWidth, setCurrentScreenWidth] = useState()

    const dispatch = useDispatch()
    const recentProjectData = useSelector((state) => state.project.recentProjectData)
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => setCurrentScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        fetchProjects()
        return () => window.removeEventListener("resize", handleResize);
    }, [recentProjectData])

    const fetchProjects = async () => {
        try {
            const fetchProjectResponse = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/project/recent/project`)

            if (fetchProjectResponse.data.success) {
                dispatch(setRecentProjectData(fetchProjectResponse.data.data))
            }
        } catch (error) {
            notifyError("something went wrong while fetching project data")
        }
    }

    const slicingLimitOfCharacter = currentScreenWidth >= 480 ? 80 : 55
    const handleButtonClick = (url) => {
        navigate(`/projects/${url}`)
    }

    return (
        <>
            <section className="recent_project_section">
                <div className="recent_project_container">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{
                            y: 0, opacity: 1,
                            transition: {
                                duration: 0.6,
                            }
                        }}
                        exit={{
                            y: 100,
                            opacity: 0
                        }}
                        className="recent_project_head_desc_container"
                    >
                        <h2>Recent Projects</h2>
                        <p>Projects that helped me to learn concepts in better way and I enjoyed them while programming it.</p>
                    </motion.div>
                    <div className="arrow_image">
                        <img src="down_arrow.webp" alt="down_arrow icon here" />
                    </div>
                    <div className="project_wrapper">
                        <motion.div className="project_container"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.6,
                                }
                            }}
                        >
                            {
                                recentProjectData.map((curRecentProject, index) => {
                                    return <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{
                                            y: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: 0.6,
                                            }
                                        }}
                                        className="project"
                                        key={index}
                                    >
                                        <div className="thumbnail_metadata_container" key={index}>
                                            <div className="project_thumbnail">
                                                <img src={curRecentProject.featuredImage} alt="project thumbnail" />
                                            </div>
                                            <div className="meta_data">
                                                <h4>{curRecentProject.title}</h4>
                                                <p>
                                                    {curRecentProject.projectEditorBlocksData[1]?.data?.text?.slice(0, slicingLimitOfCharacter)}...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="project_page_btn" onClick={() => handleButtonClick(curRecentProject.url)} >
                                            Explore Project
                                        </div>
                                    </motion.div>
                                })
                            }
                        </motion.div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default RecentProjects;