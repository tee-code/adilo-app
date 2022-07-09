<template>

    <div class="relative bg-white shadow-md h-screen py-5 px-3">
       <ul class="flex flex-col space-y-3 text-sm font-semibold">
            
            <router-link :to="{name: 'Dashboard'}" :class="[this.$router.name == 'Dashboard' ? 'bg-gray-200 p-3 text-black' : 'text-gray-500 bg-white', 'rounded-lg  hover:bg-gray-200 p-3 hover:text-black cursor-pointer text-center flex justify-left space-x-3 items-center'] ">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
            </router-link>
            <router-link :to="{name: 'Recordings'}" :class="[this.$router.name == 'Recordings' ? 'bg-gray-200 p-3 text-black' : 'text-gray-500 bg-white', 'rounded-lg  hover:bg-gray-200 p-3 hover:text-black cursor-pointer text-center flex justify-left space-x-3 items-center'] ">
                <i class="fas fa-film"></i>
                <span>My Recordings</span>
            </router-link>
            <router-link :to="{name: 'Requested'}" :class="[this.$router.name == 'Requested' ? 'bg-gray-200 p-3 text-black' : 'text-gray-500 bg-white', 'rounded-lg  hover:bg-gray-200 p-3 hover:text-black cursor-pointer text-center flex justify-left space-x-3 items-center'] ">
                <i class="fa-solid fa-share-nodes"></i>
                <span>Requested</span>
            </router-link>
           
       </ul>
    </div>
    
</template>

<script>
import { computed } from 'vue';


    const navigation = [
        { name: 'Dashboard', to: {name: 'Dashboard'} },
        { name: 'LivePreview', to: {name: 'LivePreview'} },
        { name: 'Recordigs', to: {name: 'Recordings'} },
    ];


    export default {
        name: 'Sidebar'
    }
</script>


<style scoped>

</style>