
import React, {useState, useEffect, Fragment, } from "react";
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
// import Blogs from "../components/blogs/Blogs";
import { auth, db} from '../firebase-config'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid,  Button,  } from '@material-ui/core';

import stock1 from '../images/stock-photos/stock-1.jpg';








function BlogsPage({isAuth}) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async ()=> {
      const data = await getDocs(postsCollectionRef)
      console.log(data);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
    };
    getPosts();
    
  });
  
  const deletePost = async (id, )=> {
    const postDoc = doc(db, "posts", id )
    await deleteDoc (postDoc)
  }
 

  return (
<Fragment>



        <div className="text-center my-5">
          <h1 className="display-4 mb-3 font-weight-bold" style={{color:"#e5e4e5"}}>
            Blogs
          </h1>
          <p className="font-size-lg text-black-50">
            Indignation and dislike men who are so beguiled and demoralized.
          </p>
        </div>
        
        {/* <div class="col-3 card-template"> */}
        
        
          
    {/* <Grid container spacing={4} >
      <Grid item xs={12} md={6} lg={4}> */}


{/* <div className="card border-0 hover-shadow"> */}
                
                {/* <div className="card-img-wrapper">
                  
                  <img
                    src={stock1}
                    className="card-img-top rounded"
                    alt="..."
                  />
                </div> */}
                  

       
	   
	   
          
		  
         
  {/* {postLists.map((post) =>{ */}
       
  {postLists.map((post) =>{
            return (
      <div className="container">
        <div className="row">
        <div className="col">

                {/* Beginning of Card 1*/}
      <div className="card card-transparent mb-4" style={{width:"30%"}}>
          <div className="card-body text-black text-center ">
                   <h1> {post.title }</h1>
               
                    <p>
                      {post.postText}
                 </p>

                 <h3> @{post.author.name }</h3>
                 
                 
         
                 <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    className="mt-1">
                    Read More
                  </Button>
                
                  <div className="deletePost">
                  
              {isAuth && post.author.id === auth.currentUser.uid && (  <Button
        className="btn btn-outline btn-sm"
        type="button"
                    onClick={() => {
                       deletePost(post.id);
                    }} 
                    // style={ !isAuth ? {display: "none"} : null }  
                    // style={{ border: '1px solid', borderColor:"gray"  }}
                  > &#128465;
                    Delete
                  
                  {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
                  </Button>)}</div>






                   
              
         


 
                  </div>
                  </div>  
                  {/* End of Card 1*/}

                      





          </div>
        </div> 
        </div>
        
        );
      })} 
    


    
            
          {/* </Grid>
          </Grid> */}
          
          
        
   

  
</Fragment>
  );
}
export default BlogsPage;