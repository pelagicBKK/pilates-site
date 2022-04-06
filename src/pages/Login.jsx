import React, { Fragment } from "react";
import {  Container, Button, Card } from '@material-ui/core'

import {auth, provider} from "../firebase-config"
import {signInWithPopup} from "firebase/auth"
import { useHistory } from "react-router-dom"

// import { useState } from "react"

function Login({setIsAuth}) {
  const history = useHistory();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      localStorage.setItem("isAuth", true);
        setIsAuth(true)
        history.push("/");
    });

  };
  return (
  
  <Fragment>
     <div className="hero-wrapper">
        {/* <div className="flex-grow-5 d-flex align-items-center"></div> */}
  <div className="py-5 bg-slick-carbon">
    <div className="text-center my-5">
      <h1 className="display-4 mb-3 font-weight-bold" style={{color:"#e5e4e5"}}>
       
      </h1>
      {/* <p className="font-size-lg text-white-50">
        Indignation and dislike men who are so beguiled and demoralized.
      </p> */}
    </div>
    <Container style={{marginLeft:"30%", marginRight:"30%", marginBottom:"15px"}}>
  
      
        <Card className="mb-4 contact-card shadow-lg p-3 mb-5 bg-white rounded align-center" style={{width:400}}>
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                {/* <div className="badge badge-warning badge-pill">
                  Warning
                </div> */}
              </div>
            
            </div>
            <div className="card-body text-white text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text "style={{color:"black"}}>
              {/* <p className="card-text text-white-50"> */}
                Login With Google
              </p>
              <Button
                          // variant="contained"
                         size="med"
                          className="login-google"
                          onClick={signInWithGoogle}
                          color="primary"
                          type="submit"
                        >
                          <span className="btn-wrapper--label">Sign In</span>
                        </Button>
            </div>
          
          </Card>
        
    </Container>
  </div>
  </div>
 
</Fragment>
   );
  }
  
  
  
  
  


export default Login;