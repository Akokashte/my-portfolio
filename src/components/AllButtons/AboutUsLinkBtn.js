import React from "react";
import "../../styles/AllButtonsStyle/aboutLinkBtnStyle.css";
import { motion } from "framer-motion";

const AboutUsLinkBtn = ({ index, icon, linkTitle, linkUrl }) => {

    const handleLinkNavigation = (link) => {
        window.open(link, "_blank")
    }

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.4,
                        delay: 0.3 * index
                    }
                }}
                className="about_link_btn"
                onClick={() => handleLinkNavigation(linkUrl)}
            >
                <div className="about_link_btn_icon">
                    {icon}
                </div>
                <p className="link_name">{linkTitle}</p>
            </motion.div>
        </>
    )
}

export default AboutUsLinkBtn;