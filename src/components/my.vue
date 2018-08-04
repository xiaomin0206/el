<template>
	<div>
		<!--<header>我的</header>-->
		<div class="top2">
			
			<span class="denglu" @click="foo()" ref='txtx'>{{denglu}}</span>
			<!--<router-link tag='span' to="/login" class="denglu">登录</router-link>-->
			<div class="sum">
				<span>应还金额（元）</span>
				<span>{{this.$store.state.jine}}</span>
			</div>
		</div>
		<div class="my">
			<ul>
				<li><span class="iconfont icon-guimianrenzheng"></span><p>申请认证</p></li>
				<li @click="zhangdan()"><span class="iconfont icon-zhangdan"></span><p>我的账单</p></li>
				<li ><span class="iconfont icon-xinxi" @click="zhanghu()"></span><p>账户信息</p></li>
				<li><span class="iconfont icon-shezhi"></span><p>安全设置</p></li>
				<li><span class="iconfont icon-chaxun" @click='jindu'></span><p>进度查询</p></li>
				<li><span class="iconfont icon-huodong" @click='huodong'></span><p>活动中心</p></li>
			</ul>
		</div>
	</div>
</template>

<script >
	export default{
		name:'My',
		data(){
			return{
				str:'我的',
//				user:'登录',
			}
		},
		mounted(){
			this.$emit('toparent',this.str)
		},
		methods:{
			foo(){
//				console.log(this.$refs.txtx.innerHTML)
				if(this.$refs.txtx.innerHTML!='登录'){
					this.$router.push('/shezhi')
					
				}else{
					this.$router.push('/login')
				}
			},
			zhangdan(){
				this.$router.push('/zhangdan')
			},
			zhanghu(){
				this.$router.push('/zhanghu')
			},
			huodong(){
				this.$router.push('/chanpin')
			},
			jindu(){
				this.$router.push('/liebiao')
			}
		},
		computed:{
			denglu(){
				//console.log(this.$store.state.name)
				if(this.$store.state.name!=''){
					
					return this.$store.state.name
				}else{
					return '登录'
				}
			},
		}
		
	}
</script>
<style scoped="">
	span{
		display: block;
		width: 100%;
		text-align: center;
	}
	.top2{
		height: 180px;
		/*border: 1px solid red;*/
		background: white;
	}
	.denglu{
		margin-top: 5px;
		line-height: 40px;
		height: 40px;
		font-size: 20px;
	}
	.sum span:nth-child(1){
		height: 40px;
		line-height: 40px;
	}
	.sum span:nth-child(2){
		height: 40px;
		line-height: 40px;
	}
	.my>ul>li{
		padding-left: 0;
		list-style: none;
		float: left;
		width:32.7%;
		height: 120px;
		border: 1px solid #ebebeb;
		text-align: center;
		background: white;
	}
	.my>ul>li>span{
		margin-left: 40px;
		margin-top: 20px;
		margin-bottom: 10px;
		display: block;
		width:35px;
		height:35px;
		font-size:35px;
		
	}
	.my>ul>li:nth-child(1)>span{
		color:red;
	}
	.my>ul>li:nth-child(2)>span{
		color:cyan;
	}
	.my>ul>li:nth-child(3)>span{
		color:red;
	}
	.my>ul>li:nth-child(4)>span{
		color:mediumpurple;
	}
	.my>ul>li:nth-child(5)>span{
		color:orange;
	}
	.my>ul>li:nth-child(6)>span{
		color:forestgreen;
	}
	
	
</style>