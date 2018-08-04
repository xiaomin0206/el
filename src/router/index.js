import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import App from '../App'
import Common from '../components/common'
import Malijie from '../components/malijie'
import My from '../components/my'
import Morethan from '../components/morethan'
import Shezhi from '../components/shezhi'
import Login from '../components/login'
import Regist from '../components/regist'
import Zhangdan from '../components/zhangdan'
import Mima from '../components/mima'
import Zhanghu from '../components/zhanghu'
import Tixian from '../components/tixian'
import Chanpin from '../components/chanpin'
import Liebiao from '../components/liebiao'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/common',
			component: Common,
			children: [{
					path: '/malijie',
					component: Malijie
				},
				{
					path: '/my',
					component: My
				},
				{
					path: '/morethan',
					component: Morethan
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/regist',
			component:Regist
		},
		{
			path: '/',
			redirect:'/malijie'
		},
		{
			path: '/shezhi',
			component: Shezhi
		},
		{
			path: '/zhangdan',
			component:Zhangdan
		},
		{
			path: '/mima',
			component:Mima
		},	
		{
			path: '/zhanghu',
			component:Zhanghu
		},	
		{
			path: '/tixian',
			component:Tixian
		},
		{
			path: '/chanpin',
			component:Chanpin
		},	
		{
			path: '/liebiao',
			component:Liebiao
		},	
	]
})