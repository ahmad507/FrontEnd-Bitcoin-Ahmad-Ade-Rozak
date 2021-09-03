<template>
<div>
  <Navigation />
   <router-view> </router-view>
</div>
   
</template>

<script>
import Navigation from '../nav/Navigation.vue'
export default {
  components:{
    Navigation
  }

}
</script>

<style scope>
body{
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}
</style>