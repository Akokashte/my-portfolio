import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const openGitHubLink = ()=>{
        window.open("https://github.com/Akokashte","_blank")
    }

    const activeLinkStyle = ({ isActive }) => ({
        color: isActive ? "var(--textExtraLightBlue)" : "var(--textDark)"
    })

    const mobileActiveLinkStyle = ({ isActive }) => ({
        color: isActive ? "var(--textExtraLightBlue)" : "var(--textDark)",
        // backgroundColor: isHovered ? "red" : null,
    })

    const changeHamburgerState = () => {
        setHamburgerClicked(!hamburgerClicked)
    }

    return (
        <>
            <section className="navbar_section">
                <div className="navbar">
                    <div className="logo_container">
                        <div className="logo_image">
                            <img src="man.webp" alt="my logo here" />
                        </div>
                        <h1 className="logo_title">AK</h1>
                    </div>
                    <div className="nav_links">
                        <NavLink to={"/"} className="link" style={activeLinkStyle}>Home</NavLink>

                        <NavLink to={"/projects"} className="link" style={activeLinkStyle}>Projects</NavLink>

                        <NavLink to={"/about"} className="link" style={activeLinkStyle}>About Me</NavLink>
                    </div>

                    <motion.div whileTap={{ scale: 0.85 }}
                        onClick={openGitHubLink}
                        className="dark_btn"
                        >
                        <p>
                            GitHub
                        </p>
                    </motion.div>
                    <div className="hamburger_container" onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                        <i className="fi fi-br-menu-burger hamburger_menu"></i>
                    </div>
                </div>
                <AnimatePresence>
                    {hamburgerClicked && <motion.div
                        className={"mobile_navigation"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "linear", duration: 0.1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="logo_nav_btn_container">
                            <div className="logo_hamburger_container">
                                <div className="logo_container">
                                    <div className="logo_image">
                                        <img src="man.webp" alt="my logo here" />
                                    </div>
                                    <h1 className="logo_title">AK</h1>
                                </div>
                                <div className="hamburger_container" onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                                    <i class="fi fi-br-cross"></i>
                                </div>
                            </div>
                            <div className="mobile_nav_links">
                                <div className="mobile_icon_link_group" onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
                                    <i class="fi fi-rr-house-chimney mobile_nav_icon"></i>
                                    <NavLink to={"/"} className="mobile_link" onClick={changeHamburgerState} style={mobileActiveLinkStyle}>Home</NavLink>
                                </div>
                                <div className="mobile_icon_link_group" onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
                                    <i class="fi fi-rr-blueprint mobile_nav_icon"></i>
                                    <NavLink to={"/projects"} className="mobile_link" onClick={changeHamburgerState} style={mobileActiveLinkStyle}>Projects</NavLink>
                                </div>
                                <div className="mobile_icon_link_group" onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)}>
                                    <i class="fi fi-rr-info mobile_nav_icon"></i>
                                    <NavLink to={"/about"} className="mobile_link" onClick={changeHamburgerState} style={mobileActiveLinkStyle}>About Me</NavLink>
                                </div>
                            </div>

                            <motion.div
                                className="mobile_dark_btn"
                                whileTap={{ scale: 0.85 }}
                            >
                                <p>
                                    GitHub
                                </p>
                            </motion.div>
                        </div>
                        <div className="social_connection_container">
                            <span className="connect_text">Let's Go & Connect With ME</span>
                            <div className="social_media_icons_container">
                                <div className="social_media_icon">
                                    <img src="instagram.webp" alt="icon here" />
                                </div>
                                <div className="social_media_icon">
                                    <img src="linkedin.webp" alt="icon here" />
                                </div>
                                <div className="social_media_icon">
                                    <img src="facebook.webp" alt="icon here" />
                                </div>
                                <div className="social_media_icon">
                                    <img src="twitter.webp" alt="icon here" />
                                </div>
                            </div>
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </section >
        </>
    )
}

export default Navbar;