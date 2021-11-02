import React, { Fragment } from "react";
import "./Home.css";
import SectionOne from "../components/home/SectionOne";
import Lottie from 'react-lottie';
import animationData from '../images/lotties/pilates-animation.json';
import TopList from "../components/home/TopList";
// import BenefitsTable from "../components/home/BenefitsTable";
// import stock2 from "../images/avatars/avatar2.jpg";

import {
  Grid,
  
  Container,
  
} from "@material-ui/core";
// import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
// import svgImage2 from "../images/illustrations/pilates-reformer-silhouette-by-Vexels.svg";
// import hero6 from "../images/hero-bg/hero-6.jpg";

export default function Home(props) {
  // const pushSchedule = () => {
  //  props.history.push("https://calendly.com/booking-hero/30min");
  // };
  // const pushSchedule = () => {
  //   props.history.push("/about");
  // };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (

    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper ">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
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
            <Container className="py-5 " >
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-success badge-pill">
                      {/* New version */}
                    </span>
                    {/* <Tooltip
                      arrow
                      placement="right"
                      title="More info placeholder!"
                    >
                      <span className="text-black-50 pl-3">
                        <FontAwesomeIcon icon={["far", "question-circle"]} />
                      </span>
                    </Tooltip> */}
                  </div>
                  <div className="text-black mt-3">
                    <h1 className="mb-4 text-center">
                      Who Can Do Pilates?    
                      {/* <span className="text-black-50 pl-3">
                    <i class="fas fa-question"></i>
                      </span> */}
                      
                    </h1>
                   
                    <div >
                      <TopList/>
                    {/* <blockquote className="blockquote ">
                      <p className="font-size-lg ">
                          Gay is a long term resident of Brentwood, TN and has an
                        extensive background in healthcare and building
                        relationships.  Gay is a long term resident of Brentwood, TN and has an
                        extensive background in healthcare and building
                        relationships.
                      </p>
                      </blockquote>
                      <blockquote className="blockquote mb-0">
                      <p className="font-size-lg ">
                          Gay is a long term resident of Brentwood, TN and has an
                        extensive background in healthcare and building
                        relationships.  Gay is a long term resident of Brentwood, TN and has an
                        extensive background in healthcare and building
                        relationships.
                      </p>
                      </blockquote> */}
                   
                    </div>
                    <div className="divider border-2 border-dark my-5 border-light opacity-2 rounded-circle w-25" />

                    <div>
                   
                      {/* <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        // onClick={() => this.pushSchedule({ })}
                        // onClick={pushSchedule}
                        className="mr-3"
                      >
                        <a
                          href="https://calendly.com/booking-hero/30min"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="btn-wrapper--label">Schedule</span>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                          </span>
                        </a>
                      </Button>
                      <Button size="large" variant="outlined" color="primary">
                        <a href="mailto:abc@example.com?subject = Feedback&body = Message">
                          Send Feedback
                        </a>
                      </Button> */}
                      
                    </div>
                    
                  </div>
                </Grid>
                
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-md-flex align-items-center">
                  
               
                  {/* <img
                    alt="..."
                    className="w-100 mx-auto d-block img-fluid"
                    src={svgImage2}
                  /> */}
                 <Lottie 
                  
	    options={defaultOptions}
        height={500}
        width={650}
      />
                </Grid> 
              </Grid>
            </Container>
         </div>
        {/* <div className=" pt-5">  */}
         {/* <Container className="card-container">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card className="card mb-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <CardContent className="p-3">
                    <div className="bg-deep-blue text-center text-white display-4 d-60 rounded-circle">
                     <AddCircleTwoToneIcon /> 
                    </div>
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                      Lightweight
                    </h3>
                    <p className="card-text mb-3">
                      These matters to this principle of selection: he rejects
                      pleasures to secure other.
                    </p>
                    <Button
                      color="primary"
                      variant="outlined"
                      title="Learn more"
                    >
                      <span>Learn more</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
              <Card className="card mb-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <CardContent className="p-3">
                    <div className="bg-sunny-morning text-center text-white display-4 d-60 rounded-circle">
                      <FontAwesomeIcon icon={["fas", "lemon"]} />
                    </div>
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                      Simple to use
                    </h3>
                    <p className="card-text mb-3">
                      Greater pleasures, or else he endures pains to avoid worse
                      pains. But I must explain.
                    </p>
                    <Button
                      color="primary"
                      variant="outlined"
                      title="Learn more"
                    >
                      <span>Learn more</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
              <Card className="card mb-4 shadow-lg p-3 mb-5 bg-white rounded" >
                  <CardContent className="p-3">
                    <div className="bg-grow-early text-center text-white display-4 d-60 rounded-circle">
                      <FontAwesomeIcon icon={["far", "keyboard"]} />
                    </div>
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                      Starter Templates
                    </h3>
                    <p className="card-text mb-3">
                      To you how all this mistaken idea of denouncing pleasure
                      and praising.
                    </p>
                    <Button
                      color="primary"
                      variant="outlined"
                      title="Learn more"
                    >
                      <span>Learn more</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
                    </Container>*/}
        {/* </div> */}
        </div>
        </div>

        <SectionOne/>
        
        
     
     
        
      </div>
    </Fragment>
  );
}
