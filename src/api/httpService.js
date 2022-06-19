import axios from 'axios';


//axios.defaults.headers.common['x-auth-token'] = auth.getJwt();


//axios.interceptors.response.use(success,error);
axios.interceptors.response.use(null,error=>{
    //console.log('interceptor called');
   const expectedError = error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
    if(expectedError) {
      if(error.response.status === 403) console.log('Access Denied');
    }
    if(!expectedError) {
      console.log('Logging Error : ' ,error);
      
    }
  
    return Promise.reject(error);
  });

  function setJwt(jwt) {
 
 axios.defaults.headers.common["x-auth-token"] = jwt;
 
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }
  export default {
      get: axios.get,
      post: axios.post,
      put: axios.put,
      patch: axios.patch,
      delete: axios.delete,
      setJwt
  };