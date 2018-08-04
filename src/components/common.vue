<template>
  <div id="qq">
   	<header>{{str}}</header>
   	<section>
   		<router-view @toparent="setdata"></router-view>
   	</section>
   	<footer >
	   		<router-link tag='span' to='/malijie'><span class="iconfont icon-dongwuyuan tubiao" ></span><span class="zi">麻利借</span></router-link>
	   		<router-link tag='span' to='/my'><span class="iconfont icon-wode tubiao" ></span><span class="zi">我的</span></router-link>
	   		<router-link tag='span' to='/morethan'><span class="iconfont icon-more-br tubiao" ></span><span class="zi">更多</span></router-link>
   	</footer>
  </div>
</template>

<script>
export default {
  name: 'Common',
  data(){
  	return{
  		str:'麻利借',
//		flag:true
  	}
  },
  methods:{
  	setdata(data){
		this.str=data
//		this.flag=data
  	},
  }
}

</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#qq{
	height: 100vh;
	display: flex;
	flex-direction: column;
}

header,footer{
	height: 50px;
	line-height: 50px;
	color: black;
	text-align: center;
	font-size:12px;
	background: white;
}

header{
	font-family: "微软雅黑";
	font-size:20px;
	box-shadow: 0px -2px 2px #CECECE inset;
	color: #141414;
}
section{
	flex: 1;
	/*background:#f7f4f4;*/
}
footer>span{
	float: left;
	width: 33.3%;
}
span{
	display: block;
}
.tubiao{
	height: 24px;
	line-height: 24px;
	font-size:24px;
	margin-top: 5px;
}
.zi{
	height: 20px;
	line-height: 20px;
}
.router-link-active{
	color:red;
}
</style>
