import React from "react";
import "../../styles/ProjectStyles/projectInfoLeftComponent.css";
import BlockRenderer from "../EditorBlockComponents/BlockRenderer";
import Loader from "../Loader";

const ProjectInfoLeftComponent = ({ title, featuredImage, projectEditorBlocksData }) => {

    return (
        <>
            <section className="project_info_left_section">
                <div className="project_info_actual_data">
                    <div className="featured_image_and_project_title">
                        <div className="featured_image">
                            <img
                                src={featuredImage}
                                alt="featured_image"
                            />
                        </div>
                        <h2 className="project_title">
                            {title}
                        </h2>
                    </div>
                    <div className="project_block_data">
                        {
                            !projectEditorBlocksData ? <Loader /> :
                                projectEditorBlocksData.map((block, index) => {
                                    return <BlockRenderer key={index} block={block} />
                                })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectInfoLeftComponent;