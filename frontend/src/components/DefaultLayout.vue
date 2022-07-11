<template>
    <div>
        <Header />
        <div class="flex w-12/12 space-x-4">
            <div class="w-2/12 shadow-md md:block hidden">
                <Sidebar/>
            </div>
            <div class="w-10/12">
                <router-view></router-view>
            </div>
            
        </div>
       
    </div>
    
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
    export default {
    name: "DefaultLayout",
    components: { Header, Sidebar }
}
</script>


<style scoped>

</style>