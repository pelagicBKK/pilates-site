import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  Badge,
  Card,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';

import stock2 from '../../images/stock-photos/stock-2.jpg';

import avatar1 from '../../images/avatars/avatar1.jpg';
import avatar2 from '../../images/avatars/avatar2.jpg';
import avatar3 from '../../images/avatars/avatar3.jpg';

import avatar5 from '../../images/avatars/avatar5.jpg';

import avatar7 from '../../images/avatars/avatar7.jpg';

export default function SectionTwo() {
  return (
    <Fragment>
     {/* <Grid container spacing={4}> */}
        <Grid item xs={12} lg={6}> 
          <Card className="mb-4">
            <div className="card-badges">
              {/* <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                Blog Posts
              </span> */}
            </div>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="image-title-overlay"
              title="...">
              <div className="image-title-overlay--bottom">
                {/* <h3 className="display-4 font-weight-bold m-0 text-white">
                  Gay Reaves Certified Instructor
                </h3> */}
              </div>
              <img alt="..." className="card-img-top" src={stock2} />
            </a>
         
          </Card>
        </Grid>
       
      {/*  </Grid>  */}
    </Fragment>
  );
}
