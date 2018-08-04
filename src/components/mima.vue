<template>
	<div>
		<header><span @click="fanhui()" ><</span><span>修改密码</span></header>
		<div class="shouji4">
			<span>原密码</span>
			<input  type="text" v-model="ymm" placeholder="请输入原密码"/>
		</div>
		<div class="shouji4">
			<span>新密码</span>
			<input  type="text" v-model="xmm" placeholder="请输入新密码"/>
		</div>
		<div class="shouji4">
			<span >确认密码</span>
			<input  type="text" v-model="queren" placeholder="请确认密码"/>
		</div>
		<input type="button" id="xiugai" value="立即修改" @click="xiugai()"/>
	</div>


</template>

<script>
	import axios from 'axios'
	export default({
		name:'Mima',
		data(){
			return{
				ymm:'',
				xmm:'',
				queren:'',
			}
		},
		methods:{
			fanhui(){
				history.go(-1)
			},
			xiugai(){
				var _this=this;
				axios({
					method:'post',
					url:"http://localhost:3000/xiugai",
					params:{phoneNum:_this.$store.state.name,pass:_this.xmm}
				}).then(function(data){
						_this.$router.push('/shezhi')
				})
			},
		}
		
	})
</script>

<style scoped="">
	header>span:nth-child(1){
		display:inline-block;
		width:50px;
		margin-right: 10px;
		float: left;
		font-size:22px;
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
	   margin-bottom: 10px;
	   color:#141414;
	   font-family: "微软雅黑";
	}
	.shouji4{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #CECECE;
		background: white;
	}
	.shouji4>span{
		padding-left:5%;
		width:20%;
		height: 45px;
		line-height: 45px;
		font-size: 16px;
		float: left;
		color: #CECECE;
		
	}
	.shouji4>input{
		width: 75%;
		margin-top: 0;
		height: 45px;
		float: left;
		border: none;
	}
	#xiugai{
		margin-top: 30px;
		width: 80vw;
		margin-left: 10vw;
		height: 35px;
		border: none;
		background:greenyellow;
		border-radius:15px ;
		text-align: center;
		color:white;
	}
</style>