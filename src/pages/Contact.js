import React from "react";
import "../styles/ContactStyles/contact.css";

const Contact = () => {
    return (
        <>
            <section className="contact_page_section">
                <div className="contact_page_inner_section">
                    <div className="left_contact_us_image_social_icons_container">
                        <div className="contact_us_animated_image_container">
                            <img src="social.svg" />
                        </div>
                        <div className="contact_us_social_icons_outer_container">
                            <div className="contact_social_icon_container">
                                <i class="fi fi-brands-linkedin contact_social_icon"></i>
                            </div>
                            <div className="contact_social_icon_container">
                                <i class="fi fi-brands-instagram contact_social_icon"></i>
                            </div>
                            <div className="contact_social_icon_container">
                                <i class="fi fi-brands-github contact_social_icon"></i>
                            </div>
                            <div className="contact_social_icon_container">
                                <i class="fi fi-brands-twitter contact_social_icon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="right_contact_us_form_container">
                        <div className="contact_us_form_title">
                            <h2>get in touch</h2>
                            <p>24/7 we will answer your problems and query</p>
                        </div>
                        <div className="contact_us_form_input_container">
                            <div className="first_and_last_name_container">
                                <div className="first_and_last_name_icon_input_wrapper">
                                    <div className="first_and_last_name_icon">
                                    <i class="fi fi-rr-user"></i>
                                    </div>
                                    <div className="first_and_last_name_input_label_group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input id="firstName" type="text" value={"Ankit"} />
                                    </div>
                                </div>
                                <div className="first_and_last_name_icon_input_wrapper">
                                    <div className="first_and_last_name_icon">
                                    <i class="fi fi-rr-user"></i>                                    </div>
                                    <div className="first_and_last_name_input_label_group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input id="lastName" type="text" value={"Ankit"} />
                                    </div>
                                </div>
                            </div>
                            <div className="contact_email_phone_container_style">
                                <div className="email_phone_icon">
                                    <i class="fi fi-rr-envelope"></i>
                                </div>
                                <div className="email_phone_input_container_style">
                                    <input type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="contact_email_phone_container_style">
                                <div className="email_phone_icon">
                                    <i class="fi fi-rr-mobile-notch"></i>
                                </div>
                                <div className="email_phone_input_container_style">
                                    <input type="number" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="contact_your_thoughts_container">
                                <textarea className="contact_message_input_area">
                                    Describe Your thoughts...
                                </textarea>
                            </div>
                            <div className="send_contact_details_btn_container">
                                <p>
                                    send
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;