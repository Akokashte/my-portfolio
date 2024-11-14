import React from "react";
import "../../styles/AllButtonsStyle/getResumeBtn.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const GetResume = () => {
    return (
        <>
            <NavLink to={"https://drive.google.com/file/d/1Cjf9iB8yYn71HmaQrvdMB8iiKJWugj9W/view?usp=sharing"} target="_blank" className="btn_container">
            <motion.div
            whileTap={{
              scale: 0.90
            }}
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                transition:{
                    duration:1,
                    ease:"easeInOut",
                    repeat:Infinity,
                    repeatDelay:2
                }
            }}
            >
                <div className="resume_btn">
                    Get My Resume
                </div>
                <div className="shadow_for_btn">
                </div>
            </motion.div>
            </NavLink>
        </>
    )
}

export default GetResume;