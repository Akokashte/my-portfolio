import React, { useEffect } from "react";
import "../styles/AboutStyles/about.css";
import TechStackCard from "../components/About/AboutTechStackCard";
import AboutUsLinkBtn from "../components/AllButtons/AboutUsLinkBtn";
import EducationAccordian from "../components/About/EducationAccordian";
import { useDispatch, useSelector } from "react-redux";
import { setTechStackData } from "../features/techStackSlice";
import axios from "axios";
import { motion } from "framer-motion";

const About = () => {
    const allAboutUsLinks = [
        {
            icon: <i className="fi fi-rr-resume btn_icon"></i>,
            linkTitle: "Resume",
            linkUrl: "https://drive.google.com/file/d/1JfA4bAsVXwJ7sn98R_b6U5CASqpx33tg/view?usp=sharing"
        },
        {
            icon: <i className="fi fi-brands-linkedin btn_icon"></i>,
            linkTitle: "Linkedin",
            linkUrl: "https://www.linkedin.com/in/ankitkashte"
        },
        {
            icon: <i className="fi fi-brands-instagram btn_icon"></i>,
            linkTitle: "Instagram",
            linkUrl: ""
        },
        {
            icon: <i className="fi fi-brands-facebook btn_icon"></i>,
            linkTitle: "Facebook",
            linkUrl: ""
        },
        {
            icon: <i className="fi fi-brands-github btn_icon"></i>,
            linkTitle: "GitHub",
            linkUrl: "https://github.com/Akokashte"
        },
    ]
 
    const dispatch = useDispatch()
    const publicTechStackData = useSelector((state) => state.techStack.techStackData)

    useEffect(() => {
        fetchTechStackData()
    }, [publicTechStackData])

    const fetchTechStackData = async () => {
        try {
            if (publicTechStackData.length === 0) {
                const fetchTechStackResponse = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/techstack/fetch/public/techstack`)

                if (fetchTechStackResponse.data.success) {
                    dispatch(setTechStackData(fetchTechStackResponse.data.data.publicTechStackArray))
                }
            }

        } catch (error) {
            alert("something went wrong while fetching techstack data !")
        }
    }

    return (
        <>
            <section className="about_section_outer_container">
                <div className="about_section_inner_container">
                    <div className="about_title_desc_wrapper">
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 50

                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 0.6
                                }
                            }}
                        >
                            A passionate developer and BE CS student who works in technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, MySQL, MongoDB, RestAPIs, WordPress
                        </motion.p>
                    </div>
                    <div
                        className="about_us_image_and_info_about_me_container">
                        <motion.div
                            initial={{
                                x: -100,
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            className="about_us_image_wrapper">
                            <img src="about.svg" />
                        </motion.div>
                        <motion.div
                            initial={{
                                x: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            className="about_us_actual_content_wrapper">
                            <div className="about_us_paragraph_group">
                                <p className="about_information">As a recent graduate with a strong foundation in software development, I am excited to bring my skills in JavaScript, React.js, Node.js, Express, HTML, CSS, Python, SQL, and MongoDB to the industry. My passion for coding and problem-solving drives me to continuously learn and grow, and I am eager to contribute to innovative projects and make a meaningful impact.</p>
                                <p className="about_information">With a fresh perspective and a commitment to excellence, I am ready to embark on this journey and turn creative ideas into effective solutions.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="all_links_here">
                        {
                            allAboutUsLinks.map((currentLink, index) => {
                                return (
                                    <AboutUsLinkBtn index={index} icon={currentLink.icon} linkTitle={currentLink.linkTitle} />
                                )
                            })
                        }
                    </div>
                    <EducationAccordian />
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
                     className="about_skills_outer_container">
                        <motion.h2
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
                        >My Skills</motion.h2>
                        <div className="about_skills_inner_wrapper">
                            {
                                publicTechStackData.map((curTechStack, index) => {
                                    return <TechStackCard techStackName={curTechStack.name} techStackImage={curTechStack.techStackImage} techStackPercentage={curTechStack.skillPercentage} />
                                })
                            }
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About;

// A passionate developer and BE CS student who works in technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, MySQL, MongoDB, RestAPIs, WordPress                          