import React from "react";
import { useState } from "react"
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../firebase-config'




import { useHistory } from "react-router-dom"

// import "./CreatePost.css";


function CreatePost () {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts")
  
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
    title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid  }})
    history.push("/");
  };

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
        <div/>
        <div className="inputGp">
        <label>Post:</label>
        <textarea placeholder="Post..."
        onChange={(event) => {setPostText(event.target.value);
        }}
        
        />
        </div>

        <button onClick={createPost}>Submit Post</button>

      </div>
    </div>
    </div>






}export default CreatePost;