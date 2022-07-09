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
                <ul class="nav flex items-center justify-between space-x-6 text-base cursor-pointer">
                    <li>Projects</li>
                    <li>Tools & App</li>
                    <li>Channels</li>
                    <li>Contracts</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
                <div class="user flex justify-between items-center space-x-4">
                    <span class="text-xl font-minibold border-r-2 px-4">Help</span>
                    <div class="flex justify-between items-center space-x-4">
                    <img class="img w-10 h-10 rounded-full" src="../assets/profile.jpg" alt="">
                    <div class="flex flex-col text-base">
                        <span class="text-base font-bold">Oluwatobi Alao</span>
                        <span>ooluwatobialao@gmail.com</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    

    
</template>

<script>
    export default {
        name: 'Header'
    }
</script>


<style scoped>

</style>