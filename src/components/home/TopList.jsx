import React, { Fragment } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/lotties/pilates-animation.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid,  ListItem } from '@material-ui/core';
// import { Grid, ListItem } from '@material-ui/core';





const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


export default function LivePreviewExample() {
  return (
    <Fragment>
    <div style={{ marginRight:"100px", marginLeft:"100px",  }}>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6}>
              <div className="py-0 py-xl-5" >
              
              <div className="pl-0 pl-xl-5 text-center text-black" >
                    <h1 className="display-5 mb-3 font-weight-bold">
                     Pilates
                    </h1>
                    </div>
              
              
              
              <ListItem className="py-3 border-0 " >
                 
                 <div className="d-flex align-items-center w-100">
                 
                   <div className="mr-3 "style={{paddingRight:25}}>
                   {/* <Card className="card-box  mb-4  " style={{width:50, height:50, backgroundColor:"#f5f5f5"}}>
                     <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                       <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"#98d2f9"}} icon={['far', 'heart']} />
                      
                     </div>
                     </Card> */}
                   </div>
                   
                   <div>
                     <div className="font-weight-bold d-block opacity-8 mb-2">
                       <h5>
                       Men and Women
                       </h5>
                     </div>
                     <div className="text-dark opacity-5">
                       Pilates allows for a safer and low impact exercise 
                       to gently get your body in better shape. It also allows
                       for stronger bones, posture and a stronger core. 
                     </div>
                   </div>
                 </div>
                
               </ListItem>
              

               
               <ListItem className="py-3 border-0">

                 <div className="d-flex align-items-center w-100">
                 
                   <div className="mr-3 "style={{paddingRight:25}}>
                   {/* <Card className="card-box  mb-4 rounded " style={{width:50, height:50, backgroundColor:"#f5f5f5"}}>
                     <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                       <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"#98d2f9"}} icon={['far', 'heart']} />
                     </div>
                     </Card> */}
                   </div>
                   
                   <div>
                     <div className="font-weight-bold d-block opacity-8 mb-2">
                       <h5>
                       Athletes
                       </h5>
                     </div>
                     <div className="text-dark opacity-5">
                       Pilates will give athletes many advantages to help aid
                       muscle recovery, endurance, strength, mind-body connection, 
                       overall endurance and core strength and stability. 
                     </div>
                   </div>
                 </div>
                
               </ListItem>
              
               <ListItem className="py-3 border-0">
            
                 <div className="d-flex align-items-center w-100">
                 
                   <div className="mr-3 "style={{paddingRight:25}}>
                   {/* <Card className="card-box  mb-4" style={{width:50, height:50, backgroundColor:"#f5f5f5"}}>
                     <div className="bg-neutral-dark text-primary text-center font-size-xl d-60 rounded-sm">
                       <FontAwesomeIcon style={{marginTop:20,width:20, height:20, color:"#98d2f9"}} icon={['far', 'heart']} />
                     </div>
                     </Card> */}
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
            
                
              </div>
              </Grid>
              <Grid item xs={12} lg={6} className="d-flex align-items-center">
                
                <Lottie 
                  
                  options={defaultOptions}
                    height={500}
                    width={650}
                    
                  />
               
              </Grid>
            </Grid>
          </div>
    </Fragment>
  );
}
