import React, { Fragment } from 'react';

import { Grid, Container  } from '@material-ui/core';
import BenefitsTable from "../components/BenefitsTable";
// import svgImage10 from '../..//images/illustrations/projections.svg';



export default function Study() {
  return (
    <Fragment>


    





      
    {/* <div className="feature-box py-3 py-xl-5"> */}
      <Container className="py-3 py-xl-5" style={{ marginRight:"0px", marginLeft:115,  }}>
     
      <div className="pl-0 pl-xl-5 text-center text-black" style={{ marginRight:"0px", marginLeft:75,  }}>
      
        <h3 className="font-weight-bold"
        style={{width:"50%",marginLeft:"auto",marginRight:"auto",fontStyle:"italic"}}>
        "Physical and psychological benefits of once-a-week 
        Pilates exercises in young sedentary women: A 10-week longitudinal study"
        </h3>
        <div className="py-0 py-xl-5"
         >
          <Grid container spacing={4}>

  


            <Grid xs={12} lg={6}  className="d-flex align-items-center"
            >
              {/* <Card className="p-3 shadow-lg p-3 mb-5 bg-white rounded"
               style={{
                border: "70px",
                padding: "30px",
              }}>  */}
             {/* <img
                  style={{
                    border: "70px",
                    padding: "30px",
                  }}
                  alt="..."
                  className="img-fluid"
                  src={firstImg}
                />  */}
                <BenefitsTable/>
             {/* </Card> */}
            </Grid>
          <Grid item xs={12} lg={6}>
          <div className="py-0 pb-5 py-xl-5"
          style={{width:400, height:550}}>
               {/* style={{marginLeft:900,marginTop:10,width:"75%"}} */}
              
                <div >
                  <h3 className=" font-weight-bold" style={{fontStyle:"italic"}}>
                  Elements
                  </h3>
                  <p className="font-size-lg text-black-50">
                    A free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best.
                  </p>
                </div>
                <div className="d-block mt-4">
                  {/* <Slider
                    slidesToShow={2}
                    slidesToScroll={2}
                    dots={true}
                    className="slick-slider slick-slider-left"> */}
                    <div>
                      <div className="feature-box pr-4">
                      <h3 className=" font-weight-bold" style={{fontStyle:"italic"}}>
                  Elements
                  </h3>
                      
                        <p className="text-black-50 mb-3">
                          It takes a trivial example, which of us ever
                          undertakes.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                      <h3 className=" font-weight-bold" style={{fontStyle:"italic"}}>
                  Elements
                  </h3>
                        <p className="text-black-50 mb-3">
                          Occur in which toil and pain can procure him some
                          great pleasure.
                        </p>
                      </div>
                    </div>
                    <div>
                      {/* <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-first">
                            Components
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          Nor again is there anyone who loves or pursues or
                          desires.
                        </p>
                      </div> */}
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            href="https://www.sciencedirect.com/science/article/abs/pii/S0031938416302591/"
                            // onClick={e => e.preventDefault()}
                            className="text-first">
                            Study
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          On the other hand, we denounce with righteous
                          indignation.
                        </p>
                      </div>
                    </div>
                  {/* </Slider> */}
                </div>
              </div>
            </Grid> 
          
          </Grid>
        </div>

        {/* <div className="py-0 py-xl-5" style={{ marginTop: "35px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <div className="py-0 py-xl-5">
                <div className="pl-0 pl-xl-5 text-center text-black">
                  <h1 className="display-3 mb-3 font-weight-bold">
                    Our Mission
                  </h1>

                  <p className="font-size-lg text-black-50">
                    We are are here to help find the ideal kitchen without the
                    accountability of financial and compliance issues that
                    arise when having your own kitchen.
                  </p>
                  <p className="font-size-lg text-black-50">
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
        </div> */}

     
       </div>
      </Container>
  
    {/* </div> */}
  </Fragment>
);
}
