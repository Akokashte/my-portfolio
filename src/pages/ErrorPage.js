import React from "react";
import "../styles/error.css";

const ErrorPage = ()=>{
    const errorImageLink = "https://res.cloudinary.com/dy2inzope/image/upload/v1726929451/om1ojkan59nt9kgccgwg.svg"
    return(
        <>
            <div className="error_page_wrapper">
                <div className="error_svg_container">
                    <img src={errorImageLink} alt="error_svg here" />
                </div>
                <p className="error_desc">Error page not found</p>
            </div>
        </>
    )
}

export default ErrorPage;