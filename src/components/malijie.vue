<template>
	<div>
		<!--<header>麻利借</header>-->
		<div class="yuan">
			<div class="top">
				<p>到账金额</p>
				<span ref='daozhang'>{{daozhang1}}</span>
			</div>
			<div class="middle">
				<p>借款金额（元）</p>
				<input type="text" v-model="jine" id="jine1"/>
			</div>
			<div class="bottom">
				<p>借款期限</p>
				<input type="text" v-model="tian" id="qixian"/>
			</div>
		</div>
		<ul>
			<li><span>急速审理费：</span><span ref='shenli'>{{shenli}}元</span></li>
			<li><span>档案保管费：</span><span ref='baoguan'>{{baoguan}}元</span></li>
			<li><span>息&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp费：</span><span ref='xifei'>{{xifei}}元</span></li>
			<li><span>费&nbsp用&nbsp总&nbsp计：</span><span ref='zongji'>{{total}}元</span></li>
		</ul>
		<input @click="shenqing11()" type="button" name="shenqing" id="shenqing" value="立即申请" />
		
		<div class="huankuan">
			<ol>
				<li><span class="iconfont icon-tuikuanshuoming"></span><span>描述</span></li>
				<li><span class="iconfont icon-jindu"></span>进度</li>
				<li><span class="iconfont icon-huodong"></span>说明</li>
			</ol>
		</div>
		
	</div>
</template>

<script >
	import $ from 'jquery'
	import axios from 'axios'
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Malijie',
		data(){
			return{
				str:'麻利借',
				jine:'600',
				tian:'7',
				id:'',
			}
		},
		methods:{
			shenqing11(){
				if(this.$store.state.name=='登录'){
					this.$router.push('/login')
				}else{
					var oDate = new Date();
					var day=oDate.getDate();
					var month=oDate.getMonth()+1
					var year=oDate.getFullYear()
					var str=year+'-'+month+'-'+day;
					
					var val1=document.getElementById("jine1").value;
					var val2=document.getElementById("qixian").value;
					var _this=this;
					
					MessageBox('信息确认', '<span>借款金额：'+val1+'元</span><span>借款周期：'+val2+'天</span>')
					.then(action =>{
						//console.log(_this.$store.state.name)
						//console.log(str);
						function getNDate(n){
							var oDate = new Date();
							var day = oDate.getDate();
							oDate.setDate(day+n);
							return oDate;
						}
						var hh=getNDate(Number(val2));
						var day1=hh.getDate();
						var month1=hh.getMonth()+1
						var year1=hh.getFullYear()
						var str1=year1+'-'+month1+'-'+day1;
						axios({
							method:'post',
							url:"http://localhost:3000/cunchu",
							params:{phoneNum:_this.$store.state.name,jine:val1,tianshu:val2,shijian:str,shijian1:str1,},
						}).then(function(data){
//							console.log(data.data._id)
//							_this.id=data.data._id
//							_this.$store.commit('shenqing11',_this.id)
								axios({
									method:'post',
									url:"http://localhost:3000/shuju",
									params:{phoneNum:_this.$store.state.name},
								}).then(function (data){
									_this.$store.commit('shuzu',data.data);
									//console.log(data.data)
									var sum=data.data;
									
									var total=0;
						//			console.log(sum)
									for(var i=0;i<sum.length;i++){
										total+=parseInt(sum[i].jine);
									};
									_this.$store.commit('jine',total);
								
							})
						})
					})
					
				}
				
			}
		},
		mounted(){
			this.$emit('toparent',this.str)
			
			
		},
		computed:{
			
			daozhang1(){
				if(this.jine==600&&this.tian==7){
					return '576'
				}else if(this.jine==600&&this.tian==14){
					return '552'
				}else if(this.jine==1200&&this.tian==7){
					return '1152'
				}else if(this.jine==1200&&this.tian==14){
					return '1104'
				}
			},
			shenli(){
				if(this.jine==600&&this.tian==7){
					return '16'
				}else if(this.jine==600&&this.tian==14){
					return '32'
				}else if(this.jine==1200&&this.tian==7){
					return '32'
				}else if(this.jine==1200&&this.tian==14){
					return '64'
				}
			},
			baoguan(){
				if(this.jine==600&&this.tian==7){
					return '7'
				}else if(this.jine==600&&this.tian==14){
					return '14'
				}else if(this.jine==1200&&this.tian==7){
					return '14'
				}else if(this.jine==1200&&this.tian==14){
					return '28'
				}
			},
			xifei(){
				if(this.jine==600&&this.tian==7){
					return '1'
				}else if(this.jine==600&&this.tian==14){
					return '2'
				}else if(this.jine==1200&&this.tian==7){
					return '2'
				}else if(this.jine==1200&&this.tian==14){
					return '4'
				}
			},
			total(){
				if(this.jine==600&&this.tian==7){
					return '24'
				}else if(this.jine==600&&this.tian==14){
					return '48'
				}else if(this.jine==1200&&this.tian==7){
					return '48'
				}else if(this.jine==1200&&this.tian==14){
					return '96'
				}
			},
		}
	}
</script>

<style >
.yuan{
	text-align: center;
	margin-top: 2vh;
	margin-left:15vw;
	width: 250px;
	height: 250px;
	border: 5px solid cyan;
	border-radius: 50% 50%;
	font-size: 14px;
	margin-bottom: 30px;
	color: #524e4e;
	background: white;
}
.top p{
	height: 40px;
	line-height: 40px;
}
.top span{
	height: 20px;
	margin-bottom: 40px;
}
.middle p{
	height: 30px;
	line-height: 30px;
}
.middle input{
	width: 100px;
	height:30px;
	border: 1px solid #cecece;
	border-radius: 8px;
	margin-bottom: 30px;
	text-align: center;
}
.bottom p{
	height: 30px;
	line-height: 30px;
}
.bottom input{
	height:20px;
	width:40px;
	border-radius: 10px;
	border: 1px solid #cecece;
	text-align: center;
}
ul>li{
	height: 30px;
	line-height:30px;
	color: #524e4e;
	padding-left: 10%;
	list-style: none;
	float: left;
	width: 40%;
	font-size: 14px;
}
ul>li>span:nth-child(1){
	display: inline-block;
	width: 85px;
	text-align: right;
	/*text-align-last:justify; text-justify:inter-ideograph
	text-align: justify;*/
}
ul>li>span{
	display: inline-block;
}
#shenqing{
	width: 70%;
	height: 35px;
	border: 1px solid green;
	color: cyan;
	margin-left: 15%;
	border-radius: 10px;
	margin-top: 20px;
	margin-bottom: 15px;
	background: #f6f6fe;
}
.huankuan{
	background: white;
	width: 100%;
	height: 90px;
}
ol{
	width: 90%;
	margin-left: 5%;
	/*border: 1px solid red;*/
	padding-top: 10px;
}
ol>li{
	list-style: none;
	float: left;
	width: 32.5%;
	height: 70px;
	/*border: 1px solid red;*/
	text-align: center;
	font-size: 14px;
}
ol>li>span:nth-child(1){
	height: 40px;
	line-height: 40px;
	font-size:40px;
	display: block;
}
ol>li>span:nth-child(2){
	height:30px;
	line-height:30px;
}
ol>li:nth-child(1)>span:nth-child(1){
	color: darkturquoise;
}
ol>li:nth-child(2)>span:nth-child(1){
	color:deepskyblue;
}
ol>li:nth-child(3)>span:nth-child(1){
	color: orangered;
}

</style>