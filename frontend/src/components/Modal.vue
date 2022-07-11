<template>
    <!-- Main modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">New Recording</h3>
                    <form class="space-y-6" @submit="updateOptions">
                        <div>
                            <label for="projects" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Save the recording in </label>
                            <select v-model="options.project_id" id="projects" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option :value="0" selected>Select a project</option>
                                <option v-for="project in projects" :value="project.id" :key="project.id">{{project.name}}</option>
                               
                            </select>
                        </div>
                        <div>
                            
                            <label for="record-screen" class="inline-flex relative items-center mr-5 cursor-pointer">
                                
                                <input v-model="options.recordScreen" type="checkbox" value="" id="record-screen" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Record Screen</span>
                            </label>
                            

                        </div>
                        <div>
                            
                            <label for="record-camera" class="inline-flex relative items-center mr-5 cursor-pointer">
                                
                                <input v-model="options.recordCamera" type="checkbox" value="" id="record-camera" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Record Camera</span>
                            </label>
                            

                        </div>
                        <div>
                            
                            <label for="record-audio" class="inline-flex relative items-center mr-5 cursor-pointer">
                                
                                <input v-model="options.recordAudio" type="checkbox" value="" id="record-audio" class="sr-only peer" checked>
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Record Mic</span>
                            </label>
                            

                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Recording</button>
                    
                    </form>
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

const projects = computed(() => {
    return store.state.projects;
});

const options = {
    isReady: true,
    recordScreen: false,
    recordCamera: false,
    recordAudio: false,
    project_id: 0
}

const router = useRouter();

const updateOptions = (e) => {
    
    e.preventDefault();

    store.dispatch('updateOptions', options).then((res) => {
        if(res.success){
            
            router.push({
                name: 'LivePreview'
            });

        }
    });
    
}


</script>

<style scoped>

</style>