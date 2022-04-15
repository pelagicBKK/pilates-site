
import React, {useState, useEffect,  } from "react";
import {getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
// import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
// import Blogs from "../components/blogs/Blogs";
import {   db} from '../firebase-config'
import BlogCard from '../components/blogs/BlogCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  Button,  } from '@material-ui/core';

// import stock1 from '../images/stock-photos/stock-1.jpg';








function BlogsPage() {
  // const [ setPostList] = useState([]);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async ()=> {
      const data = await getDocs(postsCollectionRef)
      // console.log(data);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data) 
    };
    getPosts();
    // console.log(postLists, "posty");
  });
  
  const deletePost = async ({id} )=> {
    const postDoc = doc(db, "posts", id )
    await deleteDoc (postDoc)
    
    
  }
  

  return (
    
    <div className="hero-wrapper" style={{ marginRight:"100px", marginLeft:"100px", marginTop:10  }} >
   
    <div>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <div className="d-flex">
          <input
            type="search"
            className="form-control form-control-dark search-box"
            style={{width:200}}
            name="searchQuery"
            placeholder="Search "
            aria-label="Search"
            // value={this.state.searchQuery}
            // onChange={this.handleSearchChange}
          />
          &nbsp;
          <button
            class="btn btn-secondary btn-md"
            // onClick={this.onSearchClick}
            type="button"
          >
            Search
          </button>
          {/* <div className="ml-auto">
            <NavLink to="/AddTech">
              <Button btn-outline-secondary btn-md>
                Add Company
              </Button>
            </NavLink>
          </div> */}
        </div>
      </form>
    </div>
    <div className="row row-cols-1  row-cols-md-3" >

   
   { postLists.map ((post) => (
           
        <BlogCard 
        
        // id={post.doc.id}
        // id={post.id}
        // key={post.id}
        // delete={post.id}
      //  post={post}
       
      //  docId={id.doc}
      deletePost={deletePost}
        title={post.title} 
        text={post.postText} 
        author={post.author.name}
       image={post.postImage}
       avatar={post.author.profileImage}
       del={post.id}
        // gmailAuthor={post.author.gmailAuthor}
        
        />

        
        ))}
        
      
    </div>

    {/* <div style={{ height: 100, marginVertical: 20, paddingTop: 25 }}>
      <Pagination
        total={this.state.totalCount}
        current={this.state.currentPageIndex + 1}
        pageSize={PAGE_SIZE}
        onChange={this.onPaginationChange}
      />
    </div> */}
    </div>
  
);
}
export default BlogsPage;