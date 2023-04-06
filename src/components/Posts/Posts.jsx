import React, { useState, useEffect } from "react";
import Post from '../Post/Post'
import styles from'./posts.module.css'
import postServices from "../../services/posts";


const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [wrapper, setWrapper] = useState("wrapper-grid")
  const [postStyle, setPostStyle] = useState("post")

  console.log(postServices);

  useEffect(() => {
    postServices 
    .get()
    .then(res => 
      setPosts(res.data))
  }, [])


  const addPost = (event) => {
    event.preventDefault()
    const postObject = {
      title: newPost,
      published: Math.random() > 0.5
    }
    postServices
    .create(postObject)
      .then(res => setPosts(posts.concat(res.data)))
    
    setNewPost('')
  }

  const togglePublished = (id, published) => {
    const editInfo = {
      "published" : !published
    }
    postServices
    .edit(id, editInfo)
    .then(res => {
      setPosts(posts.map(post => post.id === id ? res.data : post))
    })
    .catch(err => console.log(err))
  }
  
  const deletePost = (id) => {
    postServices
      .delete(id)
      .then(res => {
        setPosts(posts.filter(post => post.id !== id))
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
        <button onClick={() => (setWrapper("wrapper-grid"), setPostStyle(""))}>
          Список
        </button>
        <button onClick={() => (setWrapper("wrapper-list"), setPostStyle("post"))}>
          Сетка 
        </button>
        <button onClick={() => (setPostStyle("post-list2"), setWrapper("wrapper-grid"))}>
          Сетка 2
        </button>
        <button onClick={() => (setPostStyle("post-list3"), setWrapper("wrapper-grid"))}>
          Сетка 3
        </button>
        <button onClick={() => setShowAll(!showAll)}>
          Показать {showAll ? 'опубликованные' : 'все'}
        </button>
      </div>
      <div className={styles[wrapper]}>
        {postsToShow.map((post) => {
          return (
            <Post 
              key={post.id} 
              post={post}
              togglePublished={togglePublished}
              deletePost={deletePost}
              style={postStyle}
            />
          );
        })}
      </div>
      
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
