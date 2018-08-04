<template id="login">
	<div class="denglu3">
		<header><span @click="fanhui()">返回</span><span>登录</span></header>
		<div class="shouji4">
			<span class="iconfont icon-shouji"></span>
			<input  type="text" placeholder="请输入手机号码" v-model="sj" />
		</div>
		<div class="shouji4">
			<span class="iconfont icon-password"></span>
			<input  type="text" placeholder="请输入密码" v-model="pass"/>
		</div>
		<input class='denglu' type="button" value="立即登录" @click="login()"/>
		<input class='zhuce' type="button" value="注册" @click="foo()"/>
	</div>
</template>
<script>
	import axios from 'axios'
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Login',
		data(){
			return{
				str:'登录',
				sj:'',
				pass:'',
			}
		},
		methods:{
			foo(){
				this.$router.push('/regist')
			},
			fanhui(){
				history.go(-1)
			},
			login(){
				var _this=this;
				axios({
					method:'post',
					url:"http://localhost:3000/login",
					params:{phoneNum:_this.sj,pass:_this.pass}
				}).then(function(data){
					if(data.data==2){
						_this.sj='',
						_this.pass='',
						MessageBox('信息确认', '该用户名不存在')
					}else{
						if(data.data[0].pass==_this.pass){
							_this.$store.commit('name',_this.sj)
							axios({
								method:'post',
								url:"http://localhost:3000/shuju",
								params:{phoneNum:_this.$store.state.name},
							}).then(function(data){
								_this.$store.commit('shuzu',data.data);
								var sum=data.data;
								var total=0;
	//							console.log(sum)
								for(var i=0;i<sum.length;i++){
									total+=parseInt(sum[i].jine);
								};
								_this.$store.commit('jine',total);
								
							})	
							_this.$store.commit('tixian',0);
							_this.$store.commit('chanpinjine',0);
								axios({
								method:'post',
								url:"http://localhost:3000/tixian11",
								params:{phoneNum:_this.$store.state.name}
							}).then(function(data){
								//console.log(data.data)
								var sum1=data.data;
								var total1=0;
								//console.log(sum1)
								for(var i=0;i<sum1.length;i++){
									total1+=parseInt(sum1[i].txje);
									};
								//console.log(total1)
								_this.$store.commit('tixian',total1);
								//_this.$router.push('/zhanghu')
						})
						
						axios({
									method:'post',
									url:"http://localhost:3000/chanpin11",
									params:{phoneNum:_this.$store.state.name},
							}).then(function (data){
								//console.log(data.data)
									_this.$store.commit('chanpin',data.data);
									var sum=data.data;
									var total=0;
//									console.log(sum)
									for(var i=0;i<sum.length;i++){
										total+=parseInt(sum[i].gmje);
									};
									//console.log(total)
									_this.$store.commit('chanpinjine',total);
								
							})
						
							_this.$router.push('/my')
							
						}else{
							MessageBox('信息确认', '密码错误，请重新填写')
						}
					}
					
				})
			}
		}
	}
</script>

<style scoped="">
	div{
		text-align: center;
	}
	.shouji4{
		width: 100%;
		height: 45px;
		border-bottom: 1px solid #CECECE;
		background: white;
	}
	.shouji4>span{
		width:10%;
		height: 45px;
		line-height: 45px;
		font-size: 30px;
		float: left;
		color: red;
		
	}
	.shouji4>input{
		width: 90%;
		margin-top: 0;
		height: 45px;
		float: left;
		border: none;
	}
	.denglu{
		width: 80vw;
		height: 35px;
		border: none;
		background:greenyellow;
		border-radius:15px ;
		text-align: center;
		color:white;
		margin-top: 30px;
	}
	.zhuce{
		width: 100%;
		height: 40px;
		border: none;
		border-bottom: 1px solid #CECECE;
		position: fixed;
		bottom: 0;
		left: 0;
		color: greenyellow;
		background:white;
	}
	header>span:nth-child(1){
		display:inline-block;
		width:50px;
		margin-right: 10px;
		float: left;
		font-size: 16px;
	}
	header>span:nth-child(2){
		float:left;
		width:50px;
		text-align: left;
		font-size:20px;
		color: #0a0a0a;
	}
	header{
	   box-shadow: 0px -2px 2px #CECECE inset;
	   background: white;
	   height: 50px;
	   line-height: 50px;
	   width:100%;
	   border-bottom: 1px solid #CECECE;
	   margin-bottom: 10px;
	   color:#141414;
	   font-family: "微软雅黑";
	}
	
	
</style>