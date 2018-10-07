<template>
	<div id='box' @click="fn()">
		<span v-show='bol'><slot name="Imgint" ></slot></span>
		<span v-show='!bol'><slot name="ImgStr"></slot></span>
	    <span v-bind:class='{reds:!bol}'>{{tetr}}</span>
	</div>
	
</template>
<script>
	export default {
    props:['tetr','moke','set',"router"],
    computed:{
    	bol:function(){
    		if(this.moke==this.set){
               this.$router.push(this.router);
    			return false;
    		}else{
             	return true;
            }
    	}
    },
    methods:{
    	fn:function(){
    		this.$emit('ValText',this.moke);
    		
    	}
    }
    

};



</script>

<style>
	#box{
		width: 20%;
		 float: left;
	}
	.reds{
		color:red;

	}

</style>