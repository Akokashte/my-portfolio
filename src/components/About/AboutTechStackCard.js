import React from "react";
import "../../styles/AboutStyles/aboutTechStackCard.css";
import { motion } from "framer-motion";

const TechStackCard = ({techStackName,techStackImage,techStackPercentage}) => {
    return (
        <>
            <motion.div 
            initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6
                    }
                }}
            className="tech_stack_card_wrapper"
            >
                <div className="tech_stack_card_inner_wrapper">
                    <div className="tech_stack_icon_container">
                        <img src={techStackImage} alt="tech stack icon here" />
                    </div>
                    <div className="tech_stack_info">
                        <h2>{techStackName}</h2>
                        <div className="tag_percent_wrapper">
                            <div className="percent_icon_container">
                                <p>{techStackPercentage}</p>
                                <i class="fi fi-sr-percentage"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default TechStackCard;