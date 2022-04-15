import React, { useEffect } from "react";
import { useState } from "react"
import {addDoc, collection} from 'firebase/firestore';
import {auth, db, } from '../firebase-config'
import {   } from "react-router-dom";
import {
  
  Button,
  
} from '@material-ui/core';
// import * as Yup from "yup";

import "./CreatePost.css"
// import { ErrorMessage } from "formik";




import { useHistory } from "react-router-dom"

// import "./CreatePost.css";


function CreatePost ({isAuth}) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  // const [profileAvatar, setProfileAvatar] = useState("");

  

  const postsCollectionRef = collection(db, "posts")
  // let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
    title, postText, postImage,  
    author: {name: auth.currentUser.displayName, id: auth.currentUser.uid, profileImage:auth.currentUser.photoURL  },
    
  
      
  })
  
    history.push("/blogspage");
  };
  
  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, );

  // function countWords(str){
  //   var count = 0;
  //   // str=str.trim();
  //   for (var i = 0; i <= str.length; i++) {
  //      if (str.charAt(i) === " ") {
  //         count ++;
  //       }
  //   }
  //   return count;
  // }
 

// const CreatePostSchema = Yup.object().shape({
//   postText: Yup.string().trim().required("Max 600 characters. Make it sweet and to the point :)  Have a Beautiful day!"),
// });



  return <div className="createPostPage" style={{ marginBottom: 250}}>
   
    <div className="cpContainer">
      <h1> Create Post</h1>
      <div className="inputGp">
        <label>Title:</label>
        <input 
        // maxLength="20"
        placeholder="Title..." 
        required="required"
        onChange={(event) => {setTitle(event.target.value);
        }}
        />
       <span class="error text-danger">Max Characters 20</span>
        <div className="inputGp form-group ">
        <label >text area</label>
        <textarea placeholder="Post..."
         type="text"
        //  class="form-control" 
        //  className="text"
         id="text"
         maxlength="240"
         row={5}
         required="required"
         style={{width:200, height:200}}
         
        
       

         
        //  style={ this.val.length === 11 ? this.val.length > 7 : "error message"}  
        onChange={(event) => {setPostText(event.target.value)}}
        // onChange={(event) => {countWords(event.target)}}
      
        
         
      
        />
         <span class="error text-danger word-counter">Max Characters 240</span>
         {/* <ErrorMessage name="postText" render={renderError} /> */}
        </div>

          

        <div className="inputGp">
        <label>Image:</label>
        <input 
        required="required"
        placeholder="Image..." 
        onChange={(event) => {setPostImage(event.target.value)
        
        }}
        />
        </div>
        {/* <div className="inputGp">
        <label>Avatar..</label>
        <input 
        
        // placeholder="Image..." 
        onChange={(event) => {setProfileAvatar(event.target.value);
        }}
        />
        </div> */}

        <Button
        className="btn btn-outline-secondary btn-sm"
        variant="contained"
        onClick={createPost}>Submit Post</Button>

      </div>
    </div>
    </div>






}export default CreatePost;