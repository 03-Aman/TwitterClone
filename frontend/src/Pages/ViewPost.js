import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './PostsPage.css';
import { useNavigate } from 'react-router-dom';
function Post() {
  const [posts, setPosts] = useState([]);
  const [login, setLogin] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem("jwtToken")){
      (async()=>{
        try{
          const response=await axios.get('https://jsonplaceholder.typicode.com/posts',{
          })
          setPosts(response.data);
        }
        catch(error){

        }
      })()
      setLogin(true);
  }
  else{
    setLogin(false);
  }
  }, []);

  return (
    <div className='whole'>
        {!login && <h1 className='text-center font-bold text-xl'>Please Login First</h1>}
        {login &&
            <div className="post-container">
                {posts.map((post) => (
                <div key={post.id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                ))}
            </div>
        }
    </div>
  );
}

export default Post;
