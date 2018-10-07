<template>
    <div>

    <div id="box6">
         <guanli></guanli>
    </div>
    <hr>

	<div id="box5">
           
        <span class="sapn-1s">435573有趣的小组</span><br>
        <span class="sapn-2s">立即选择加入吧</span>
	</div>

    <div id="my-img">
        <img src="../../assets/ic_rec_group_banner_6.png" >
    </div>

    </div>
	
</template>

<script>
import guanli from "./guanli.vue"
 export default{
    components:{
        guanli
    }
  };

	
</script>


<style>

   *{
    margin: 0;
    padding: 0;
   }
   #box6{
    width: 100%;
    height: 50px;


   }
   hr{
    width: 100%;
   }


 #box5{
    position: absolute;
    margin-top: 10px;
    width: 100%;
    height: 180px;
    background-image: url("../../assets/trim.jpg");
    background-size: 100%
    : hidden;

 }  

#box5 span{
    position: relative;
     top:50px;
}

.sapn-1s{
    color:#fff;
    font-size: 19px


}

.sapn-2s{
    color:#cccc;
    font-size: 14px
}
#my-img{
    width: 100%;
    height: 100px;
}

	</style>
