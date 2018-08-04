<template>
	<div>
	<header><span @click="fanhui()"><</span><span>产品中心</span></header>
		<div class="xiangqing">
			<span ref='leibie'>A</span>
			<span @click="goumai()">购买</span>
			<ul>
				<li ref='huibao'>12%</li>
				<li ref='qixian'>2</li>
				<li ref='gmje'>200</li>
			</ul>
			<ul>
				<li >年回报率</li>
				<li >购买期限（年）</li>
				<li >购买金额</li>
			</ul>
			
		</div>
		<div class="xiangqing">
			<span ref='leibie1'>B</span>
			<span @click="goumai1()">购买</span>
			<ul>
				<li ref='huibao1'>10%</li>
				<li ref='qixian1'>1</li>
				<li ref='gmje1'>400</li>
			</ul>
			<ul>
				<li >年回报率</li>
				<li >购买期限（年）</li>
				<li >购买金额</li>
			</ul>
		</div>
		<div class="xiangqing">
			<span ref='leibie2'>C</span>
			<span @click="goumai2()">购买</span>
			<ul>
				<li ref='huibao2'>15%</li>
				<li ref='qixian2'>1</li>
				<li ref='gmje2'>400</li>
			</ul>
			<ul>
				<li >年回报率</li>
				<li >购买期限（年）</li>
				<li >购买金额</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Chanpin',
		methods:{
			fanhui(){
				history.go(-1)
			},
			goumai(){
				if(this.$store.state.jine-this.$store.state.tixian-this.$store.state.chanpinjine<200){
					MessageBox('信息确认', '余额不足')
				}else{
				var huibao=this.$refs.huibao.innerHTML;
				var qixian=this.$refs.qixian.innerHTML;
				var gmje=this.$refs.gmje.innerHTML;
				var leibie=this.$refs.leibie.innerHTML;
				var shouyi=48;
				var _this=this;
				//console.log(huibao,qixian,gmje,leibie,shouyi)
				axios({
					method:'post',
					url:"http://localhost:3000/chanpin",
					params:{phoneNum:_this.$store.state.name,huibao:huibao,qixian:qixian,gmje:gmje,shouyi:shouyi,leibie:leibie}
				}).then(function(data){
					//console.log(data.data)
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
					_this.$router.push('/liebiao')
				})
			}
		},
		goumai1(){
				if(this.$store.state.jine-this.$store.state.tixian-this.$store.state.chanpinjine<400){
					MessageBox('信息确认', '余额不足')
				}else{
				var huibao=this.$refs.huibao1.innerHTML;
				var qixian=this.$refs.qixian1.innerHTML;
				var gmje=this.$refs.gmje1.innerHTML;
				var leibie=this.$refs.leibie1.innerHTML;
				var shouyi=40;
				var _this=this;
				//console.log(huibao,qixian,gmje,leibie,shouyi)
				axios({
					method:'post',
					url:"http://localhost:3000/chanpin",
					params:{phoneNum:_this.$store.state.name,huibao:huibao,qixian:qixian,gmje:gmje,shouyi:shouyi,leibie:leibie}
				}).then(function(data){
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
					_this.$router.push('/liebiao')
				})
			}
		},
		goumai2(){
				if(this.$store.state.jine-this.$store.state.tixian-this.$store.state.chanpinjine<400){
					MessageBox('信息确认', '余额不足')
				}else{
				var huibao=this.$refs.huibao2.innerHTML;
				var qixian=this.$refs.qixian2.innerHTML;
				var gmje=this.$refs.gmje2.innerHTML;
				var leibie=this.$refs.leibie2.innerHTML;
				var shouyi=60;
				var _this=this;
				axios({
					method:'post',
					url:"http://localhost:3000/chanpin",
					params:{phoneNum:_this.$store.state.name,huibao:huibao,qixian:qixian,gmje:gmje,shouyi:shouyi,leibie:leibie}
				}).then(function(data){
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
					_this.$router.push('/liebiao')
				})
			}
		},
			
		
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
	.xiangqing{
		margin-top: 20px;
		background: white;
		height: auto;
		text-align: center;
		height: 100px;
	}
	.xiangqing span{
		font-size: 20px;
		height: 30px;
		line-height: 30px;
	}
	.xiangqing span:nth-child(1){
		float:left;
		margin-right:0;
		width: 30%;
	}
	.xiangqing span:nth-child(2){
		
		float: right;
		width:69%;
		display: inline-block;
		/*text-align: right;*/
	}
	ul{
		width: 100%;
	}
	ul>li{
		padding-left: 0;
		height: 30px;
		line-height: 30px;
		list-style: none;
		float: left;
		width: 33.3%;
	}
</style>