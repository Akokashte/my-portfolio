import React, { useEffect, useState } from "react";
import "../../styles/HomeStyles/recentprojects.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setRecentProjectData } from "../../features/projectSlice";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toastfy/Notification";
import RecentProjectCardSkeleton from "../../skeletons/RecentProjectCardSkeleton";
import RecentProjectCard from "./RecentProjectCard";

const RecentProjects = () => {
    const [currentScreenWidth, setCurrentScreenWidth] = useState()

    const dispatch = useDispatch()
    const recentProjectData = useSelector((state) => state.project.recentProjectData)
    const navigate = useNavigate()

    console.log("recentProjectData", recentProjectData)

    useEffect(() => {
        const handleResize = () => setCurrentScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        fetchProjects()
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    async function fetchProjects() {
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
                    <div
                        className="recent_project_head_desc_container"
                    >
                        <h2>Recent Projects</h2>
                        <p>Projects that helped me to learn concepts in better way and I enjoyed them while programming it.</p>
                    </div>
                    <div className="arrow_image">
                        <img src="down_arrow.webp" alt="down_arrow icon here" />
                    </div>
                    <div className="project_wrapper">
                        <div className="project_container">
                            {
                                !recentProjectData.length ?
                                    Array.from({ length: 3 }).map((curCard, index) => {
                                        return <RecentProjectCardSkeleton />
                                    })
                                    :
                                    recentProjectData.map((currentRecentProjectData, index) => {
                                        return <RecentProjectCard key={index} index={index} handleButtonClick={handleButtonClick} slicingLimitOfCharacter={slicingLimitOfCharacter} currentRecentProjectData={currentRecentProjectData} />

                                    })

                            }
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default RecentProjects;