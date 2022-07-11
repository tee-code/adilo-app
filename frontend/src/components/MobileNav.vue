<template>
    <!-- Main modal -->
    <div id="nav-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="nav-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="py-6 px-6 lg:px-8 flex flex-col space-y-4">
                    <ul class="nav w-100 flex flex-col items-center justify-between space-y-6 text-base cursor-pointer">
                        <li>Projects</li>
                        <li>Tools & App</li>
                        <li>Channels</li>
                        <li>Contracts</li>
                        <li>Analytics</li>
                        <li>Settings</li>
                    </ul>
                    <div class="user flex flex-col justify-between items-center space-x-4">
                        <span class="text-xl font-minibold border-r-2 px-4">Help</span>
                        <div class="flex justify-between items-center space-x-4">
                        <div class="relative">
                            <img class="w-10 h-10 rounded-full" :src="user.image" alt="">
                            <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                    
                        <div class="flex flex-col text-base">
                            <span class="text-base font-bold">{{ user.name }}</span>
                            <span>{{ user.email }}</span>
                        </div>
                        </div>
                    </div>
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
            </div>
        </div>
    </div> 
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();

const user = computed(() => {
    return store.state.user.data;
});



</script>

<style scoped>

</style>