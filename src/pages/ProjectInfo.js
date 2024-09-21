import React, { useEffect } from "react";
import "../styles/ProjectStyles/projectinfo.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProjectInfoLeftComponent from "../components/ProjectComponents/ProjectInfoLeftComponent";
import axios from "axios";
import { setCurrentProjectData } from "../features/projectSlice";
import ProjectSidebar from "../components/ProjectComponents/ProjectSidebar";
import { notifyError } from "../utils/toastfy/Notification";

const ProjectInfo = () => {
    const dispatch = useDispatch()
    const { url } = useParams()
    const projectData = useSelector((state) => state.project.currentProjectData)

    useEffect(() => {
        fetchProject()
    }, [projectData])

    const fetchProject = async () => {
        try {
            const fetchProjectResponse = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/project/fetch/single/project`,
                {
                    params: {
                        url
                    }
                }
            )
            if(fetchProjectResponse.data.success){
                dispatch(setCurrentProjectData(fetchProjectResponse.data.data))
            }
        } catch (error) {
            notifyError("something went wrong while fetching project")
        }
    }
    return (
        <>
            <section className="project_info_new_section">
                <div className="project_info_actual_inner_container">
                    <ProjectInfoLeftComponent
                        title={projectData.title}
                        featuredImage={projectData.featuredImage}
                        projectEditorBlocksData={projectData.projectEditorBlocksData}
                    />
                    <ProjectSidebar />
                </div>
            </section>
        </>
    )
}

export default ProjectInfo;

{/* <section className="project_info_section" >
<div className="project_info_inner_wrapper">
    <h1 className="project_info_heading">
        {currentProjectData.title}
    </h1>
    <div className="author_container">
        <div className="author_info">
            <div className="author_image">
                <img src="fashion.webp" alt="author image" />
            </div>
            <div className="author_name_specialization">
                <p className="author_name">
                    Ankit Kashte
                </p>
                <p className="author_specialization">
                    Blog Admin
                </p>
            </div>
        </div>
        <div className="time_audio__info_container">
            <div className="time_count">
                2 minutes read
            </div>
            <div className="dot">

            </div>
            <div className="audio_here">
                <p className="try_audio">Try audio</p>
                <div className="audio_icon">
                    <img src="audio.webp" alt="audio icon" />
                </div>
            </div>
        </div>
    </div>

    <div className="project_featured_image">
        <img src="featured_image.webp" alt="featured_image" />
    </div>
</div>
</section> */}