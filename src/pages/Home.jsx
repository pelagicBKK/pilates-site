import React, { Fragment } from "react";
import "./Home.css";
import SectionOne from "../components/home/SectionOne";
// import Lottie from 'react-lottie';
// import animationData from '../images/lotties/pilates-animation.json';
import TopList from "../components/home/TopList";
// import BenefitsTable from "../components/home/BenefitsTable";
// import stock2 from "../images/avatars/avatar2.jpg";

import {
  // Grid,
  
  // Container,
  
} from "@material-ui/core";
// import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
// import svgImage2 from "../images/illustrations/pilates-reformer-silhouette-by-Vexels.svg";
// import hero6 from "../images/hero-bg/hero-6.jpg";

export default function Home() {
 
  return (

    <Fragment>
       <div className="hero-wrapper" >
        <div className="flex-grow-5 d-flex align-items-center">
          <div
            // className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{
              // backgroundImage: `url(${hero6})`,
              backgroundColor:"white",
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              height: "100%",
              width: "100%",
            }}
       >
          <div className="bg-composed-wrapper--content py-5 ">
            <TopList/>
         </div>
    
        </div>
        </div>

        <SectionOne/>
        
        
     
     
        
      </div>
    </Fragment>
  );
}
