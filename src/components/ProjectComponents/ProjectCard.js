import React, { useEffect, useState } from "react";
import "../../styles/ProjectStyles/projectCard.css";
import ProjectCategoryBtn from "./ProjectCategoryBtn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ curProject }) => {
    const [width, setWidth] = useState(window.outerWidth)
    const navigate = useNavigate()
    console.log(width)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    })
    // 480px < width <= 747px
    const { url, title, categories, featuredImage, projectEditorBlocksData } = curProject


    const descriptionTruncated = width > 480 && width <= 747 ?
        projectEditorBlocksData[1]?.data?.text?.slice(0, 180) :
        width <= 480
            ?
            projectEditorBlocksData[1]?.data?.text?.slice(0, 60)
            : projectEditorBlocksData[1]?.data?.text?.slice(0, 300)

    const categoryLimit = width >= 480 ? 4 : 1;

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 200
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5
                    }
                }}
                className="project_card_info"
            >
                <div className="project_thumbnail_image" onClick={() => navigate(`/projects/${url}`)}>
                    <img src={featuredImage} alt="project thumb" />
                </div>
                <div className="project_information">
                    <div className="only_project_information_inner_container">
                        <h2 onClick={() => navigate(`/projects/${url}`)}>
                            {title}
                        </h2>
                        <p>
                            {descriptionTruncated}...
                        </p>
                    </div>
                    <div className="project_page_category_container">
                        {
                            Object.entries(categories)?.slice(0, categoryLimit).map(([curCategory], index) => (
                                <ProjectCategoryBtn key={index} buttonLabel={curCategory} />
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectCard;