<template>
<!--  底部 -->
  <div class="Ertd">
     <Tabbles tetr="首页" moke=1 @ValText='Valut' :set='mager' router="home">
       
     </header><!-- /header -->">
      <img slot="Imgint" src="../assets/1.png">
      <img slot="ImgStr" src="../assets/6.png">
     </Tabbles>
      <Tabbles tetr="书影音" moke=2 @ValText='Valut' :set='mager' router="audio">
     <img slot="Imgint" src="../assets/2.png">
     <img slot="ImgStr" src="../assets/7.png">
     </Tabbles>
  
     <Tabbles tetr="小组" moke=3 @ValText='Valut' :set='mager' router="guanbo">
    <img slot="Imgint" src="../assets/3.png">
      <img slot="ImgStr" src="../assets/8.png">
     </Tabbles>
    
     <Tabbles tetr="市集" moke=4 @ValText='Valut' :set='mager' router="news">
     <img  slot="Imgint" src="../assets/4.png">
      <img slot="ImgStr" src="../assets/9.png">
     </Tabbles>
    
     <Tabbles tetr="我的" moke=5 @ValText='Valut' :set='mager' router="mirt">
     <img slot="Imgint" src="../assets/5.png">
      <img slot="ImgStr" src="../assets/10.png">
     </Tabbles>
  </div>

  
</template>
<script>
import Tabbles from "./tabble.vue"

  export default{
    components:{
      Tabbles
    },
    data:function(){
      return {
        mager:'0'
      }
    },
    methods:{
      Valut:function(val){
        this. mager=val;
        
      }
    }
    
  };

</script>

<style>
.Ertd{
    width: 100%;
    height: 80px;
    float:left;
    border-top: 1px solid #cccccc;
    position:fixed;
    bottom:0;
   }
</style>

