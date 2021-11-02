import React, { Fragment } from "react";

import Blogs from "../components/blogs/Blogs";




export default function ContactUs(props) {
 
  return (
    <Fragment>
      <div className="hero-wrapper">
        <div className="flex-grow-5 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9 h-100"
            // style={{ backgroundImage: "url(" + chefs + ")" }}
            style={{
              // backgroundImage: `url(${hero6})`,
              backgroundColor:"blue",
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              height: "100%",
              width: "100%",
            }}
          />
          <div className="bg-composed-wrapper--content justify-content-center">
            {/* <SplashNavBar {...props} /> */}
            <Blogs />
          </div>
        </div>
       
      </div>
      
    </Fragment>
  );
}
