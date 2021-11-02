import React from "react";
///import Register from "./pages/Register";
import { Link } from "react-router-dom";
// import  Button  from "bootstrap";


class SiteNav extends React.Component {
  onItemClicked = () => {};

  render() {
    return (
      <header className="p-3 text-white"
      style={{backgroundColor:"#e5e4e5"}}>
        <div className="container">
          <div>{/* <Route path="Register" component={Register} /> */}</div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
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
                {/* <img
                src="https://media-exp1.licdn.com/dms/image/C560BAQEpX4QUSHEG3g/company-logo_200_200/0/1585163084585?e=2159024400&v=beta&t=MjpsMwywnmWz-S1YcEgDbPCtMX_bGW7HavKoPimzmdI"
                width="60"
                height="60"
                style={{paddingRight:15}}
                className="d-inline-block align-top logo-gay" 
                alt="logo"
              />  */}
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
                  className="nav-link px-2 text-white link-button"
                  // onClick={this.pushTech}
                >
                  Contact
                </Link>
              </li> 
              {/* <li>
                <button
                  to="jobs"
                  className="nav-link px-2 text-white link-button"
                  onClick={this.pushJobs}
                >
                  Jobs
                </button>
              </li> */}

              {/* <li>
                <button
                  to="events"
                  className="nav-link px-2 text-secondary link-button"
                  onClick={this.pushEvents}
                >
                  Events
                </button>
              </li> */}
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              {/* <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              /> */}
            </form>

            <div className="text-end">
              {/* <button
                type="button"
                className="btn btn-outline-light me-2"
              ></button> */}
              <div>
                {/* <Link to="/login">Login</Link> */}
                {/* <button 
                  to="login"
                  className="secondary-button btn-sm"
                  onClick={this.pushLogin}
                  //props.history.push('/login')
                  style={{borderRadius:8}}
                >
                  Login
                </button> */}
              </div>
              <div>
                {/* <Link to="/register">Sign-up</Link> */}
                {/* <button
                  to="login"
                  className="secondary-button btn-sm"
                  onClick={this.pushRegister}
                  style={{borderRadius:8}}
                >
                  Register
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    ); // multi-line expression wrapp in ()
  }
}

export default SiteNav;
