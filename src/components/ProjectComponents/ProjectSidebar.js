import React, { useEffect } from "react";
import ProjectSmallCard from "./ProjectSmallCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../../styles/ProjectStyles/projectSidebar.css";
import { setRecentProjectData } from "../../features/projectSlice";
import ProjectSmallCardSkeleton from "./skeletons/ProjectSmallCardSkeleton";

const ProjectSidebar = () => {
    const recentProjectData = useSelector((state) => state.project.recentProjectData)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            const fetchProjectResponse = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/project/recent/project`)

            if (fetchProjectResponse.data.success) {
                dispatch(setRecentProjectData(fetchProjectResponse.data.data))
            }
        } catch (error) {
            alert("something went wrong while fetching project data")
        }
    }

    return (
        <>
            <section
                className="project_sidebar_section">
                <h2 className="project_sidebar_heading">Recent Projects</h2>
                <div className="project_sidebar_container">
                    {
                        !recentProjectData.length ? Array.from({ length: 3 }).map((curCard, index) => {
                            return <ProjectSmallCardSkeleton key={index} />
                        }) :
                            recentProjectData.map((recentProjectData, index) => (
                                <ProjectSmallCard key={index} featuredImage={recentProjectData.featuredImage} projectTitle={recentProjectData.title} url={recentProjectData.url} />
                            ))
                    }
                </div>
            </section>
        </>
    )
}

export default ProjectSidebar;