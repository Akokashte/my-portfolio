import React, { useEffect } from "react";
import "../../styles/HomeStyles/techstack.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setRecentTechStack } from "../../features/techStackSlice";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toastfy/Notification";
import { motion } from "framer-motion";
import Loader from "../Loader";

const TechStack = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const recentTechStackData = useSelector((state) => state.techStack.recentTechStackData)

    useEffect(() => {
        fetchTechStackData()
    }, [recentTechStackData])

    const fetchTechStackData = async () => {
        try {
            const fetchTechStackResponse = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/techstack/fetch/recent/public/techstack`)

            if (fetchTechStackResponse.data.success) {
                dispatch(setRecentTechStack(fetchTechStackResponse.data.data))
            }
        } catch (error) {
            notifyError("something went wrong while fetching techstack data !")
        }
    }

    return (
        <>
            <section className="techstack_section">
                <div className="techstack_container">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{
                            y: 0, opacity: 1,
                        }}
                        className="tech_head_desc_container">
                        <h2>
                            My Work Skills
                        </h2>
                        <p>
                            Development your website, a comprehensive guide to designing a website that converts visitors into customers in my website.
                        </p>
                    </motion.div>
                    <motion.div
                        className="category_selector"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{
                            y: 0, opacity: 1,
                            transition: {
                                duration: 0.6,
                            }
                        }}
                    >
                        <div className="category" onClick={() => navigate("/about")}>
                            View All
                        </div>
                    </motion.div>
                    <div className="my_techstack_container">
                        <div className="techstacks_wrapper">
                            {
                                !recentTechStackData ? <Loader /> :
                                recentTechStackData.map((curTechStack, index) => {
                                    return (
                                        <motion.div
                                            className="techstack"
                                            key={index}
                                            initial={{y:100, opacity: 0 }} 
                                            whileInView={{
                                                y:0,
                                                opacity:1,
                                                transition:{
                                                duration:0.3,
                                                delay:index*0.2
                                            }
                                            }} 
                                        >
                                            <div className="mytech_icon_and_title_group">
                                                <div className="mytech_icon">
                                                    <img src={curTechStack.techStackImage} alt="tech icon" />
                                                </div>
                                                <div className="tech_title">
                                                    {curTechStack.name}
                                                </div>
                                            </div>
                                            <div className="tech_percentage_container">
                                                <div className="tech_percentage" style={{ width: `${curTechStack.skillPercentage}%` }}>
                                                    {curTechStack.skillPercentage}%
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStack;