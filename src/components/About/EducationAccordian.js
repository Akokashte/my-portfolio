import React from "react";
import "../../styles/AboutStyles/educationAccordian.css";
import AboutEducationCard from "./AboutEducationCard";

const EducationAccordian = () => {
    const educationCardDetails = [
        {
            standard: "BE CSE",
            collegeName: "Gharda Institute Of Technology, Lavel",
            passoutYear: "2024",
            grade: "9.16 CGPA",
            icon: <i className="fi fi-tr-graduation-cap"></i>
        },
        {
            standard: "12th (CBSE)",
            collegeName: "Rotary English Medium School, Khed",
            passoutYear: "2020",
            grade: "86.40 %",
            icon: <i className="fi fi-ts-book-alt"></i>
        },
        {
            standard: "10th (SSC)",
            collegeName: "Dr. Vr. Ghole Highschool, Wakavali",
            passoutYear: "2018",
            grade: "89 %",
            icon: <i className="fi fi-ts-workshop"></i>
        },

    ]
    return (
        <>
            <div className="education_accordian_container">
                <div className="education_accordian_inner_wrapper">
                    <h2>Education</h2>
                    <div className="about_education_card_wrapper">
                        {
                            educationCardDetails.map((curEducation, index) => (
                                <AboutEducationCard key={index}
                                    standard={curEducation.standard}
                                    collegeName={curEducation.collegeName}
                                    passoutYear={curEducation.passoutYear}
                                    grade={curEducation.grade}
                                    icon={curEducation.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationAccordian;