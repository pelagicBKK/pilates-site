import React, { Fragment } from 'react';
// import hero6 from "../images/hero-bg/hero-6.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";

import {
  Grid,
  Container,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

export default function Footer() {
  return (
    <Fragment>
      <div className="bg-first py-5"
      style={{
        backgroundColor: `#e5e4e5`,
        
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%",
        width: "100%",
      }}>
        <Container className="pt-sm-0 pt-5 bg">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} className="d-flex align-items-center">
              <div className="w-100">
                <Grid container spacing={4} className="w-100">
                  <Grid item xs={12} md={4}>
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-3">
                      <h6 className=" txt-color font-weight-bold mb-3 px-3 text-center">
                        Services
                      </h6>
                      <List className="py-0">
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            Products
                          </Button>
                        </ListItem>
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            Services
                          </Button>
                        </ListItem>
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            About us
                          </Button>
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-3">
                      
                      <h6 className=" txt-color font-weight-bold mb-3 px-3 text-center">
                        Support
                      </h6>
                      <List className="py-0">
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            Support center
                          </Button>
                        </ListItem>
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            Affiliates
                          </Button>
                        </ListItem>
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            Contact us
                          </Button>
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <div className="pl-3">
                      <h6 className="txt-color  font-weight-bold mb-3 px-3 text-center">
                        UI Themes
                      </h6>
                      <List className="py-0">
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            React themes
                          </Button>
                        </ListItem>
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "
                            style={{color:"gray"}}
                            color="inherit">
                            HTML5 themes
                          </Button>
                        </ListItem>
                        <ListItem className="py-1 d-block">
                          <Button
                            className="txt-color rounded-sm w-100 text-capitalize "style={{color:"gray"}}>
                                Angular themes
                          </Button>
                           
                          
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
                <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto mb-4 mt-5 w-50" />
                <div className="d-flex justify-content-center">
                  <Tooltip arrow title="Facebook">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'facebook']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Twitter">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'twitter']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Google">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'google']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip arrow title="Instagram">
                    <IconButton
                      color="primary"
                      size="medium"
                      variant="outlined"
                      className="text-white">
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} className="d-flex align-items-center">
              <div className="w-100">
                <Card className="border-0 mt-5 mt-xl-0 card-box shadow-lg p-3 mb-5 bg-white rounded">
                  <CardContent className="p-3">
                    <div className="text-black">
                      <h3 className=" mb-3 font-weight-bold">
                        {/* Newsletter */}
                      </h3>
                      <p className="font-size-md mb-4 text-black-50">
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized.
                      </p>
                      <div>
                        <form>
                          <Grid container spacing={4}>
                            <Grid sm={8} item>
                              <TextField
                                fullWidth
                                className="mt-0"
                                margin="dense"
                                variant="outlined"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <MailOutlineTwoToneIcon />
                                    </InputAdornment>
                                  )
                                }}
                              />
                            </Grid>
                            <Grid sm={4} item>
                              <Button
                                variant="contained"
                                size="large"
                                className="w-100"
                                color="primary">
                                <span className="btn-wrapper--label">
                                  Signup
                                </span>
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </div>
                      <div className="text-black-50 d-block pt-2">
                        It takes less than 20 seconds to create your account!
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>
          <div className="mt-5">
            <div className="text-center d-block ">
              Copyright &copy; 2021 - gayreaves.com
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
