<template>
	<div class="regist">
		<header><span @click="fanhui()" ><</span><span>用户注册</span></header>
		<input type="text" v-model="sj" placeholder="手机号" ref='haoma' id='sjhm'/>
		<input type="text" placeholder="输入图片验证码" v-model="tp"/>
		<span class="suiji" @click="suiji()" ref="yan">{{str}}</span>
		<input type="text" v-model="yzm1" placeholder="验证码"/>
		<span @click="yzm()" class="yzm">获取验证码</span>
		<input type="text" name="" id="" value="" placeholder="请输入密码" v-model="pass"/>
		<input type="text" name="" id="" value="" placeholder="请输入邀请码(选填)"/>
		<div class="xieyi">
			<input type="checkbox" class="tongyi" v-model='yuedu'/><span data-toggle="modal" data-target="#myModal">阅读并同意</span><em><<注册协议>></em>
		</div>
		<input type="button" value="立即注册" @click="zhuce()" class="zhuce"/>
		
	</div>
		
</template>

<script>
	import axios from 'axios'
	import { MessageBox } from 'mint-ui';
	import $ from 'jquery'
	export default{
		name:'Regist',
		data(){
			return{
				str:'1234',
				sj:'',
				tp:'',
				yzm1:'',
				pass:'',
				yuedu:'',
				
			}
		},
//		mounted(){
//			$("#sjhm").blur(function(){
//				if(/^[1][358][0-9]{9}$/.test(this.$refs.haoma.innerHTML)==false){
//				//alert("hhhhhhhh")
//			}
//			});
//			
//		},
		methods:{
			suiji(){
				var str1=''
				var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
				for(var i=0;i<4;i++){
					var num=Math.floor(Math.random()*62);
					str1+=arr[num]
				}
				this.str=str1;
			},
			yzm(){
				var _this=this;
				axios({
					method:'post',
					url:"http://localhost:3000/register",
					params:{phoneNum:_this.sj,id:1}
				}).then(function(data){
					//console.log(data.data)
				})
			},
			zhuce(){
				var yan1=this.$refs.yan.innerHTML;
				if(this.haoma==''){
					MessageBox('信息提醒', '请输入手机号码');
				}else{
					if(this.tp==''){
						MessageBox('信息提醒', '请输入图片验证码');
					}else{
						if(this.tp!=yan1){
							MessageBox('信息提醒', '图片验证码输入错误');
						}else{
							if(this.yzm1==''){
								MessageBox('信息提醒', '验证码不能为空，请输入验证码');
							}else{
								if(this.pass==''){
								MessageBox('信息提醒', '密码不能为空，请输入密码');
							}else{
									if(this.yuedu==false){
										MessageBox('信息提醒', '请先勾选同意阅读协议');
									}else{
										var _this=this;
										axios({
											method:'post',
											url:"http://localhost:3000/register",
											params:{phoneNum:_this.sj,yzm:_this.yzm1,pass:_this.pass,id:2}
										}).then(function(data){
											if(data.data==1){
												_this.$router.push('/login')
											}else if(data.data==2){
												MessageBox('信息提醒', '该用户名已被注册').then(action=>{
													location.reload();
												})
											}else if(data.data==0){
												MessageBox('信息提醒', '验证码输入错误，请重新尝试').then(action=>{
													//location.reload();
												})
											}
											
										})
									}
								}
							}
						}
					}
				}
			},
			fanhui(){
				history.go(-1)
			}
		}
		
		
	}
</script>

<style scoped="">
	.suiji{
		text-align: center;
		display: block;
		position: absolute;
		top:120px;
		width: 50px;
		height: 30px;
		line-height: 30px;
		/*background:greenyellow;*/
		left:300px;
		color: red;
	}
	.yzm{
		display: block;
		position: absolute;
		top:170px;
		text-align: center;
		left:260px;
		width: 100px;
		height:30px;
		line-height: 30px;
		border-radius: 15px;
		color:white;
		background: greenyellow;
		
	}
	input:nth-child(1){
		margin-top: 10px;
	}
	input{
		width: 90%;
		padding-left: 10%;
		height: 50px;
		border: none;
		border-bottom: 1px solid #CECECE;
	}
	.xieyi{
		height: 30px;
		line-height: 30px;
		margin-bottom:30px;
	}
	.xieyi>span{
		display: inline-block;
		width: 100px;
	}
	.tongyi{
		width: 20px;
		height:20px;
		margin-left: 10px;
		
	}
	.zhuce{
		width: 80vw;
		margin-left: 10vw;
		height: 35px;
		border: none;
		background:greenyellow;
		border-radius:15px ;
		text-align: center;
		color:white;
	}
	em{
		color:plum;
		font-style: normal;
	}
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
</style>