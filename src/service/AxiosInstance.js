import  axios from "axios";

 const axiosinstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
 });

// Add a request interceptor
axiosinstance.interceptors.request.use(function (config) {
 // Do something before request is sent
 console.log("config")
 return config;
}, function (error) {
 // Do something with request error
 return Promise.reject(error);
});

export default axiosinstance;



// formatPostDetails(posts) {
//  for (let key in posts) {
//      postDetails.push({ ...posts[key], id: key });
//  }
//  console.log(postDetails);
// }