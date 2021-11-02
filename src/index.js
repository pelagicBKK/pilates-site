import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import "bootstrap/dist/css/bootstrap.css";

// import 'jquery';
// import '@popperjs/core'; // Edit here
// import 'bootstrap/dist/js/bootstrap.bundle';


ReactDOM.render(
  <BrowserRouter>
  <App></App>
  <CssBaseline />
  
</BrowserRouter>,
document.getElementById("root")
);


