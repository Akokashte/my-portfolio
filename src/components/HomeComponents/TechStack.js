import React, { useEffect } from "react";
import "../../styles/HomeStyles/techstack.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setRecentTechStack } from "../../features/techStackSlice";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../utils/toastfy/Notification";
import TechStackCard from "./TechStackCard";
import TechStackCardSkeleton from "./skeletons/TechStackCardSkeleton";

const TechStack = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const recentTechStackData = useSelector((state) => state.techStack.recentTechStackData)

    useEffect(() => {
        fetchTechStackData()
    }, []);

    async function fetchTechStackData() {
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
                    <div className="tech_head_desc_container">
                        <h2>
                            My Work Skills
                        </h2>
                        <p>
                            Development your website, a comprehensive guide to designing a website that converts visitors into customers in my website.
                        </p>
                    </div>
                    <div className="category_selector">
                        <div className="category" onClick={() => navigate("/about")}>
                            View All
                        </div>
                    </div>
                    <div
                        className="my_techstack_container">
                        <div className="techstacks_wrapper">

                            {
                                !recentTechStackData.length ?
                                Array.from({ length: 4 }).map((curCard, index) => {
                                    return <TechStackCardSkeleton key={index} />
                                })
                                :
                                recentTechStackData.map((curTechStack, index) => {
                                    return (
                                        <TechStackCard index={index} techStackImage={curTechStack.techStackImage} name={curTechStack.name} skillPercentage={curTechStack.skillPercentage} />
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