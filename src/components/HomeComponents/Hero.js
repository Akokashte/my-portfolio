import React from "react";
import "../../styles/HomeStyles/hero.css";
import GetResume from "../AllButtons/GetResume";
import LinkedinLink from "../AllButtons/LinkedinLink";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { callContactApi, setContactData } from "../../features/contactSlice";

const Hero = () => {
    const contactFormData = useSelector((state) => state.contact.contactData)

    const dispatch = useDispatch()
    const name = "Ankit Vinayak Kashte".split("");
    const developerText = "Developer".split("");
    const techStack = [
        {
            icon: "ui-design.webp",
            techName: "Frontend"
        },
        {
            icon: "tech1.webp",
            techName: "Backend"
        },
        {
            icon: "thorough.webp",
            techName: "FullStack"
        },
        {
            icon: "pencil.webp",
            techName: "UI/UX"
        }
    ]

    const handleContactFormInputChange = (e) => {
        dispatch(setContactData({ ...contactFormData, [e.target.name]: e.target.value }))
    }

    const handleContactFormSubmit = (e) => {
        dispatch(callContactApi(contactFormData))
    }

    return (
        <>
            <section className="hero_section">
                <div className="hero_container">
                    <div className="my_info_section">
                        <div className="inner_info_wrapper">
                            <h2 className="my_name">
                                {
                                    name.map((curChar, index) => {
                                        return <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: index / 12,

                                            }}
                                            exit={{
                                                opacity: 0
                                            }}
                                            key={index}
                                        >
                                            {curChar}
                                        </motion.span>
                                    })
                                }
                            </h2>
                            <div className="expertise_container">
                                <div className="mernsvg_container">
                                    <motion.p
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeatDelay: 5, repeat: Infinity }}
                                    >
                                        MERN Stack
                                    </motion.p>
                                    <div className="underline_container">
                                        <motion.img
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{ duration: 1, repeatDelay: 2, repeat: Infinity }}
                                            src="needle-underline.svg" alt="underline here" />
                                    </div>
                                </div>
                                <p>
                                    {
                                        developerText.map((DevChar, index) => {
                                            return <motion.span
                                                initial={{ opacity: 0, y: 100 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: index / 10,
                                                    repeat: Infinity,
                                                    repeatDelay: 3
                                                }}
                                                key={index}
                                            >
                                                {DevChar}
                                            </motion.span>
                                        })
                                    }
                                </p>
                            </div>
                            <div className="small_techstack">
                                {
                                    techStack.map((curTechStack, index) => {
                                        return <motion.div
                                            initial={{ opacity: 0, y: 50, scale: 0.2 }} // Keep initial state for children
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.2 + index * 0.2
                                            }} // Optional: transition for child
                                            key={index}
                                            className="tech_icon_text_group"
                                        >
                                            <div className="tech_icon">
                                                <img src={curTechStack.icon} alt="tech icon" />
                                            </div>
                                            <span>{curTechStack.techName}</span>
                                        </motion.div>
                                    })
                                }
                            </div>
                            <p className="my_desc">
                                I am a MERN stack developer, I help companies to create stunning and performative UI.
                            </p>

                            <div className="btn_wrapper">
                                <GetResume />
                                <LinkedinLink />
                            </div>
                        </div>
                    </div>
                    <div className="right_section">
                        <div className="star_and_animae">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.6,
                                    }
                                }}
                                className="star_container">
                                <img src="star.webp" alt="star icon here" />
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.6,
                                    }
                                }}
                                className="my_animae_image_container">
                                <img src="animae2.webp" alt="animae profile here" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: [1, 0]
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeIn"
                                }
                            }}
                            className="contact_form_container">
                            <div className="contact_form">
                                <div className="title_of_form_and_image">
                                    <div className="title_of_form">
                                        <p>
                                            Contact Me
                                        </p>
                                    </div>
                                    <div className="star_icon_container">
                                        {
                                            <motion.img src="stars.webp" alt="star_icon here"
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    transition: {
                                                        duration: 1,
                                                        repeat: Infinity
                                                    }
                                                }}
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="actual_form_content_wrapper">
                                    <div className="fullname_container">
                                        <div className="label_input_group">
                                            <p>Name</p>
                                            <div className="inputcover">
                                                <input type="text" name="fname" value={contactFormData.fname} onChange={handleContactFormInputChange} placeholder="Ankit" />
                                            </div>
                                        </div>
                                        <div className="label_input_group">
                                            <p>Surname</p>
                                            <div className="inputcover">
                                                <input type="text" name="surname" value={contactFormData.surname} onChange={handleContactFormInputChange} placeholder="Kashte" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="phone_email_label_input_group">
                                        <div className="phone_email_inputcover">
                                            <input type="number" name="phoneNumber" value={contactFormData.phoneNumber} onChange={handleContactFormInputChange} placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="phone_email_label_input_group">
                                        <div className="phone_email_inputcover">
                                            <input type="text" name="email" value={contactFormData.email} onChange={handleContactFormInputChange} placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="phone_email_label_input_group">
                                        <div className="phone_email_inputcover">
                                            <input type="text" name="message" value={contactFormData.message} onChange={handleContactFormInputChange} placeholder="Type your Message" />
                                        </div>
                                    </div>
                                    <div className="contact_btn_container" onClick={handleContactFormSubmit}>
                                        <div className="contact_submit_btn">
                                            Get In Touch
                                        </div>
                                        <div className="shadow_for_contact_submit_btn">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="counter_section">
                    <div className="counter_container">
                        <div className="counter">
                            <div className="counter_icon_and_count">
                                <div className="counter_icon">
                                    <motion.img src="thumbs-up.webp" alt="counter_icon"
                                        initial={{
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeIn",
                                            }
                                        }}
                                    />
                                </div>
                                <div className="counter_number">
                                    {["1", "0", "+"].map((curDigit, index) => {
                                        return <motion.span
                                            initial={{ opacity: 0, y: -100 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeIn",
                                                    delay: index * 0.2,
                                                }
                                            }}
                                            key={index} className="counter_num_span">
                                            {curDigit}
                                        </motion.span>
                                    })
                                    }
                                </div>
                            </div>
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeIn",
                                    }
                                }}
                                className="counter_title">
                                Projects done
                            </motion.div>
                        </div>
                        <div className="middle_counter">
                            <div className="counter_icon_and_count">
                                <div className="counter_icon">
                                    <motion.img src="feedback.webp" alt="counter_icon"
                                        initial={{
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeIn",
                                            }
                                        }}
                                    />
                                </div>
                                <div className="counter_number">
                                    {["1", "2", "+"].map((curDigit, index) => {
                                        return <motion.span
                                            initial={{ opacity: 0, y: -100 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeIn",
                                                    delay: index * 0.2,
                                                }
                                            }}
                                            key={index} className="counter_num_span">
                                            {curDigit}
                                        </motion.span>
                                    })
                                    }
                                </div>
                            </div>
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeIn",
                                    }
                                }}
                                className="counter_title">
                                Feedback
                            </motion.div>
                        </div>
                        <div className="counter">
                            <div className="counter_icon_and_count">
                                <div className="counter_icon">
                                    <motion.img src="user.webp" alt="counter_icon"
                                        initial={{
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeIn",
                                            }
                                        }}
                                    />
                                </div>
                                <div className="counter_number">
                                    {["1", "0", "k", "+"].map((curDigit, index) => {
                                        return <motion.span
                                            initial={{ opacity: 0, y: -100 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeIn",
                                                    delay: index * 0.2,
                                                }
                                            }}
                                            key={index} className="counter_num_span">
                                            {curDigit}
                                        </motion.span>
                                    })
                                    }
                                </div>
                            </div>
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeIn",
                                    }
                                }}
                                className="counter_title">
                                Total Users
                            </motion.div>
                        </div>
                    </div>
                    <div className="upper_layer_of_counter">

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;