import React from "react";
import "../../styles/HomeStyles/feedback.css";

const Feedback = () => {
    return (
        <>
            <section className="feedback_section">
                <div className="feedback_wrapper">
                    <div className="feedback_carousel">
                        <div className="star_image_container">
                            <div className="star_div">
                                <img src="star.png" alt="star here" />
                            </div>
                            <div className="image_div">
                                <img src="review.webp" alt="image here" />
                            </div>
                        </div>
                        <div className="feedback_content">
                            <div className="feedback_text">
                                Phosfluorescently engage worldwide methodologies with in web-enabled technology. Interactively coordi proactive commerce via process centric outside the thinking this pursue technology scalable.
                            </div>
                            <div className="team_member_profile">
                                <div className="team_member_image">
                                    <img src="team2.webp" className="profile_image" alt="team memeber image" />
                                </div>
                                <div className="team_member_name">
                                    <div className="member_name">
                                        Sujeet Ghadge
                                    </div>
                                    <div className="role_of_member">
                                        Team Member
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_top_team_member_image">
                        <img src="feedback1.webp" alt="team memeber image" className="profile_image" />
                    </div>
                    <div className="left_side_team_member_image">
                        <img src="team2.webp" alt="team memeber image" className="profile_image" />
                    </div>
                    <div className="left_bottom_team_member_image">
                        <img src="feedback1.webp" alt="team memeber image" className="profile_image" />
                    </div>
                    <div className="right_top_team_member_image">
                        <img src="feedback1.webp" alt="team memeber image" className="profile_image" />
                    </div>
                    <div className="right_right_team_member_image">
                        <img src="team2.webp" alt="team memeber image" className="profile_image" />
                    </div>
                    <div className="right_bottom_team_member_image">
                        <img src="feedback1.webp" alt="team memeber image" className="profile_image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedback;