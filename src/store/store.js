import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		name:'登录',
		jine:'0.00',
		shuzu:'',
		tixian:'',
		chanpin:'',
		chanpinjine:'',
		//id:'',
	},
	mutations:{
		name(a,b){
			a.name=b
		},
		jine(a,b){
			a.jine=b
		},
		shuzu(a,b){
			a.shuzu=b
		},
		tixian(a,b){
			a.tixian=b
		},
		chanpin(a,b){
			a.chanpin=b
		},
		chanpinjine(a,b){
			a.chanpinjine=b
		},
//		shenqing11(a,id){
//			a.id=id
//		},
	}
})