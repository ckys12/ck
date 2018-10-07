<template>
  <div id="app">
    <router-view/>
     <trebut></trebut>
  </div>
</template>

<script>
import trebut from "./components/HelloWorld.vue"

export default {
  name: 'App',
  components:{
      trebut
  },
    mounted:function(){
     this.$router.push('/')
    }
};
</script> 

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
