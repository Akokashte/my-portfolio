import React from "react";
import "../../styles/HomeStyles/services.css";
import { AnimatePresence, motion } from "framer-motion";

const Service = () => {

    const serviceData = [
        {
            imageUrl: "coding.webp",
            title: "Web App Development",
        },
        {
            imageUrl: "application-settings.webp",
            title: "Database Management",
        },
        {
            imageUrl: "web.webp",
            title: "Front-End Development",
        },
        {
            imageUrl: "setting.webp",
            title: "Back-End Development",
        }
    ]

    return (
        <>
            <section className="my_services_section">
                <div className="quality_services_container">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{
                            y: 0, opacity: 1,
                            transition: {
                                duration: 0.6,
                            }
                        }}
                        exit={{
                            y: 100,
                            opacity: 0
                        }}
                        style={{ overflow: "hidden" }}
                        className="service_head_desc_container"
                    >
                        <h2>My Quality Services</h2>
                        <p>I am MERN stack developer, I help companies to create stunning and Performative UI with backend Integration</p>
                    </motion.div>
                    <div className="animae_image_and_service_stack_container">
                        <div className="service_stack">
                            <AnimatePresence mode="wait">
                                {
                                    serviceData.map((curService, index) => {
                                        return <motion.div
                                            initial={{ x: -100, opacity: 0 }}
                                            whileInView={{
                                                x: 0, opacity: 1,
                                                transition: {
                                                    duration: 0.6,
                                                    when: "beforeChildren",
                                                    staggerChildren: 0.6,
                                                }
                                            }}
                                            exit={{
                                                x: -100,
                                                opacity: 0
                                            }}
                                            key={index}
                                            className="service"
                                        >
                                            <div className="service_image">
                                                <img src={curService.imageUrl} alt="service icon" />
                                            </div>
                                            <div className="service_name">
                                                {curService.title}
                                            </div>
                                            <div className="service_redirect_arrow">
                                                <img src="arrow-circle-right.webp" alt="arrow" />
                                            </div>
                                        </motion.div>
                                    })
                                }
                            </AnimatePresence>
                        </div>
                        <motion.div
                            initial={{ x: 100,  opacity: 0 }}
                            whileInView={{
                                x: 0, opacity: 1,
                                transition: {
                                    duration: 0.6,
                                }
                            }}
                            exit={{
                                x: 100,
                                opacity: 0
                            }}
                            className="right_animae_image"
                        >
                            <div className="animae_image_container">
                                <img src="animae.webp" alt="animae image here" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;