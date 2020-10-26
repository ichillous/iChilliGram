import React, { useEffect, useState } from 'react';
import { Route, Link, Switch, useHistory } from "react-router-dom"
import Layout from './layouts/Layout'
import Nav from './layouts/Nav'
import Posts from './screens/Posts'
import Post from './screens/Post'
import { destroyPost, getAllPosts, postPost } from './services/posts'
import {getAllTags} from './services/tags'
import './App.css';
import PostCreate from './screens/PostCreate';

function App() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([])
  const history = useHistory()
  useEffect(() => {
    const getPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData)
    }
    getPosts();
  }, [])

  useEffect(() => {
    const getTags = async () => {
      const tagsData = await getAllTags();
      setTags(tagsData)
    }
    getTags();
  }, [])

  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData)
    setPosts(prevState => ([...prevState, newPost]))
    history.push("/")
  }

  const handleDelete = async (id) => {
    await destroyPost(id)

    setPosts(prevState => prevState.filter(post => post.id !== id))
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/post/new">
        <PostCreate handlePostCreate={handlePostCreate} posts={posts} setPosts={setPosts} tags={tags} className="postCreate"/>
      </Route>
      {/* <Layout/> */}
      <Route path="/">
        <div className="main-layout">
        <Posts posts={posts} setPosts={setPosts} handleDelete={handleDelete}/>
        <div>
          <Link to="/post/new"><button className="newpost-btn"><i className="fa fa-plus-square-o"></i> Create</button></Link>
        </div>
      </div>
      </Route>
      </Switch>

      {/*passing it down to props*/}

    </div>
  );
}

export default App;
