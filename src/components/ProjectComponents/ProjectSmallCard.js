import React from "react";
import "../../styles/ProjectStyles/projectSmallCard.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectSmallCard = ({ featuredImage, projectTitle, url }) => {
    const navigate = useNavigate()
    return (
        <motion.div
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
            className="small_card_wrapper"
        >
            <div className="img_wrapper" onClick={() => navigate(`/projects/${url}`)}>
                <img src={featuredImage} alt="" />
            </div>
            <div className="small_card_content">
                <div className="small_card_content_heading">
                    <h2 onClick={() => navigate(`/projects/${url}`)}>{projectTitle}</h2>
                </div>
                <div className="small_card_content_category">
                    <div className="cat_tab">
                        FullStack
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectSmallCard;