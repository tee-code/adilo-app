<template>
     <div class="w-full ">
        <div class="flex flex-col space-y-5 p-5">
            <div class="flex justify-between items-center p-5">
                <h1 class="text-xl font-minibold text-gray-500">
                    My Recordings <strong>{{ recordings.length }}</strong>
                </h1>
                <div class="cursor-pointer flex justify-between items-center space-x-4">
                    
                    <button @click="sortByDate" class="py-3 px-6 rounded-full border-2-gray text-black flex justify-left space-x-3 shadow-lg items-center">
                        <i class="fa-solid fa-arrow-down-a-z"></i>
                        <span>By Date</span>
                    </button>
                     <button class="py-3 px-6 rounded-full border-2-gray text-black flex justify-left space-x-3 shadow-lg items-center">
                        <i class="fa-solid fa-filter"></i>
                        <span>Add Filter</span>
                    </button>
                   
                    <button class="py-3 px-6 rounded-full bg-blue-600 text-white flex justify-left space-x-3 shadow-lg items-center">
                        <i class="fa-solid fa-video"></i>
                        <span>New Request</span>
                    </button>
                    <button data-modal-toggle="authentication-modal" class="py-3 px-6 rounded-full bg-red-600 text-white flex justify-left space-x-3 shadow-lg items-center">
                        <i class="fa-solid fa-microphone"></i>
                        <span>Start Recording</span>
                    </button>
                    <Modal />
                </div>
            </div>
            <table class="table-auto space-y-4 border-separate border-spacing-y-3">
                <thead class="p-3">
                    <tr class="text-left text-gray-500 font-bold">
                        <th>Recordings</th>
                        <th>Title</th>
                        <th>Views</th>
                        <th>Size</th>
                        <th>Last Modified</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="recording in recordings" :key="recording.title" class="py-4">
                        <td>
                            <img :src="recording.image" alt="recording.title" width="100" />
                        </td>
                        
                        <td class="flex flex-col space-y-4 justify-center py-4">
                            <h1 class="font-bold">{{ recording.title }}</h1>
                            <p>{{ recording.description }}</p>
                        </td>
                        <td>
                            {{ recording.views }}
                        </td>
                        <td>
                            {{ recording.size }}
                        </td>
                        <td>
                            {{ moment(recording.modified).fromNow() }}
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>    
    </div>    
       
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import moment from 'moment'
    import Modal from '../components/Modal.vue';

    const store = useStore();
        
    let recordings = computed(() => {
        return store.state.recordings
    });


    const sortByDate = () => {
    
        store.dispatch('sortByDate').then((res) => {
            console.log(res, ' here ');
        })
        
    }

    
</script>


<style scoped>

</style>