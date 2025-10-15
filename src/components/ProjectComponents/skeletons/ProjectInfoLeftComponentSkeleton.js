import "./projectInfoLeftComponentSkeleton.css";

const ProjectInfoLeftComponentSkeleton = ({ title, featuredImage, projectEditorBlocksData }) => {

    return (
        <>
            <section className="project_info_left_section">
                <div className="project_info_actual_data">
                    <div className="featured_image_and_project_title">
                        <div className="featured_image shimmer_featured_image">
                        </div>
                        <div className="project_title shimmer_project_title">
                        </div>
                    </div>
                    <div className="project_block_data shimmer_block_data">

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectInfoLeftComponentSkeleton;