<template>
	<div class="wrap1">
		<!--<header>更多</header>-->
		<div class="top1">
			<div>
				<span class="iconfont icon-gengduo" style='color:blue'></span>
				<span>关于麻利借</span>
			</div>
			<div>
				<span class="iconfont icon-xinxi" style='color:orangered'></span>
				<span>公告</span>
			</div>
			<div>
				<span class="iconfont icon-huodong" style='color:red'></span>
				<span>协议</span>
			</div>
		</div>
		<div class="bottom1">
			<div>
				<span class="iconfont icon-shezhi" style='color:orangered'></span>
				<span>当前版本&nbsp&nbsp&nbsp&nbsp&nbsp2.1.0</span>
			</div>
			<div>
				<span class="iconfont icon-xiaozhu" style='color:red'></span>
				<span>切换身份</span>
			</div>
		</div>
			
	</div>
</template>

<script>
	export default{
		name:'Morethan',
		data(){
			return{
				str:'更多',
			}
		},
		mounted(){
			this.$emit('toparent',this.str)
		}
		
	}
</script>

<style scoped="">
	.top1{
		padding-left: 20px;
		margin-top: 30px;
		margin-bottom: 30px;
		height: 152px;
		background: white;
	}
	.top1 div{
		border-bottom: 1px solid black;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
	}
	.top1 div span:nth-child(1){
		display: inline-block;
		font-size: 22px;
		height: 22px;
		line-height: 22px;
		
	}
	.top1 div span:nth-child(2){
		display: inline-block;
	}
	.top1 div:nth-child(3){
		margin-bottom: 30px;
	}
	.bottom1{
		padding-left: 20px;
		height: 102px;
		background: white;
	}
	.bottom1 div{
		border-bottom: 1px solid black;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
	}
	.bottom1 div span:nth-child(1){
		display: inline-block;
		font-size: 22px;
		height: 22px;
		line-height: 22px;
		
	}
	.bottom1 div span:nth-child(2){
		display: inline-block;
	}
	/*header{
	   box-shadow: 0px -2px 2px #CECECE inset;
	}
	header{
		height: 50px;
		line-height: 50px;
		color: black;
		text-align: center;
		font-size:12px;
		background: white;
	}
	header{
		font-size:20px;
	}*/
</style>