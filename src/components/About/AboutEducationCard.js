
const AboutEducationCard = ({ standard, collegeName, passoutYear, grade, icon }) => {
    return (
        <>
            <div
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
            </div>
        </>
    )
}

export default AboutEducationCard;