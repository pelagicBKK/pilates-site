import PropTypes from "prop-types";
import { Button, Grid, TextField, Card  } from "@material-ui/core";
 import { Formik, Form, ErrorMessage} from "formik"
// import { toast } from "react-toastify";
// import * as contactService from "@services/contactService";
//  import { ErrorMessage,  } from "formik";
import React from "react";
import swal from "sweetalert";
import "./ContactUsForm.css";

import { ContactUsSchema } from "./contactUsValidationSchema";
 import { withRouter } from "react-router-dom";
// import emailjs from "emailjs-com";
// import { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";



// const _logger = debug.extend("ContactUsSection");
class ContactUsForm extends React.Component {
  state ={
 
    clientName: "",
    clientEmail: "",
    message: "",
  };
// function ContactFunction() {
//   init("w5or7cuUWHp15NNYc");
  // const form = useRef();

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  
  };

  handleSubmit = (e) => {
    console.log("form data", this.state);
    e.preventDefault();

  init("w5or7cuUWHp15NNYc");
  
    // e.preventDefault();
    
      
    
   
     emailjs.sendForm('service_h5avmqs','template_bp1ogo4', e.target,'w5or7cuUWHp15NNYc' ) 
     

     .then(() => {
      this.contactUsMessageSuccess()
      this.props.history.push("/");
      
    
      
    }) 


    .catch((err) => {
      
      this.contactUsMessageError();
     
    });
      
      
   
     
 
    
      // e.target.reset()
     
  
    
};

 contactUsMessageSuccess = () => {
    
    swal({
      title: "Congratulations!",
      text: "Successfully Sent Message!",
      icon: "success",
      timer: 2000,
      button: false,
      
    });
    
    // 
    // window.location.reload(false);

  };

contactUsMessageError = () => {
   
    swal({
      title: "Contact Message failed",
      text: "Make sure all fields are filled correctly!",
      icon: "error",
      timer: 2000,
      button: false,
    });
  };



  
 

  render() {
    const renderError = (message) => <p style={{ color: "red" }}>{message}</p>;
    return (
      <div className="pl-4 contact-container">
        <Card className="mb-4 contact-card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="text-black mt-3">
            <h2 className="mb-3 font-weight-bold text-center">
              Contact 
            </h2>
            <p className="font-size-lg mb-4 text-black-50"></p>
            <div>
              <Formik
                // enableReinitialize={true}
                  // initialValues={this.state}
                // onSubmit={this.handleSubmit}
             validationSchema={ContactUsSchema}
              >
                {/* {({ values, handleChange }) => ( */}
                 <Form onSubmit={this.handleSubmit}>
                    <Grid container spacing={4}>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          fullWidth
                          label="Name"
                          id="clientName"
                          name="clientName"
                          className="mt-0"
                          variant="outlined"
                          required="required"
                          value={this.state.clientName}
                          onChange={this.handleChange}
                          type="text"
                        />
                        <ErrorMessage name="clientName" render={renderError} />
                      </Grid>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          fullWidth
                          label="Email"
                          id="clientEmail"
                          name="clientEmail"
                          className="mt-0"
                          variant="outlined"
                          required="required"
                          value={this.state.clientEmail}
                          onChange={this.handleChange}
                          type="email"
                        />
                        <ErrorMessage name="clientEmail" render={renderError} />
                      </Grid>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          fullWidth
                          multiline={true}
                          label="Message"
                          id="message"
                          name="message"
                          className="mt-0"
                          variant="outlined"
                          required="required"
                          rows={5}
                          value={this.state.message}
                          onChange={this.handleChange}
                          type="text"
                        />
                        <ErrorMessage name="message" render={renderError} />
                      </Grid>
                      <Grid xs={12} sm={12} item>
                        <Button
                          variant="contained"
                          size="large"
                          className="w-100"
                          color="primary"
                          type="submit"
                        >
                          <span className="btn-wrapper--label">Send</span>
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
               
              </Formik>
            </div>
            <small className="d-block text-black-50 pt-3"></small>
          </div>
        </Card>
      </div>
    );
  }
}

ContactUsForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
export default withRouter(ContactUsForm);
