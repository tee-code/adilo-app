<template>
    <header class="relative bg-white shadow-md">
        <div class="max-w-8xl mx-auto px-4 sm:px-6">
            <div class="flex w-100 justify-between items-center bg-white p-3">
                <div class="logo flex space-x-3">
                    <div class="flex h-8 w-8 justify-center items-center rounded-lg bg-orange-300">
                    <div class="h-6 w-6 rounded-full bg-white"></div>
                    </div>
                    <span class="text-xl font-semibold">Adilo</span>
                </div>
                <ul class="hidden lg:flex nav items-center justify-between space-x-6 text-base cursor-pointer">
                    <li>Projects</li>
                    <li>Tools & App</li>
                    <li>Channels</li>
                    <li>Contracts</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
                <div class="hidden lg:flex user justify-between items-center space-x-4">
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
                <div class="block lg:hidden">
                    <i data-modal-toggle="nav-modal" class="cursor-pointer fa-solid fa-bars"></i>
                </div>
                
                <MobileNav />
            </div>
        </div>
    </header>
    

    
</template>

<script setup>
import MobileNav from '../components/MobileNav.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
    
const user = computed(() => {
    return store.state.user.data
});

</script>


<style scoped>

</style>