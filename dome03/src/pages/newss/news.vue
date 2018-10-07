<template>
	<div>
		<router-link to="doupin">豆瓣豆品</router-link>
        <router-link to="shijain">豆瓣时间</router-link>
    <div>
       	<touter-view></touter-view>
    </div>

	</div>
	
</template>

<script>
	 	export default {
	 		components:{

	 		}

	 	};
</script>


<style>
	<style>
  #bos{
	width: 100%;
	position: relative;
	border-bottom:1px solid #ccc;
    float:left;
   }
   #input2{
   	position: absolute;
   	width:300px;
	height:30px;
   	border: 1px solid #ccc;
   	border-radius:20px;	
	left:50%;
	transform: translate(-50%);
	margin-top: 2px;
	background: #fff;
	z-index: 1;
	outline:medium;
	padding-left:40px;
	background:#F0F0F0;
	

   }
	
	#wer{
       	position: absolute;
       	left:30px;
       	top:16px;
		width: 20px;
		height: 20px;
		z-index: 2;
		
	}
	#ze{
		position: absolute;
		left:320px;
       	top:16px;
        width: 20px;
		height: 20px;
		z-index: 3;
	}

</style>
