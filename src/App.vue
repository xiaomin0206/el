<template>
  <div id="app">
  	
			<router-view ></router-view>	
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
  	   localStorage.getItem("userMsg") && this.$store.replaceState(JSON.parse(localStorage.getItem("userMsg")));
    
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
			})
  }
}

</script>
<style>
	#app{
		background: #f6f6fe;
		height: 100vh;
	}
	*{
		margin: 0;
		padding: 0;
	}
</style>
