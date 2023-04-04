import React, { useState, useEffect } from "react";
import Post from '../Post/Post'
import styles from'./posts.module.css'
import axios from "axios";

const getPosts = () => {
  return axios.get('http://localhost:3001/posts')
}

const createPost = (newPost) => {
  return axios.post('http://localhost:3001/posts', newPost)
} 

const editPost = (url, published) => {
  return axios.patch(url, published)
}

const deletedPost = (id) => {
  return axios.delete(`http://localhost:3001/posts/${id}`)
} 

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    getPosts()
    .then(res => 
      setPosts(res.data))
  }, [])


  const addPost = (event) => {
    event.preventDefault()
    const postObject = {
      title: newPost,
      published: Math.random() > 0.5
    }
    createPost(postObject)
      .then(res => setPosts(posts.concat(res.data)))
    
    setNewPost('')
  }

  const togglePublished = (id, published) => {
    const url = `http://localhost:3001/posts/${id}`
    const editInfo = {
      "published" : !published
    }
    console.log(posts, id)
    editPost(url, editInfo)
    .then(res => {
      setPosts(posts.map(post => post.id === id ? res.data : post))
    })
    .catch(err => console.log(err))
  }
  
  const deletePost = (id) => {
      deletedPost(id)
      .then(res => {
        setPosts(posts.filter(post => post.id !== id))
      console.log(posts)
      })
     .catch (err => console.log(err)) 
  } 


  const postsToShow = showAll 
  ? posts 
  : posts.filter(post => post.published) 

  // const handlePostChange = event => { setNewPost(event.target.value)}  то что пользователь вводи в input
  //   console.log(event.target.value)
    
  
  
  return (
    <div>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Показать {showAll ? 'опубликованные' : 'все'}
        </button>
      </div>
      {postsToShow.map((post) => {
        return (
          <Post 
            key={post.id} 
            post={post}
            togglePublished={togglePublished}
            deletePost={deletePost}
          />
        );
      })}
      <form className={styles.posts_form} onSubmit={addPost}>
        <input 
          type="text" 
          value={newPost}
          onChange={event => setNewPost(event.target.value)}
        />
        <input className={styles.posts_submit} type="submit" value="Создать пост" />
      </form>
    </div>
  );
};

export default Posts;
