<template>
<div class="grid w-full place-items-center">
     <div class="w-11/12">
         <div class="mx-auto h-screen flex flex-col space-y-3 p-4">
            <div class="flex justify-left items-center space-x-4 p-3">
                <span class="w-4 h-4 bg-red-500 border-2 border-red-200  dark:border-gray-800 rounded-full"></span>
                <span class="font-minibold text-xl">Live Preview</span>
            </div> 
            <div class=" w-9/12 h-4/6 text-center flex flex-col space-y-3">
                <div class="bg-teal-600 w-full h-full shadow-lg rounded-lg"></div>
                 <div class="flex justify-center items-center ">
                <button data-modal-toggle="authentication-modal" class="py-3 px-6 rounded-full bg-blue-300 text-white flex justify-left space-x-3 shadow-lg items-center">
                    <i class="fa-solid fa-microphone"></i>
                    <span>Start Recording</span>
                </button>
            </div>
            </div> 
            
           
        </div>
    </div>
   
</div>
   
   
</template>

<script>
    export default {
        name: 'PreviewNotReady'
    }
</script>


<style scoped>

</style>