<template>
	<div id="boxs">
		
		<div><img id="ert" src="../../assets/ic_search_gray.png" alt=""></div>
		<div><img id="zre" src="../../assets/ic_scan_gray.png" alt=""></div>
			<input type="" placeholder="">
	</div>
</template>
<script>
	
</script>

<style>
  #boxs{
	width: 100%;
	position: relative;

   }
   input{
   	position: absolute;
   	width:300px;
	height:30px;
   	border: 1px solid  #68CB78;
   	border-radius:20px;	
	left:48%;
	transform: translate(-50%);
	margin-top: 10px;
	background: #fff;
	z-index: 1;
	outline:medium;
	padding-left:40px;
   }
	
	#ert{
       	position: absolute;
       	left:30px;
       	top:16px;
		width: 20px;
		height: 20px;
		z-index: 2;
		
	}
	#zre{
		position: absolute;
		left:320px;
       	top:16px;
        width: 20px;
		height: 20px;
		z-index: 3;
	}

</style>