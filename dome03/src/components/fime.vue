<template>
	<div  id="my-diany">
		<div class="erty">
            <span class="span-ul">看电影</span>
			<ul>
				<li><img src="../assets/timg.jpg"></li>
				<li><img src="../assets/timg-1.jpg"></li>
				<li><img src="../assets/timg-2.jpg"></li>
				<li class="li-font">+30</li>
			</ul>
		</div>
        <div id="span-img">
        	<span id="span-img1">电影热映<span>&nbsp &nbsp &nbsp即将上映</span></span>
        	<div class="container">
		<div class="row">
			<div class="D"><img src="../assets/timg.jpg" alt=""></div>
			<div class="A"><img src="../assets/timg.jpg" alt=""></div>
			<div class="B"><img src="../assets/timg.jpg" alt=""></div>
			<div class="C"><img src="../assets/timg.jpg" alt=""></div>
			<div class="D"><img src="../assets/timg.jpg" alt=""></div>
			<div class="A"><img src="../assets/timg.jpg" alt=""></div>
		</div>
	</div>
        </div>
		
   </div>
</template>

<style>
    body{
    	margin:0;
    	padding: 0;
    	overflow: hidden;
  	
    }

    #my-diany{
    	width: 100%;
    	height: 100%;
    	border: 1px solid red;

    	
    }

	.erty{
		width: 100%;
		height: 180px;
		background-image: url(../assets/trim.jpg);
		background-size: 100%;
	}
	.erty li{
		list-style:none;
		float: left;
		margin-left: 20px;
		margin-top: -30px
	}
	.erty img{
		width: 55px;
		height: 80px;
		border-radius:7%
	}
	.span-ul{
		margin-left:-80%;
	    line-height: 100px;
		font-size: 14px;
		color: #cccc;
	}
	.li-font{
		color:#cccc;
		font-size: 30px;
		top:20px;
	}
	#span-img{
		width: 100%;
		height: 150px;
		border: 1px solid #34cc;
		margin-top: 30px;

	}
	#span-img1{
		margin-right:130px;
	}
	#span-img1 span{
		color:#cccc;
	}

	 .container{
     	position:relative;
     	height: 100px;
     	width:100%;
     	white-space:normal;
     	
     }
	  .row{
	  	width:100%;
     	height:200px;
	  }
	  .row div{
	   float:left;
	   font-size:8em;
	   text-align:center;
	   width: 16%;
	   line-height:100px;
	  }
	  .container img{
	    width: 60px;
		height: 90px;
		border-radius: 5%
	  }
	  
</style>
