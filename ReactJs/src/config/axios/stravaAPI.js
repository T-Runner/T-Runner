import axiosClient from './axiosClient';

const stravaApi = {
  //Get Method
  getPosts: () => {
    const url = 'posts';
    return axiosClient.get(url);
  },

  //Get Method with params
  getbyPosts: (page) => {
    const url = `comments?postId=${page}`;
    return axiosClient.get(url);
  },

  //Post Method with params
  postPosts: () => {
    const url = 'posts';
    return axiosClient.get(url);
  },

  //Put Method with params
  putMethod: (index) => {
    const url = `posts/${index}`;
    return axiosClient.put(url)
  },

  //Delete Method with params
  deleteMethod: (index) => {
    const url = `posts/${index}`;
    return axiosClient.put(url)
  }
};

export default stravaApi;
