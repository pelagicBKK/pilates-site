import React, { Fragment } from 'react';

import { Grid, Card  } from '@material-ui/core';
import BenefitsTable from "./BenefitsTable";
// import svgImage10 from '../..//images/illustrations/projections.svg';

// import Slider from 'react-slick';

export default function Benefits() {
  return (
    <Fragment>
      
      <div className="feature-box py-3 py-xl-5">
      
      <Card className="card-box-contact mb-4 shadow-lg p-3 mb-5 bg-white rounded"
    //  style={{width:"50%", marginLeft:"auto", marginRight:"auto"}}
      >
       
       <Grid container rowSpacing={1} >
          <BenefitsTable/>
            <Grid item xs={6} >
              <div className="py-0 pb-5 py-xl-5">
               {/* style={{marginLeft:900,marginTop:10,width:"75%"}} */}
              
                <div >
                  <h3 className=" font-weight-bold" style={{fontStyle:"italic"}}>
                  "Physical and psychological benefits of once-a-week 
                  Pilates exercises in young sedentary women: A 10-week longitudinal study"
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
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-first">
                            Elements
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          It takes a trivial example, which of us ever
                          undertakes.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="text-first">
                            Widgets
                          </a>
                        </h3>
                        <p className="text-black-50 mb-3">
                          Occur in which toil and pain can procure him some
                          great pleasure.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
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
                      </div>
                    </div>
                    <div>
                      <div className="feature-box pr-4">
                        <h3 className="font-size-lg font-weight-bold my-3">
                          <a
                            href="https://www.sciencedirect.com/science/article/abs/pii/S0031938416302591/"
                            onClick={e => e.preventDefault()}
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
            
            {/* <Grid item xs={12} lg={6} className="d-flex align-items-center">
              <img alt="..." className="img-fluid" src={svgImage10} />
            </Grid> */}
          </Grid>
        </Card>
      </div>
    </Fragment>
  );
}
