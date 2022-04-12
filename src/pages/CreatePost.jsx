import React, { useEffect } from "react";
import { useState } from "react"
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../firebase-config'
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

  const postsCollectionRef = collection(db, "posts")
  // let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
    title, postText, postImage, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid  }})
    history.push("/blogspage");
  };

  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, );


 

// const CreatePostSchema = Yup.object().shape({
//   postText: Yup.string().trim().required("Max 600 characters. Make it sweet and to the point :)  Have a Beautiful day!"),
// });



  return <div className="createPostPage">
   
    <div className="cpContainer">
      <h1> Create Post</h1>
      <div className="inputGp">
        <label>Title:</label>
        <input 
        maxLength="20"
        placeholder="Title..." 
        onChange={(event) => {setTitle(event.target.value);
        }}
        />
       <span class="error text-danger">Max Characters 20</span>
        <div className="inputGp form-group has-error">
        <label className="control-label" for="inputError"></label>
        <textarea placeholder="Post..."
         type="text"
         class="form-control" 
         id="inputError"
         maxlength="600"
         row={5}
         style={{width:200, height:200}}
         
        
       

         
        //  style={ this.val.length === 11 ? this.val.length > 7 : "error message"}  
        onChange={(event) => {setPostText(event.target.value);
        
         
        }}
        />
         <span class="error text-danger">Max Characters 240</span>
         {/* <ErrorMessage name="postText" render={renderError} /> */}
        </div>

          

        <div className="inputGp">
        <label>Image:</label>
        <input 
        
        placeholder="Image..." 
        onChange={(event) => {setPostImage(event.target.value);
        }}
        />
        </div>

        <Button
        className="btn btn-outline-secondary btn-sm"
        variant="contained"
        onClick={createPost}>Submit Post</Button>

      </div>
    </div>
    </div>






}export default CreatePost;