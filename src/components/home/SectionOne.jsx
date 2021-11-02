import React, { Fragment } from "react";
import firstImg from "../../images/stock-photos/woman-pilates-trainer.jpg";
import secondImg from "../../images/stock-photos/woman-doing-pilates-two.jpg";
import SectionThree from "./SectionThree";
// import Benefits1 from "./Benefits1";
// import thirdImg from "../../images/stock-photos/woman-doing-pilates-two.jpg";
// import svgImage2 from "../../images/illustrations/pilates.svg";


import { Grid, Container, Card, } from "@material-ui/core";


export default function SectionOne() {
  return (
    <Fragment>
      <div className="feature-box py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <div className="py-0 py-xl-5" style={{ marginTop: "35px" }}>
            <Grid container spacing={4}>

    


              <Grid item xs={12} lg={6} className="d-flex align-items-center">
                <Card className="p-3 shadow-lg p-3 mb-5 bg-white rounded">
                  <img
                    style={{
                      border: "70px",
                      padding: "30px",
                    }}
                    alt="..."
                    className="img-fluid"
                    src={firstImg}
                  />
                </Card>
              </Grid>
            <Grid item xs={12} lg={6}>
                <div className="py-0 py-xl-5">
                  <div className="pl-0 pl-xl-5 text-center text-black">
                    <h1 className="display-3 mb-3 font-weight-bold">
                      My Story
                    </h1>
                    <blockquote className="blockquote ">
                      <p className="font-size-lg ">
                   
                      Kitchmet is a devoted team of culinary experts that are
                      very excited to bring a shared economy approach to the
                      food industry in their local areas.
                    </p>
                    </blockquote>

                    <p className="font-size-lg text-black">
                      We are passionate about food and helping communities work
                      together to mutually benefit in the commissary kitchen
                      model.
                    </p>
                    <p className="font-size-lg text-black-50">
                      Kitchmet is a passionate team of culinary experts that are
                      very excited to bring a shared economy approach to the
                      food industry in their local areas.
                    </p>
                  </div>
                </div>
              </Grid> 
            
            </Grid>
          </div>

          <div className="py-0 py-xl-5" style={{ marginTop: "35px" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} lg={6}>
                <div className="py-0 py-xl-5">
                  <div className="pl-0 pl-xl-5 text-center text-black">
                    <h1 className="display-3 mb-3 font-weight-bold">
                      Mission
                    </h1>
                    <blockquote className="blockquote ">
                      <p className="font-size-lg ">
                      We are are here to help find the ideal kitchen without the
                      accountability of financial and compliance issues that
                      arise when having your own kitchen.
                    </p>
                    </blockquote>
                    <p className="font-size-lg ">
                      Starting a business in the food industry is diffcult and
                      one of the first obstacles is finding a place to produce
                      food in a compliant and certified kitchen that frees you
                      from liabilities or overhead.
                    </p>
                    <p className="font-size-lg text-black-50">
                      We are are here to help find the ideal kitchen without the
                      accountability of financial and compliance issues that
                      arise when having your own kitchen.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={6} className="d-flex align-items-center">
                <Card className="p-3 shadow-lg p-3 mb-5 bg-white rounded">
                  <img
                    style={{
                      border: "70px",
                      padding: "30px",
                    }}
                    alt="..."
                    className="img-fluid"
                    src={secondImg}
                  />
                </Card>
              </Grid>
            </Grid>
          </div>

       
          {/* <div
            className="feature-box py-3 py-xl-5"
            style={{ marginTop: "25px" }}
          >
            <div
              className="text-center py-4"
              style={{ width: "50%", margin: "auto" }}
            >
              <h3 className="display-3 mb-2 font-weight-bold">What We do</h3>
              <p className="font-size-lg mb-4 text-black-50">
                Kitchmet provides a simple platform for food entrepenuers where
                independent chefs needing a certified kitchen on short-term
                basis can book effortlessly from our database of idle kitchen
              </p>
              <p className="font-size-lg mb-4 text-black-50">
                While Kitchmet provides a seamless platform for finding the
                ideal kitchen it also allows kitchen owners to utilize their
                commercial machines, kitchen downtime and return of investment
                on their own commercial kitchen.
              </p>
              <p className="font-size-lg mb-4 text-black-50">
                Kitchmet provides a simple platform for food entrepenuers where
                independent chefs needing a certified kitchen on short-term
                basis can book effortlessly from our database of idle kitchen
              </p>
              <p className="font-size-lg mb-4 text-black-50">
                Kitchmet provides a simple platform for food entrepenuers where
                independent chefs needing a certified kitchen on short-term
                basis can book effortlessly from our database of idle kitchen
              </p>
            </div>
          </div> */}
        </Container>
       
        <SectionThree/>
      </div>
    </Fragment>
  );
}
