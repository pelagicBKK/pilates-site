import React, { } from 'react';
import {  } from '../../firebase-config'


import {   } from '@material-ui/core';

// import stock1 from '../../images/stock-photos/stock-1.jpg';
// import stock2 from '../../images/stock-photos/stock-2.jpg';
// import stock3 from '../../images/stock-photos/stock-3.jpg';

export default function BlogCard({title, text, author, image, avatar}) {

  // id, title, text, image,author,
  
  return (
    <div className="col mb-4"> 
        <div className="row">
          <div className="container" style={{ width:"450px", margin:"auto"}}>
          <div className=" card card-tech border-0 shadow" style={{marginTop:20, width: "325px", height: "575px",  padding:20, }} >
          <div >
                <img
                    style={{
                      width: "300px",
                      height: "250px",
                      objectFit: "cover",
                      // margin:100
                      
                    }}
                    alt="..."
                    className="img-fluid"
                    src={image}
                  />
                </div>
            <div className="card-body text-center">
              <h2 className="card-title-tech mb-0">{title}</h2>
              <div>
                <div className="card-text-tech-profile ">
                  <p>{text}</p>
                </div>
                
                <div className="card-text-tech-summary ">
                  
                 <h5>{author } </h5>
                 </div>
                 <div >
               
                 <img
                    style={{
                 
                       
                       
                        
                        marginBottom: 25,

                     
                      
                      objectFit: "cover",}}
                      // margin:100
                      
                  
                    alt="..."
                    className="img-fluid"
                 src={avatar}
                  />
                </div>
                {/* <div >
                <img
                    style={{
                 
                        width: 35,
                        height: 35,
                        bordeRadius: "50%",
                        float:"left",
                        marginBottom: 25,

                     
                      
                      objectFit: "cover",}}
                      // margin:100
                      
                  
                    alt="..."
                    className="img-fluid"
                    src={gmailAuthor}
                  />
                </div> */}

                {/* <div className="deletePost">
                  
                {isAuth && post.author.id === auth.currentUser.uid && (  
                  <button
            className="btn btn-outline btn-sm"
            type="button"
                        onClick={(id) => {
                          this.deletePost(id);
                        }} 
                      
                        
                      > &#128465;
                        Delete
                      
                      
                      </button>)}</div> */}


                {/* <div className="avatar-dots">...</div> */}
              </div>

              {/* <li class="list-group-item list-group-item-primary">{items}</li> */}
           
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}


