import React, { Fragment } from "react";
import firstImg from "../../images/mom/momBlurbg.jpg";
import secondImg from "../../images/stock-photos/woman-doing-pilates-two.jpg";
import SectionThree from "./SectionThree";


import { Grid, Container, Card, } from "@material-ui/core";


export default function SectionOne() {
  return (
    <Fragment>
      <div className=" py-3 py-xl-5" >
      <Container className="py-3 d-flex flex-wrap align-items-center "style={{  marginLeft:"", marginRight:""}}>
        <div style={{ marginRight:"100px", marginLeft:"100px",  }}>
            <Grid container spacing={6}>

    


              <Grid item xs={12} lg={6} className="d-flex align-items-center">
                <Card className="p-3 shadow-lg p-3 mb-5 bg-white rounded"  >
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
                  <div className="pl-0 pl-xl-5 text-center text-black" >
                    <h2 className=" display-5 mb-3 font-weight-bold">
                      My Story
                    </h2>
                    <blockquote className="blockquote ">
                      <p className="font-size-lg ">
                   
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </blockquote>

                    <p className="font-size-lg text-black">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p className="font-size-lg text-black-50">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
              </Grid> 
            
            </Grid>
          </div>

          <div style={{ marginRight:"100px", marginLeft:"100px",  }}>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6}>
              <div className="py-0 py-xl-5" >

                  <div className="pl-0 pl-xl-5 text-center text-black" >
                    <h1 className="display-5 mb-3 font-weight-bold">
                      Mission
                    </h1>
                    <blockquote className="blockquote ">
                      <p className="font-size-lg ">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </blockquote>
                    <p className="font-size-lg ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p className="font-size-lg text-black-50">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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

       
          
        </Container>
       
        <SectionThree/>
      </div>
    </Fragment>
  );
}
