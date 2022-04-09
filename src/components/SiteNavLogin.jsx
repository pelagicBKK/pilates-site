import React from "react";
import "../App.js";
import { Link } from "react-router-dom";
// import { useState } from "react"

import {signOut} from "firebase/auth"

import {auth} from "../firebase-config"




function SiteNavLogin ({setIsAuth}){
  
  
 

   
    

  const signUserOut =() =>{
    signOut(auth)
    .then(() => {
      localStorage.clear();
      setIsAuth(false);
      // window.location.pathway = "/login"
    })
}
    return (
      <header className="p-3 "
      // bg;#e5e4e5
      style={{backgroundColor:"#fdfdfd", alignItems: "center", display: "flex", height:100}}>
        <div className="container" >
        
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
            
             <img
                src="https://www.nightmarketbangkok.com/wp-content/uploads/2021/11/pelagic-Dark-black.png"
                width="40"
                height="30"
                style={{paddingRight:2}}
                className="d-inline-block align-top logo-gay" 
                alt="gay-reaves-pilates"
              />
              
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <Link
                  to="/"
                  className="nav-link px-2 text-secondary link-button onClick"
                  // onClick={this.pushHome}
                >
                  Home 
                </Link>
              </li> 
               <li>
                <Link
                  to="/blogspage"
                  className="nav-link px-2 text-secondary link-button"
                  // onClick={this.pushFriends}
                >
                  Blog
                </Link>
              </li> 
             
           
              <li>
              <Link
                          // variant="contained"
                          to=""
                          className="logout-google btn btn-outline-secondary btn-lg "
                          onClick={signUserOut}
                          color="primary"
                          type="submit"
                        >
                          <span className="btn-wrapper--label">Sign Out</span>
                        </Link>
              </li> 
              <li>
                <Link
                  to="createpost"
                  className="btn btn-outline-secondary btn-lg"
                  // onClick={this.pushTech}
                >
                  Create Post
                </Link>
              </li> 

            
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            
            </form>

            <div className="text-end">
             
              <div>
               
              </div>
              <div>
              
                
              </div>
            </div>
          </div>
        </div>
      </header>
    ); // multi-line expression wrapp in ()
  }



export default SiteNavLogin;
