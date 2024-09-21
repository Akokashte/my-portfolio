import React from "react";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

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
                                <img src="man.webp" alt="logo pic" />
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
                            {/* <NavLink to={"/contact"} className="footer_link" style={activeLinkStyle}>
                                Contact
                            </NavLink> */}
                        </div>
                        <div className="social_icon_container">
                            <div className="icon">
                                <img src="github.webp" alt="icon here" />
                            </div>
                            <div className="icon">
                                <img src="linkedin.webp" alt="icon here" />
                            </div>
                            <div className="icon">
                                <img src="instagram.webp" alt="icon here" />
                            </div>
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