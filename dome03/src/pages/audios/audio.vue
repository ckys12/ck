<template>
	<div div='audioe'>
	     <Ulaudio></Ulaudio>

       <div id='audio-wer'>
      <router-link to="/audio/fime">电影</router-link>
      <router-link to="/audio/city">同城</router-link>
      <router-link to="/audio/tv">电视</router-link>
      <router-link to="/audio/raed">读书</router-link>
      <router-link to="/audio/music">音乐</router-link>
      <router-link to="/audio/variety">综艺</router-link>
  </div>
  <xiadao></xiadao><br>
 

      <div>
        <router-view></router-view>
      </div>
         
	</div>

</template>

<script>
import Ulaudio from "./ulaudio.vue"
import xiadao from "../xiadao.vue"
 export default{
  	components:{
  		Ulaudio,xiadao
  	}
  };

</script>

<style>

  

    #audioe{
    }
	#curt{ 
           float: left;
		   width: 100%;
		   height: 90px;
	}
    #audio-wer{
    	 width: 100%;
         margin-top: 50px;
        margin-left:-20px;

    }
    a{
    	color:#cccc;
        text-decoration: none;
    	margin-left:20px;

    }
   
  
</style>
