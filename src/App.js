import { BrowserRouter, Route, Switch, } from "react-router-dom";
import "./App.css";
// import {  Button } from '@material-ui/core'
// import PerfectScrollbar from 'react-perfect-scrollbar';
import '@fortawesome/fontawesome-free/js/all.js';
import SiteNav from "./components/SiteNav";
 import SiteNavLogin from "./components/SiteNavLogin";
import Footer from "./components/Footer";
import Benefits1 from "./components/home/Benefits1";
// import BlogCard from "./components/blogs/BlogCard";
// import TestBlog from "./components/TestBlog";
import ContactUsForm from "./components/contact/ContactUsForm";
import BlogCard from "./components/blogs/BlogCard";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import CreatePost from "./pages/CreatePost";
// import Login from "./pages/Login";
// import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollToTop from "./ScrollToTop";
 import { useState } from "react"

// import {signOut} from "firebase/auth"

//  import {auth} from "./firebase-config"
// import { Navbar } from "react-bootstrap";


 //import{ init } from '@emailjs/browser';
// import BenefitsTable from "./components/home/BenefitsTable";
// import './base.scss';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import HomeContent from "./components/HomeContent";

function App() {

  const [isAuth,setIsAuth, ] = useState(localStorage.getItem("isAuth"));
  

  // const signUserOut =() =>{
  //     signOut(auth)
  //     .then(() => {
  //       localStorage.clear();
  //       setIsAuth(false);
  //       window.location.pathway = "/login"
  //     })
  // }
  return (
    <BrowserRouter>
    <ScrollToTop>
     {/* <nav> */}
       {/* <Link to="/">Home</Link>
       <Link to="/CreatePost">Create Post</Link> */}
     {/* </nav> */}
      {/* <SiteNavLogin /> */}
       {/* {!isAuth ?
        <SiteNav/> : <button onClick={signUserOut}/>}  */}
        {/* {!isAuth ? <SiteNav/> : <SiteNavLogin/>} */}
         
     {/* {!isAuth ?
        <SiteNav /> :   <button onClick={signUserOut} /> }  */}
           {isAuth ?
       <SiteNavLogin setIsAuth={setIsAuth} />   :   <SiteNav setIsAuth={setIsAuth}/> }
         

      {/* {isAuth &&<SiteNavLogin />}  */}
      <Switch>
        <Route exact path="/">
          <main role="main">
            <Home />

            {/* <HomeContent /> */}
          </main>
        </Route>
        <Route exact path="/study">
          <Benefits1 />
        </Route>
        <Route exact path="/CreatePost">
         
          <CreatePost isAuth={isAuth} />
        </Route>
        {/* <Route exact path="/Login">
          <Login setIsAuth={setIsAuth}/>
        </Route> */}
        <Route exact path="/contact">
          <ContactUsForm />
        </Route>

        <Route exact path="/BlogCard">
          <BlogCard isAuth={isAuth} />
        </Route>

        <Route exact path="/BlogsPage">
          <BlogsPage />
          <BlogCard /> 
        </Route>
      </Switch>
      <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
