import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// import PerfectScrollbar from 'react-perfect-scrollbar';
import '@fortawesome/fontawesome-free/js/all.js';
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Benefits1 from "./components/home/Benefits1";
import ContactUs from "./components/contact/ContactUsForm";
import Blogs from "./components/blogs/Blogs";
import Home from "./pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
// import BenefitsTable from "./components/home/BenefitsTable";
// import './base.scss';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import HomeContent from "./components/HomeContent";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <SiteNav />
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
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
