import React from "react";
import "../../styles/AboutStyles/aboutTechStackCard.css";

const TechStackCard = ({ techStackName, techStackImage }) => {
    return (
        <>
            <div className="tech_stack_card_wrapper">
                <div className="tech_stack_card_inner_wrapper">
                    <div className="tech_stack_icon_container">
                        <img src={techStackImage} alt="tech stack icon here" />
                    </div>
                    <div className="tech_stack_info">
                        <h2>{techStackName}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStackCard;