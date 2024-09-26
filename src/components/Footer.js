import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { openGitHubLink, openInstagramLink, openLinkedinLink, socialMediaIconLinks } from "./AllLinks";

const Footer = () => {
    const activeLinkStyle = ({ isActive }) => ({
        color: isActive ? "var(--textExtraLightBlue)" : "var(--textDark)"
    })

    return (
        <>
            <footer className="footer_section">
                <div className="footer">
                    <div className="footer_meta_content">
                        <div className="logo_name_container">
                            <div className="logo_image_container">
                                <img src={socialMediaIconLinks.mylogoLink} alt="logo pic" />
                            </div>
                            <h1>
                                AK
                            </h1>
                        </div>
                        <div className="navigation_links_for_footer">
                            <NavLink to={"/"} className="footer_link" style={activeLinkStyle}>
                                Home
                            </NavLink>
                            <NavLink to={"/projects"} className="footer_link" style={activeLinkStyle}>
                                Project
                            </NavLink>
                            <NavLink to={"/about"} className="footer_link" style={activeLinkStyle}>
                                About Me
                            </NavLink>
                            <NavLink to={"/contact"} className="footer_link" style={activeLinkStyle}>
                                Contact Me
                            </NavLink>
                        </div>
                        <div className="social_icon_container">
                            <motion.div
                                whileTap={{ scale: 0.85 }}
                                className="icon"
                                onClick={openGitHubLink}
                            >
                                <img src={socialMediaIconLinks.githubIconLink} alt="icon here" />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.85 }}
                                className="icon"
                                onClick={openLinkedinLink}
                            >
                                <img src={socialMediaIconLinks.linkedinIconLink} alt="icon here" />
                            </motion.div>
                            <motion.div
                                whileTap={{ scale: 0.85 }}
                                onClick={openInstagramLink}
                                className="icon"
                            >
                                <img src={socialMediaIconLinks.instagramIconLink} alt="icon here" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="copyright_section">
                    <p>
                        Copyright Ⓒ 2024 AK. All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;