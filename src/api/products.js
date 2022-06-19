import http from './httpService'; 
import apiUrl from './config.json';
const apiEndpoint = "http://localhost:5000" + "/products";


  function productUrl(id) {
    return `${apiEndpoint}/${id}`;
  }
  
  export function getProducts(cat) {
      console.log(apiEndpoint)
      if(cat) {
          const endpoint = `http://localhost:5000/products?category=${cat}`
         return http.get(endpoint);
      }
      else return http.get(apiEndpoint);
  }
  
  export function getProduct(Id) {
    return http.get(productUrl(Id));
  }
  
  export function saveProduct(product) {
    const formData = new FormData();
    //clone
    const body = { ...product };
    console.log(body);
   //update
   if (product._id) {
     //delete _id
     delete body._id;
     return http.put(productUrl(product._id),body);
   }
   for ( let key in body ) {
    formData.append(key, body[key]);
    }
  
  
   const config = {     
     headers: { 'content-type': 'multipart/form-data' }
 }


  return http.post(apiEndpoint, formData,config);
 }
  
  //delete topics
  export function deleteProduct(Id) {
    return http.delete(productUrl(Id));
  }  