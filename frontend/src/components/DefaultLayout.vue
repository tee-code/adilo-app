<template>
    <div>
        <Header />
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-2 shadow-md">
                <Sidebar/>
            </div>
            <div class="col-span-8">
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