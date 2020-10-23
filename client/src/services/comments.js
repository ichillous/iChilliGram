import api from './api-config'

//returns all data from endpoint posts.abs
export const getAllComments = async () => {
    const resp = await api.get('/comments');
    
    return resp.data;
} 
console.log(getAllComments())

export const getOneComment = async (id) => {
    const resp = await api.get(`/comments/${id}`);

    return resp.data;
}
console.log(getOneComment())

export const CommentComment = async (commentData) => {
    const resp = await api.Comment('/comments', {Comment: commentData});
    return resp.data;
  }
  
  export const putComment = async (id, commentData) => {
    const resp = await api.put(`/comments/${id}`, {Comment: commentData});
    return resp.data;
  }
  
  export const destroyComment = async (id) => {
    const resp = await api.delete(`/comments/${id}`);
    return resp;
  }