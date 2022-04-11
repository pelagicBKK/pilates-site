import React, { } from 'react';
// import { auth,  } from '../firebase-config'


// import {  Button } from '@material-ui/core';

// import stock1 from '../../images/stock-photos/stock-1.jpg';
// import stock2 from '../../images/stock-photos/stock-2.jpg';
// import stock3 from '../../images/stock-photos/stock-3.jpg';

export default function BlogCard({title, text, author}) {

 
  
  return (
    <div class="col 6 card-template" >
        <div className="row">
          <div className=" card card-tech border-0 shadow" style={{marginTop:20 }}>
            {/* <div>
              {company.images &&
                company.images.map((item) => {
                  return (
                    <span key={Math.random()}>
                      <img
                        className="image-tech"
                        src={item.imageUrl}
                        // style={{ width: 50, height: 50, borderRadius: 10 }}
                        alt="tech"
                      />
                    </span>
                  );
                })}
            </div>  */}
            <div className="card-body text-center">
              <h2 className="card-title-tech mb-0">{title}</h2>
              <div>
                <div className="card-text-tech-profile ">
                  <p>{text}</p>
                </div>

                <div className="card-text-tech-summary ">
                 <h5>{author} </h5>
                </div>

                {/* <div className="card-text-tech-slug">
                  {company.slug}
                  <h4> </h4>
                </div> */}

                {/* <div class="card-container-avatar ">
                  <h3 className="friend-title"> Friends </h3>
                  {company.friends &&
                    company.friends.map((item) => (
                      <span key={Math.random()}>
                        <img
                          className="avatar-image"
                          // style={{ width: 50, height: 50, borderRadius: 100 }}
                          src={item.primaryImage.imageUrl}
                          alt="imgfriends"
                        />
                      </span>
                    ))}
                </div> */}
                {/* <div className="avatar-dots">...</div> */}
              </div>

              {/* <li class="list-group-item list-group-item-primary">{items}</li> */}
           
            </div>
          </div>
        </div>
      </div>
    );
}


