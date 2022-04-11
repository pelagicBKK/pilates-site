import React, { useEffect } from "react";
import { useState } from "react"
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../firebase-config'
import {   } from "react-router-dom";
import {
  
  Button,
  
} from '@material-ui/core';

import "./CreatePost.css"




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
  return <div className="createPostPage">
   
    <div className="cpContainer">
      <h1> Create Post</h1>
      <div className="inputGp">
        <label>Title:</label>
        <input 
        placeholder="Title..." 
        onChange={(event) => {setTitle(event.target.value);
        }}
        />
       
        <div className="inputGp">
        <label>Post:</label>
        <textarea placeholder="Post..."
        onChange={(event) => {setPostText(event.target.value);
        }}
        />
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