import React, { useState } from "react";
import Post from '../Post/Post'
import styles from'./posts.module.css'




const Posts = (props) => {
  // const { posts } = props;
  const [posts, setPosts] = useState(props.posts)
  const [newPost, setNewPost] = useState('')

  const addPost = (event) => {
    event.preventDefault()
    const postObject = {
      id: posts.length + 1,
      title: newPost,
      published: Math.random() > 0.5
    }
    setPosts(posts.concat(postObject))
    setNewPost('')
  }

  // const handlePostChange = event => { setNewPost(event.target.value)}  то что пользователь вводи в input
  //   console.log(event.target.value)
    
  
  
  return (
    <div>

      {posts.map((post) => {
        return (
          <Post key={post.id} post={post}/>
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
