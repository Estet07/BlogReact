import axios from "axios"

const postsURL = "http://localhost:3001/posts"

const getPosts = () => {
    return axios.get(postsURL)
  }
  
  const createPost = (newPost) => {
    return axios.post(postsURL, newPost)
  } 
  
  const editPost = (id, published) => {
    const url = `${postsURL}/${id}`
    return axios.patch(url, published)
  }
  
  const deletedPost = (id) => {
    const url = `${postsURL}/${id}`
    return axios.delete(url)
  } 

  export default {
    get: getPosts,
    create: createPost,
    edit: editPost,
    delete: deletedPost
  }