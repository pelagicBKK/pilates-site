import React, { Fragment } from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import stock1 from '../../images/stock-photos/stock-1.jpg';
import stock2 from '../../images/stock-photos/stock-2.jpg';
import stock3 from '../../images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="py-5 bg-slick-carbon">
        <div className="text-center my-5">
          <h1 className="display-4 mb-3 font-weight-bold" style={{color:"#e5e4e5"}}>
            
          </h1>
          <p className="font-size-lg text-white-50">
            Indignation and dislike men who are so beguiled and demoralized.
          </p>
        </div>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card card-transparent mb-4">
                <div className="card-img-wrapper">
                  <div className="card-badges card-badges-bottom">
                    {/* <div className="badge badge-warning badge-pill">
                      Warning
                    </div> */}
                  </div>
                  <img
                    src={stock1}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </div>
                <div className="card-body text-white text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text "style={{color:"black"}}>
                  {/* <p className="card-text text-white-50"> */}
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                    Read More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card card-transparent mb-4">
                <div className="card-img-wrapper">
                  <div className="card-badges card-badges-bottom">
                    {/* <span className="mr-2 badge badge-success badge-pill">
                      Success
                    </span>
                    <span className="text-info badge badge-neutral-info badge-pill">
                      Info
                    </span> */}
                  </div>
                  <img
                    src={stock2}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </div>
                <div className="card-body text-white text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text "style={{color:"black"}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                     Read More
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card card-transparent mb-4">
                <div className="card-img-wrapper">
                  <div className="card-badges card-badges-bottom">
                    {/* <div className="badge badge-danger">Danger</div> */}
                  </div>
                  <img
                    src={stock3}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </div>
                <div className="card-body text-white text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text "style={{color:"black"}}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                     Read More
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
