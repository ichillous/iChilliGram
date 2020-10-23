import React, { useEffect, useState } from 'react';
import Layout from './layouts/Layout'
import Nav from './layouts/Nav'
import Posts from './screens/Posts'
import Post from './screens/Post'
import { getAllPosts } from './services/posts'
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData)
    }
    getPosts();
  }, [])
  return (
    <div className="App">
      {/* <Nav /> */}
      {/* <Layout/> */}
      <Posts posts={posts}/> {/*passing it down to props*/}
    </div>
  );
}

export default App;
