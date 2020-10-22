import React, { useEffect } from 'react';
import Layout from './layouts/Layout'
import Nav from './layouts/Nav'
import Posts from './screens/Posts'
import Post from './screens/Post'
import { getAllPosts } from './services/posts'
import './App.css';

function App() {
  // useState(())
  useEffect(() => {
    const getPosts = async () => {
      const postsData = await getAllPosts();
      console.log(postsData)
    }
    getPosts();
  }, [])
  return (
    <div className="App">
      <Nav />
      <Layout/>
      <Posts />
    </div>
  );
}

export default App;
