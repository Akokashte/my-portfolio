import "./TechStackCardSkeleton.css";

const TechStackCardSkeleton = () => {
    return <>
        <div className="techstack" >
            <div className="mytech_icon_and_title_group" >
                <div className="mytech_icon shimmer_mytech_icon">
                </div>
                <div className="tech_title shimmer_tech_title">
                </div>
            </div>
            <div className="tech_percentage_container tech_percentage_container_shimmer">
            </div>
        </div>
    </>
}

export default TechStackCardSkeleton;