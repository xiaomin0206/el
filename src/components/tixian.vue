<template>
	<div>
		<div>
			<header><span @click="fanhui()"><</span><span>提现</span></header>
			<input type="text" id="tixian" v-model='txje'/>
			<span @click="tixian()">确定</span>
		</div>	
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'Tixian',
		data(){
			return{
				txje:'',
			}
		},
		methods:{
			fanhui(){
				history.go(-1)
			},
			tixian(){
				var _this=this;
				axios({
					method:'post',
					url:"http://localhost:3000/tixian",
					params:{phoneNum:_this.$store.state.name,txje:_this.txje}
				}).then(function(data){
						axios({
							method:'post',
							url:"http://localhost:3000/tixian11",
							params:{phoneNum:_this.$store.state.name}
						}).then(function(data){
							//console.log(data.data)
							var sum1=data.data;
							var total1=0;
							console.log(sum1)
							for(var i=0;i<sum1.length;i++){
								total1+=parseInt(sum1[i].txje);
								console.log(total1)
								};
							
							_this.$store.commit('tixian',total1);
							_this.$router.push('/zhanghu')
							//localStorage.getItem("userMsg")
					})
				})
			}
		},
		mounted(){
				
		}
	}
</script>

<style scoped="">
	header>span:nth-child(1){
		display:inline-block;
		width:50px;
		margin-right: 10px;
		float: left;
		font-size: 16px;
		text-align: center;
	}
	header>span:nth-child(2){
		float:left;
		width:100px;
		text-align: left;
		font-size:20px;
	}
	header{
	   box-shadow: 0px -1px 1px #CECECE inset;
	   height: 50px;
	   line-height: 50px;
	   width:100%;
	   border-bottom: 1px solid #CECECE;
	   color:#141414;
	   font-family: "微软雅黑";
	   background: white;
	}
	div{
		width: 100%;
	}
	#tixian{
		margin:30px 10% 20px 10%;
		
		width: 80%;
		height: 30px;
	}
	span{
		display: block;
		text-align: center;
		width: 100%;
		font-size: 20px;
	}
</style>