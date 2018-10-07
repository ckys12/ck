<template>
	<div id="bos">
		<div><img id="wer" src="../../assets/ic_search_gray.png"></div>
	
		<div><img id="ze" src="../../assets/ic_scan_gray.png"></div>
		
			<input id='input1' type="" placeholder="">
	</div>
</template>

<script>
	
</script>

<style>
	<style>
  #bos{
	width: 100%;
	border-bottom:1px solid #ccc;
    float:left;
    position: fixed;
    bottom: 0;
   }
   #input1{
   	position: absolute;
   	width:300px;
	height:30px;
   	border: 1px solid #ccc;
   	border-radius:20px;	
	left:50%;
	transform: translate(-50%);
	margin-top: -40px;
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