import api from './api-config'

//returns all data from endpoint posts.abs
export const getAllPosts = async () => {
    const resp = await api.get('/posts');
    
    return resp.data;
} 
console.log(getAllPosts())

export const getOnePost = async (id) => {
    const resp = await api.get(`/posts/${id}`);

    return resp.data;
}
console.log(getOnePost())

export const postPost = async (postData) => {
    const resp = await api.post('/posts', {Post: postData});
    return resp.data;
  }
  
  export const putPost = async (id, postData) => {
    const resp = await api.put(`/posts/${id}`, {Post: postData});
    return resp.data;
  }
  
  export const destroyPost = async (id) => {
    const resp = await api.delete(`/posts/${id}`);
    return resp;
  }