<template>
    <div class="grid h-screen w-full place-items-center">
        <div class="w-9/12">
            <div class="mx-auto flex flex-col space-y-4 text-center">
                <i class="fa-solid fa-microphone fa-10x text-gray-300"></i>
                <h1 class="text-xl font-bold">Say hello to the world!</h1>
                <p class="text-sm">Record your first video/audio and share it what your team, friends, followers and customers.</p>
                <div class="flex justify-center space-x-3">
                    <button class="py-3 px-6 rounded-full bg-red-600 text-white flex justify-left space-x-3 shadow-lg items-center">
                        <i class="fa-solid fa-microphone"></i>
                        <span>Start Recording</span>
                    </button>
                    <button class="py-3 px-6 rounded-full bg-blue-600 text-white flex justify-left space-x-3 shadow-lg items-center">
                        <i class="fa-solid fa-video"></i>
                        <span>New Request</span>
                    </button>
                </div>
            
        </div>
        </div>    
       
    </div>
</template>

<script>
    export default {
        name: 'Dashboard'
    }
</script>


<style scoped>

</style>