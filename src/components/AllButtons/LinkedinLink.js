import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AllButtonsStyle/linkedinLinkBtn.css";
import { motion } from "framer-motion";

const LinkedinLink = () => {
    const openLinkedinLinkInNewTab = (e) => {
        window.open("https://in.linkedin.com/in/ankitkashte", "_blank");
    }
    return (
        <>
            <motion.div
                whileTap={{ scale: 0.90 }}
                onClick={openLinkedinLinkInNewTab}
                className="linkedin_btn">
                <p>
                    Linkedin Profile
                </p>
                <div className="share_icon" >
                    <img src="share.webp" alt="redirect_arrow" />
                </div>
            </motion.div>
        </>
    )
}

export default LinkedinLink;