<template>
	<div class="zhanghu">
		<header><span @click="fanhui()"><</span><span>设置</span></header>
		<mt-cell title="账户余额"><span>￥</span><span ref='yue'>{{this.$store.state.jine-this.$store.state.tixian-this.$store.state.chanpinjine}}</span></mt-cell>
		<div class="bottom2">
			<mt-cell
				  title="申请提现"
				  to="http://localhost:8080/#/tixian"
				  is-link
				  >
			</mt-cell>
			<mt-cell
				  title="银行卡"
				  to="//github.com"
				  is-link
				  >
			</mt-cell>
		</div>	
	</div>
</template>

<script>
	import $ from 'jquery'
	import { MessageBox } from 'mint-ui';
	
	export default{
		name:'Zhanghu',
		methods:{
			fanhui(){
				//history.go(-1)
				this.$router.push('/my')
			},
		},
		mounted(){
			if(this.$refs.yue.innerHTML==0){
				$(function(){
					$('.mint-cell').click(function(){
						return false;
						MessageBox('信息确认', '无提现额度')
					})
				})
			}
		}
		
	}
</script>

<style scoped="">
	
	.mint-cell{
		margin: 10px;
		border: none;
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
	   background: white;
	}
</style>