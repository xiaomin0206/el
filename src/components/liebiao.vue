<template>
	<div>
		<header><span @click="fanhui()"><</span><span>产品列表</span></header>
			<mt-swipe :auto="1000">
			  <mt-swipe-item><img src="../../static/qq.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="../../static/qq1.jpg"></mt-swipe-item>
			</mt-swipe>
			<div>
				<ol><li>种类</li><li>投资金额</li><li>年限</li><li>年利率</li><li>总收益</li></ol>
			</div>
			<ul ref="txt" class="shuju" >
				<li v-for='(item,key) in this.$store.state.chanpin'>
					<span ref='leibie'>{{item.leibie}}</span>
					<span>{{item.gmje}}元</span>
					<span>{{item.qixian}}年</span>
					<span>{{item.huibao}}</span>
					<span>{{item.shouyi}}元</span>
				</li>
			</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default{
		name:'Liebiao',
		methods:{
			fanhui(){
				history.go(-1)
			},
			del(){
				var huibao=this.$refs.huibao.innerHTML;
				var qixian=this.$refs.qixian.innerHTML;
				var gmje=this.$refs.gmje.innerHTML;
				var leibie=this.$refs.leibie.innerHTML;
				var shouyi=48;
			}
		},
	}
</script>

<style scoped="">
	
	.mint-swipe{
		/*z-index: -1;*/
		margin-top: 50px;
		height: 160px
	}
	.mint-swipe img{
		width: 100%;
		height: 160px;
		display: block;
	}
 ol{
		margin-left:0;
		padding-top: 0;
		width: 100%;
		height: 50px;
		display: flex;
	}
	li{
			list-style: none;
			float: left;
			/*width:20vw;*/
			flex: 1;
			height: 50px;
			line-height: 50px;
			background: aliceblue;
			text-align: center;
			font-size: 14px;
		}
	/*头部*/
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
		z-index: 1;
		position: fixed;
		top: 0;
	   box-shadow: 0px -1px 1px #CECECE inset;
	   height: 50px;
	   line-height: 50px;
	   width:100%;
	   border-bottom: 1px solid #CECECE;
	   margin-bottom: 10px;
	   color:#141414;
	   font-family: "微软雅黑";
	   background: white;
	}
	.shuju{
		width: 100%;
		height: auto;
	}
	.shuju>li>span{
		flex: 1;
		display: block;
		font-size: 14px;
		display: inline-block;
		/*width: 20%;*/
		height: 50px;
		line-height: 50px;
		text-align:center;
	}
	.shuju li{
		display: flex;
		/*justify-content: space-between;*/
		text-align:left;
		margin-left:0 ;
		height: 50px;
		padding-left:0;
		width: 100%;
		float: left;
		background: #f6f6fe;
	}
</style>