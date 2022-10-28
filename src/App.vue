<template>
  <div>
 <router-view />
  </div>
</template>
<script>
import LoginPage from './components/pages/LoginPage.vue';




export default {
    name: "App",
    components: { LoginPage }
}
</script>
<style>
  
</style>