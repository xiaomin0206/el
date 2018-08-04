<template>
	<div class="aa">
		<header><span @click="fanhui()"><</span><span>设置</span></header>
		<mt-cell title="账号" ><span>{{this.$store.state.name}}</span></mt-cell>
		<mt-cell title="应还金额"><span>￥{{this.$store.state.jine}}</span></mt-cell>
		<div class="bottom2">
			<mt-cell
				  title="修改登录密码"
				  to="http://localhost:8080/#/mima"
				  is-link
				  >
			</mt-cell>
			<mt-cell
				  title="修改支付密码"
				  to="//github.com"
				  is-link
				  >
			</mt-cell>
		</div>	
		<input type="button" id="tuichu" value="退出登录" @click="tuichu()"/>
	</div>
</template>

<script>
	export default{
		name:'Shezhi',
		methods:{
			fanhui(){
				history.go(-1)
			},
			tuichu(){
				this.$router.push('/my') 
				this.$store.commit('name','登录')
				this.$store.commit('jine','0.00');
				
			}
		}
	}
</script>

<style scoped="">
	.aa{
		color: #524e4e;
	}
	
	#tuichu{
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
	}
</style>