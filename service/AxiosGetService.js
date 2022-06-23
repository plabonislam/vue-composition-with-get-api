import axiosinstance from "./AxiosInstance";

export default {
 async getMethodsed() {
  try {
   let response = await axiosinstance.get(`users`);
   if(response.status != 200 ) {
    throw new Error("response issue");
   }
   return response;
  } catch(err) {
   throw new Error(err);
  }
 
 }
}


