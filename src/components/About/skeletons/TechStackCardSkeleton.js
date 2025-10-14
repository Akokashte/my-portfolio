import "./TechStackCardSkeleton.css";

const TechStackCardSkeleton = () => {
    return (
        <>
            <div className="tech_stack_card_wrapper">
                <div className="tech_stack_card_inner_wrapper">
                    <div className="tech_stack_icon_container shimmer_tech_stack_icon_container">
                    </div>
                    <div className="tech_stack_info shimmer_tech_stack_info">
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStackCardSkeleton;