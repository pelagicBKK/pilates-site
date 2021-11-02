import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//  import PerfectScrollbar from 'react-perfect-scrollbar';
import { Grid, Card, List, ListItem, Divider } from '@material-ui/core';

// import avatar1 from '../../images/avatars/avatar1.jpg';
// import avatar2 from '../../images/avatars/avatar2.jpg';
// import avatar3 from '../../images/avatars/avatar3.jpg';
// import avatar4 from '../../images/avatars/avatar4.jpg';
// import avatar5 from '../../images/avatars/avatar5.jpg';
// import avatar6 from '../../images/avatars/avatar6.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4 shadow-lg" style={{width:450, marginLeft:100,backgroundColor:"#f6f6f6" }}>
            {/* <List className="py-0"> */}
              <div className="scroll-area rounded  shadow-overflow">
                {/* <PerfectScrollbar> */}

               
                
                  <ListItem className="py-3 border-0 ">
                  <Card style={{padding:15}}>
                    <div className="d-flex align-items-center w-100">
                    
                      <div className="mr-3 "style={{paddingRight:25}}>
                      <Card className="card-box  mb-4  " style={{width:50, height:50, backgroundColor:"#D3D3D3"}}>
                        <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"red"}} icon={['far', 'heart']} />
                          {/* <span class="f-circle"><i class="fa-alph">2</i></span> */}
                        </div>
                        </Card>
                      </div>
                      
                      <div>
                        <div className="font-weight-bold d-block opacity-8 mb-2">
                          <h5>
                          Older Men and Women
                          </h5>
                        </div>
                        <div className="text-dark opacity-5">
                          Pilates allows for a safer and low impact exercise 
                          to gently get your body in better shape. It also allows
                          for stronger bones, posture and a stronger core. 
                        </div>
                      </div>
                    </div>
                    </Card>
                  </ListItem>
                 

                  {/* <Divider /> */}
                  <ListItem className="py-3 border-0">
                    <div className="d-flex align-items-center w-100">
                    
                      <div className="mr-3 "style={{paddingRight:25}}>
                      <Card className="card-box  mb-4 " style={{width:50, height:50, backgroundColor:"#D3D3D3"}}>
                        <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"red"}} icon={['far', 'heart']} />
                        </div>
                        </Card>
                      </div>
                      
                      <div>
                        <div className="font-weight-bold d-block opacity-8 mb-2">
                          <h5>
                          Athletes
                          </h5>
                        </div>
                        <div className="text-dark opacity-5">
                          Pilates will give athletes many advantages to help aid with
                          muscle recovery, endurance, strength, mind-body connection, 
                          overall endurance and core strength and stability. 
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  {/* <Divider /> */}
                  <ListItem className="py-3 border-0">
                    <div className="d-flex align-items-center w-100">
                    
                      <div className="mr-3 "style={{paddingRight:25}}>
                      <Card className="card-box  mb-4" style={{width:50, height:50, backgroundColor:"#D3D3D3"}}>
                        <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"red"}} icon={['far', 'heart']} />
                        </div>
                        </Card>
                      </div>
                      
                      <div>
                        <div className="font-weight-bold d-block opacity-8 mb-2">
                          <h5>
                          Positive Social Circle
                          </h5>
                        </div>
                        <div className="text-dark opacity-5">
                          We all need a positive environment and friends for a healthy lifestyle. 
                          Doing Pilates can help you combat loneliness while also working on your 
                          physical health as well. Having a healthy social life is important for 
                          a good mind-body balance.
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  {/* <Divider /> */}
                  <ListItem className="py-3 border-0">
                    <div className="d-flex align-items-center w-100">
                    
                      <div className="mr-3 "style={{paddingRight:25}}>
                      <Card className="card-box  mb-4" style={{width:50, height:50, backgroundColor:"#D3D3D3"}}>
                        <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                          <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"white"}} icon={['far', 'heart']} />
                        </div>
                        </Card>
                      </div>
                      
                      <div>
                        <div className="font-weight-bold d-block opacity-8 mb-2">
                          <h5>
                          Everyone
                          </h5>
                        </div>
                        <div className="text-dark opacity-5">
                         Pilates can be very low impact or intense which allows 
                         for anyone to reap the benefits. 
                         Whether working on just breathing for emotional well-being
                         or stronger and stable muscles, Pilates has something for everyone. 
                        </div>
                      </div>
                    </div>
                  </ListItem>
               {/* </PerfectScrollbar>  */}
              </div>
            {/* </List> */}
          </Card>
        </Grid>
        {/* <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="scroll-area rounded bg-white shadow-overflow">
              <PerfectScrollbar>
                <div className="p-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="font-weight-bold">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-black">
                          Wrong product price
                        </a>
                      </div>
                      <small className="d-flex pt-2 align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          Nazim Kidd
                        </a>
                        <span className="pl-2 text-muted">
                          opened 20 minutes ago
                        </span>
                      </small>
                    </div>
                    <div>
                      <div className="badge badge-success">Completed</div>
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="font-weight-bold">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-black">
                          Active IE8 issues
                        </a>
                      </div>
                      <small className="d-flex pt-2 align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          Charlton Oconnell
                        </a>
                        <span className="pl-2 text-muted">
                          opened two hours ago
                        </span>
                      </small>
                    </div>
                    <div>
                      <div className="badge badge-success">Completed</div>
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="font-weight-bold">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-black">
                          My account doesn't work
                        </a>
                      </div>
                      <small className="d-flex pt-2 align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar3} />
                          </div>
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          Isha Rollins
                        </a>
                        <span className="pl-2 text-muted">
                          opened three hours ago
                        </span>
                      </small>
                    </div>
                    <div>
                      <div className="badge badge-primary">On Hold</div>
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="font-weight-bold">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-black">
                          Unpaid invoice status
                        </a>
                      </div>
                      <small className="d-flex pt-2 align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar4} />
                          </div>
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          Celine Goulding
                        </a>
                        <span className="pl-2 text-muted">
                          opened 3 days ag0
                        </span>
                      </small>
                    </div>
                    <div>
                      <span className="badge badge-warning">Pending</span>
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="font-weight-bold">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-black">
                          Mobile app problems
                        </a>
                      </div>
                      <small className="d-flex pt-2 align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar5} />
                          </div>
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          Kush Malone
                        </a>
                        <span className="pl-2 text-muted">
                          opened one week ago
                        </span>
                      </small>
                    </div>
                    <div>
                      <span className="badge badge-danger">Rejected</span>
                    </div>
                  </div>
                  <Divider className="my-3" />
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="font-weight-bold">
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="text-black">
                          Responsive issues on Firefox
                        </a>
                      </div>
                      <small className="d-flex pt-2 align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar6} />
                          </div>
                        </div>
                        <a href="#/" onClick={e => e.preventDefault()}>
                          Celine Goulding
                        </a>
                        <span className="pl-2 text-muted">
                          opened one week ago
                        </span>
                      </small>
                    </div>
                    <div>
                      <div className="badge badge-primary">On Hold</div>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
            </div>
          </Card>
        </Grid> */}
      </Grid>
    </Fragment>
  );
}
