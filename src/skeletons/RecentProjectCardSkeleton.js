import React from "react";
import "../styles/skeletons/home_recent_project_card.css";

const RecentProjectCardSkeleton = () => {
    return (
        <>
            <div className="project_skeleton">
                <div className="skeleton_thumbnail_metadata_container">
                    <div className="skeleton_project_thumbnail">

                    </div>
                    <div className="meta_data_skeleton">
                        <div className="meta_head"></div>
                        <div className="meta_desc">

                        </div>
                        <div className="meta_desc_second">

                        </div>
                    </div>
                </div>
                <div className="project_page_btn_skeleton" >

                </div>
            </div>
        </>
    )
}

export default RecentProjectCardSkeleton;