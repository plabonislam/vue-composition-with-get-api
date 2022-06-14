
<template>
    <div>
        <h2>Post Details</h2>
        <div v-if="isLoading"> Loading ... </div>
        <div v-else="error"> {{ error.message }} </div>

        <table class="table"  v-else>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
         
          <tbody>
                <tr v-for="post in postDetails" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.name }}</td>
                    <td>{{ post.username }}</td>
                </tr>
            </tbody>
           
        </table>
    </div>
   
</template>


<script setup>

    import Axios from "@/service/AxiosInstance";
    import AxiosGetService from "@/service/AxiosGetService";

    import { ref, onMounted } from 'vue'
    const postDetails = ref([])
    const isLoading = ref(false);
    const error = ref(null);
   

    onMounted(() => {
    console.log(`the component is now mounted.`)
    
    getPostDetails();

    })

    const getPostDetails = async () => {
       try{
        isLoading.value = true;
        let response = await AxiosGetService.getMethodsed();
        isLoading.value = false;
        console.log(response)
        formatPostDetails(response.data)
       } catch(err) {
         error.value = err;
       }
        
    };

   const formatPostDetails = (posts)=>{
       for (let key in posts) {
       postDetails.value.push({ ...posts[key], id: key });
     }
    console.log(postDetails.value);
   }

  
</script>

