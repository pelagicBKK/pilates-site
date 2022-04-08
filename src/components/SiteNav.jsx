import React from "react";
// import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import {auth, provider} from "../firebase-config"
import {signInWithPopup} from "firebase/auth"
import { useHistory } from "react-router-dom"
import "./SiteNav.css"



function SiteNav ({setIsAuth}) {
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
      <header className="p-3 text-white"
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
                width="65"
                height="55"
                style={{paddingRight:2, marginBottom:15}}
                className="d-inline-block align-top logo-gay" 
                alt="gay-reaves-pilates"
              />
              
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
                <Link
                  to="/"
                  className="nav-link px-2 text-secondary "
                
                  // onClick={this.pushHome}
                >
                  Home
                </Link>
              </li> 
               <li>
                <Link
                  to="/blogs"
                  className="nav-link px-2 text-secondary link-button"
                  // onClick={this.pushFriends}
                >
                  Blog
                </Link>
              </li> 
              <li>
                <Link
                  to="/study"
                  className="nav-link px-2 text-secondary link-button"
                  // onClick={this.pushStudy}
                >
                  Study
                </Link>
              </li> 
              <li>
                <Link
                  to="contact"
                  className="nav-link px-2 text-secondary link-button"
                  // onClick={this.pushTech}
                >
                  Contact
                </Link>
              </li>
             
              <li>
                <Link
                className=" btn btn-outline-secondary btn-med   "
                 to=""
                 onClick={signInWithGoogle}
                 
                 type="submit"
                 style={{ marginTop:18}}
                 
                 >
               <span className="btn-wrapper--label">Login</span>
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


export default SiteNav;
