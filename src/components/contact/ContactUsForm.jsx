import PropTypes from "prop-types";
import { Button, Grid, TextField, Card } from "@material-ui/core";
// import * as contactService from "@services/contactService";
import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
// import swal from "sweetalert";
import "./ContactUsForm.css";
import { ContactUsSchema } from "./contactUsValidationSchema";
import { withRouter } from "react-router-dom";

// const _logger = debug.extend("ContactUsSection");

class ContactUsForm extends React.Component {
  // state = {
  //   from: "",
  //   subject: "",
  //   body: "",
  // };

  handleSubmit = (values) => {
    // _logger("values: " + values);
    // contactService
      // .addContactUsMessage(values)
      // .then(this.contactUsMessageSuccess)
      // .catch(this.contactUsMessageError);
  };

  // contactUsMessageSuccess = (response) => {
    
  //   swal({
  //     title: "Congratulations!",
  //     text: "Successfully Sent Message!",
  //     icon: "success",
  //     timer: 2000,
  //     button: false,
  //   });

  //   this.props.history.push("/");
  // };

  // contactUsMessageError = (errResponse) => {
  //   // _logger({ errResponse }, "contactUsMessageError");
  //   swal({
  //     title: "Contact Message failed",
  //     text: "Make sure all fields are filled correctly!",
  //     icon: "error",
  //     timer: 2000,
  //     button: false,
  //   });
  // };

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
                enableReinitialize={true}
                // initialValues={this.state}
                onSubmit={this.handleSubmit}
                validationSchema={ContactUsSchema}
              >
                {({ values, handleChange }) => (
                  <Form>
                    <Grid container spacing={4}>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          fullWidth
                          label="Email"
                          id="from"
                          name="from"
                          className="mt-0"
                          variant="outlined"
                          // value={values.from}
                          onChange={handleChange}
                          type="email"
                        />
                        <ErrorMessage name="from" render={renderError} />
                      </Grid>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          fullWidth
                          label="Subject"
                          id="subject"
                          name="subject"
                          className="mt-0"
                          variant="outlined"
                          // value={values.subject}
                          onChange={handleChange}
                          type="text"
                        />
                        <ErrorMessage name="subject" render={renderError} />
                      </Grid>
                      <Grid xs={12} sm={12} item>
                        <TextField
                          fullWidth
                          multiline={true}
                          label="Body"
                          id="body"
                          name="body"
                          className="mt-0"
                          variant="outlined"
                          rows={5}
                          // value={values.body}
                          onChange={handleChange}
                          type="text"
                        />
                        <ErrorMessage name="body" render={renderError} />
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
                )}
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
