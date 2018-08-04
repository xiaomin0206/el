<template>
	<div class='zhangdan'>
		<header><span @click="fanhui()"><</span><span>我的账单</span></header>
			<mt-swipe :auto="1000">
			  <mt-swipe-item><img src="../../static/qq.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="../../static/qq1.jpg"></mt-swipe-item>
			</mt-swipe>
			<div  class="searchBar" id="searchBar">
				<ol  :class="searchBarFixed == true ? 'isFixed' :''"><li>金额</li><li>期限</li><li>借款时间</li><li>还款时间</li></ol>
			</div>
			<ul ref="txt" class="shuju" >
				<span v-if=flag class="jiazai">已加载全部数据</span>
				<li v-for='(item,key) in this.$store.state.shuzu'>
					<span>{{item.jine}}元</span>
					<span>{{item.tianshu}}天</span>
					<span>{{item.shijian}}</span>
					<span>{{item.shijian1}}</span>
					<button @click="huankuan(item._id)">还款</button>
				</li>
			</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	import $ from 'jquery'
	import { MessageBox } from 'mint-ui';
	export default{
		name:'Zhangdan',
		data(){
			return{
				list:'',
				flag:false,
				searchBarFixed:'',
			}
		},
		mounted(){
			//console.log(this.$store.state.id)
			if(this.$store.state.shuzu==''){
				this.flag=true
			} 
  			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			fanhui(){
				history.go(-1)
			},
			handleScroll () {
				  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				  //var offsetTop = document.querySelector('#searchBar').offsetTop
				 // console.log(offsetTop)
				  if (scrollTop >160) {
				    this.searchBarFixed = true
				  } else {
				    this.searchBarFixed = false
				  }
			},
			huankuan(aa){
				var _this=this;
				//console.log(aa);
				if(this.$store.state.jine-this.$store.state.tixian-this.$store.state.chanpinjine<600){
					MessageBox('信息确认', '余额不足')
				}else{
	  			axios({
	  				method:'get',
	  				url:'http://localhost:3000/huankuan',
	  				params:{id:aa}
	  			}).then(function(data){
	  				//console.log(data.data)
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
	  			}
			}
			
		},
	}
</script>

<style scoped=""lang="less" >
	/*轮播图*/
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
.searchBar{
  .isFixed{
    position:fixed;
    background-color:#Fff;
    top:50px;
    z-index:999;
  }
  ol{
		margin-left:0;
		padding-top: 0;
		width: 100%;
		height: 50px;
		li{
			list-style: none;
			float: left;
			width: 25%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			background: aliceblue;
			text-align: center;
		}
	}
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
	.jiazai{
		text-align: center;
	}
	.zhangdan{
		background: #f6f6fe;
		height: auto;
	}
	/*ol{
		margin-left:0;
		padding-top: 0;
		width: 100%;
		height: 50px;
	}
	ol>li{
		list-style: none;
		float: left;
		width: 25%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background: aliceblue;
		text-align: center;
	}*/
	.shuju{
		width: 100%;
	}
	.shuju>li>span{
		font-size: 14px;
		display: inline-block;
		/*width: 24%;*/
		flex: 1;
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
	.shuju li{
		display: flex;
		height: 50px;
		padding-left:0;
		width: 100%;
		float: left;
		background: #f6f6fe;
	}
	
	/*.shuju li{
		padding-left:5%;
		background: white;
		margin:10px 0;
		width: 95%;
		height: 60px;
		
	}
	.shuju li span{
		display: block;
		height: 30px;
		line-height: 30px;
		text-align: left;
	}
	.shuju li span:nth-child(1){
		width: 100px;
	}*/
	
</style>