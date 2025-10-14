const TechStackCard = ({ index, techStackImage, name, skillPercentage }) => {
    return <>
        <div
            className="techstack"
            key={index}
        >
            <div className="mytech_icon_and_title_group" >
                <div className="mytech_icon">
                    <img src={techStackImage} alt="tech icon" />
                </div>
                <div className="tech_title">
                    {name}
                </div>
            </div>
            <div className="tech_percentage_container">
                <div className="tech_percentage" style={{ width: `${skillPercentage}%` }}>
                    {skillPercentage}%
                </div>
            </div>
        </div>
    </>
}

export default TechStackCard;