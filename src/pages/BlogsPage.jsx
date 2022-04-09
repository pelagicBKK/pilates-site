
import React, {useState, useEffect, Fragment } from "react";
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
// import Blogs from "../components/blogs/Blogs";
import { db} from '../firebase-config'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  
  Button,
  
} from '@material-ui/core';






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
      <div className="hero-wrapper">
        {/* <div className="flex-grow-5 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9 h-100"
            // style={{ backgroundImage: "url(" + chefs + ")" }}
            style={{
              // backgroundImage: `url(${hero6})`,
              backgroundColor:"blue",
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              height: "100%",
              width: "100%",
            }}
          /> */}
          <div className="bg-composed-wrapper--content justify-content-center"> 
         
          {postLists.map((post) =>{
            return (
            <div className="post"> 
            <div className="postHeader">
              <div className="title">
                <h1> {post.title }</h1>
                </div>
                <div className="deletePost">
                  
                <Button
        className="btn btn-outline btn-sm"
        type="button"
                    onClick={() => {
                       deletePost(post.id);
                    }} 
                    style={ !isAuth ? {display: "none"} : null }  
                    // style={{ border: '1px solid', borderColor:"gray"  }}
                  >
                    Delete
                  
                  {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
                  </Button></div>
                </div>
           <div className=""> {post.postText }</div>
           <h3>{}</h3>
           </div>
           );
          })} 


 
            {/* <SplashNavBar {...props} /> */}
            {/* <Blogs /> */}

          </div>
        
       
      
      </div>
    </Fragment>
  );
}
export default BlogsPage;