import React from "react";
import "../../styles/ProjectStyles/projectInfoLeftComponent.css";
import BlockRenderer from "../EditorBlockComponents/BlockRenderer";
import { motion } from "framer-motion";
import Loader from "../Loader";

const ProjectInfoLeftComponent = ({ title, featuredImage, projectEditorBlocksData }) => {

    return (
        <>
            <section className="project_info_left_section">
                <div className="project_info_actual_data">
                    <div className="featured_image_and_project_title">
                        <div className="featured_image">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                    y: 100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }
                                }}
                                src={featuredImage}
                                alt="featured_image"
                            />
                        </div>
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }}
                            className="project_title"
                        >{title}</motion.h2>
                    </div>
                    <div className="project_block_data">
                        {
                            !projectEditorBlocksData ? <Loader /> :
                            projectEditorBlocksData.map((block, index) => {
                                return <BlockRenderer key={index} block={block} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectInfoLeftComponent;