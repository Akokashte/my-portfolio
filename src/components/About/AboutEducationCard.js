import { motion } from "framer-motion";

const AboutEducationCard = ({ standard, collegeName, passoutYear, grade, icon }) => {
    return (
        <>
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
                className="accordian_content_wrapper">
                <div className="education_icon">
                    {icon}
                </div>
                <div className="accordian_content">
                    <div className="standard_container">
                        <p>{standard}</p>
                    </div>
                    <div className="college_name_container">
                        <p>{collegeName}</p>
                    </div>
                    <div className="year_and_cgpa">
                        <p>{passoutYear}</p>
                        <p>{grade}</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutEducationCard;