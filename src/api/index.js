import axios from 'axios';

const API = axios.create({baseURL:'https://server-mchain.herokuapp.com/'})
// const API = axios.create({baseURL:'http://localhost:5000/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})
// api user
export const fetchPosts = () => API.get('/users'); 
export const fetchPost = (id) => API.get(`/users/${id}`);
export const createPost = (newPost) => API.post('/users', newPost);
export const likePost = (id) => API.patch(`/users/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/users/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/users/${id}`);
// api product
export const fetchProducts = () => API.get('/products');
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const createProduct = (newProduct) => API.post('/products', newProduct);
export const likeProducts = (id) => API.patch(`/products/${id}/likeProducts`);
export const updateProducts = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);
export const deleteProducts = (id) => API.delete(`/products/${id}`);
// api auth
export const signin=(formData) =>API.post('/users/signin',formData)
export const signup=(formData) =>API.post('/users/signup',formData)
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
