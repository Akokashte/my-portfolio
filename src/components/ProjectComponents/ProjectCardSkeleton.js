import React, { useEffect, useState } from "react";
import "../../styles/ProjectStyles/ProjectSkeleton.css";
import ProjectCategoryBtn from "./ProjectCategoryBtn";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCategoryButtonSkeleton from "./ProjectCategoryButtonSkeleton";

const ProjectCardSkeleton = () => {
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
                className="project_skeleton_card_info"
            >
                <div className="project_skeleton_thumbnail_image">
                    <div className="project_skeleton_img"></div>
                </div>
                <div className="project_information">
                    <div className="skeleton_only_project_information_inner_container">
                        <div className="project_card_skeleton_heading">
                        </div>
                        <div className="project_card_skeleton_para_new_group">
                            <div className="project_card_skeleton_para">
                            </div>
                            <div className="project_card_skeleton_para">
                            </div>
                            <div className="project_card_skeleton_para">
                            </div>
                        </div>
                    </div>
                    <div className="skeleton_project_page_category_container">
                        <ProjectCategoryButtonSkeleton />
                        <ProjectCategoryButtonSkeleton />
                        <ProjectCategoryButtonSkeleton />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectCardSkeleton;