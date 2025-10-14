import { motion } from "framer-motion";
import React from "react";

const RecentProjectCard = ({ index, handleButtonClick, slicingLimitOfCharacter, currentRecentProjectData }) => {
    const { featuredImage, title, projectEditorBlocksData, url } = currentRecentProjectData;

    return (
        <>
            <motion.div
                initial={{
                    // y: 100, 
                    opacity: 0
                }}
                whileInView={{
                    // y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.6,
                    }
                }}
                className="project"
            >
                <div className="thumbnail_metadata_container">
                    <div className="project_thumbnail">
                        <img src={featuredImage} alt="project thumbnail" />
                    </div>
                    <div className="meta_data">
                        <h4>{title}</h4>
                        <p>
                            {projectEditorBlocksData[1]?.data?.text?.slice(0, slicingLimitOfCharacter)}...
                        </p>
                    </div>
                </div>
                <div className="project_page_btn" onClick={() => handleButtonClick(url)} >
                    Explore Project
                </div>
            </motion.div>
        </>
    )
}

export default RecentProjectCard;