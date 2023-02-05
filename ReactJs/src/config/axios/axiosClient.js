import axios from 'axios';
// import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/',
  headers: {
    'content-type': 'application/json',
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.defaults.headers = {
  Authorization: `Bearer ${localStorage.getItem('userToken')}`
};

axiosClient.interceptors.request.use(
  async (config) => {
    const token = '# Your token goes over here';
    if (token) {
      config.headers.accessToken = token;
    }
    return config;
  },
  function (error) {
   console.log("error");
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);
export default axiosClient;
