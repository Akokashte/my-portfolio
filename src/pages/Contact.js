import React from "react";
import "../styles/ContactStyles/contact.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { callContactApi, setContactData } from "../features/contactSlice";

const Contact = () => {
    const contactData = useSelector((state) => state.contact.contactData)

    const dispatch = useDispatch()

    const handleContactSubmit = (e) => {
        e.preventDefault();
        dispatch(callContactApi(contactData))
    }

    const handleContactInputChange = (e) => {
        dispatch(setContactData({ ...contactData, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <section className="contact_page_section">
                <form onSubmit={handleContactSubmit} className="contact_page_inner_section">
                    <div className="left_contact_us_image_social_icons_container">
                        <div className="contact_us_animated_image_container">
                            <img src="social.svg" />
                        </div>
                        <div className="contact_us_social_icons_outer_container">
                            <div className="contact_social_icon_container">
                                <i className="fi fi-brands-linkedin contact_social_icon"></i>
                            </div>
                            <div className="contact_social_icon_container">
                                <i className="fi fi-brands-instagram contact_social_icon"></i>
                            </div>
                            <div className="contact_social_icon_container">
                                <i className="fi fi-brands-github contact_social_icon"></i>
                            </div>
                            <div className="contact_social_icon_container">
                                <i className="fi fi-brands-twitter contact_social_icon"></i>
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
                                        <i className="fi fi-rr-user"></i>
                                    </div>
                                    <div className="first_and_last_name_input_label_group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input id="firstName" type="text" value={contactData.fname} name="fname" onChange={handleContactInputChange} placeholder={"Ankit"} required />
                                    </div>
                                </div>
                                <div className="first_and_last_name_icon_input_wrapper">
                                    <div className="first_and_last_name_icon">
                                        <i className="fi fi-rr-user"></i>
                                    </div>
                                    <div className="first_and_last_name_input_label_group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input id="lastName" type="text" value={contactData.surname} name="surname" onChange={handleContactInputChange} placeholder={"Kashte"} required />
                                    </div>
                                </div>
                            </div>
                            <div className="contact_email_phone_container_style">
                                <div className="email_phone_icon">
                                    <i className="fi fi-rr-envelope"></i>
                                </div>
                                <div className="email_phone_input_container_style">
                                    <input type="email" value={contactData.email} name="email" onChange={handleContactInputChange} placeholder="Email" required />
                                </div>
                            </div>
                            <div className="contact_email_phone_container_style">
                                <div className="email_phone_icon">
                                    <i className="fi fi-rr-mobile-notch"></i>
                                </div>
                                <div className="email_phone_input_container_style">
                                    <input type="number" value={contactData.phoneNumber} name="phoneNumber" onChange={handleContactInputChange} placeholder="Phone" required />
                                </div>
                            </div>
                            <div className="contact_your_thoughts_container">
                                <textarea className="contact_message_input_area" name="message" onChange={handleContactInputChange} value={contactData.message} placeholder="Describe Your thoughts..." required  >
                                </textarea>
                            </div>
                            <motion.div
                                whileTap={{
                                    scale: 0.98
                                }}
                                className="send_contact_details_btn_container">
                                <motion.input
                                    whileTap={{
                                        scale: 0.98
                                    }}
                                    type="submit" value={"send"} />
                            </motion.div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Contact;