import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
	products:[
		{"proID":1,"proName":"鸡腿堡","proPrice":15,"proHot":true},
		{"proID":2,"proName":"香辣鸡腿堡","proPrice":15,"proHot":true}
	],
	orderList:[],
	totalCount: 0,
	totalMoney: 0
}

const mutations = {
	//传入state和组件中传来的参数
	//添加商品
	addOrderList(state,item){
		state.totalCount = 0;
		state.totalMoney = 0;
		let isHave = false;
		//商品是否已存在于订单列表
		for( let i = 0; i < state.orderList.length; i++){
			if(state.orderList[i].proID == item.proID){
				isHave = true;
			}		
		}
		//更新商品列表
		if(isHave){
			let arr = state.orderList.filter( o=>o.proID == item.proID);
			arr[0].proNum++;
		}
		else{
			let newPro = {proID:item.proID,proName:item.proName,proPrice:item.proPrice,proNum:1};
			state.orderList.push(newPro);
		}
		//调用mutations中的函数，建议不这么做，用actions更好
		this.commit('getCount');
	},

	//清空单类商品
	delSinglePro(state,item){
		state.orderList = state.orderList.filter( o=>o.proID != item.proID);
		this.commit('getCount');
	},

	//删除一件商品
	delOnePro(state,item){
		if(item.proNum<1){
			state.orderList = state.orderList.filter( o=>o.proID != item.proID);
		}else{			
			let arr = state.orderList.filter( o=>o.proID == item.proID);
			arr[0].proNum--;
		}
		this.commit('getCount');
	},

	//清空所有商品
	delAllPro(){
		state.orderList = [ ];
		state.totalMoney = 0;
		state.totalCount = 0;
	},

	//结账
	checkOut(state){
		if(state.totalCount != 0){
			state.orderList = [ ];
			state.totalMoney = 0;
			state.totalCount = 0;
			// $message({
			// 	message:"结账成功！",
			// 	type:"success"
			// });
			alert("结账成功！");
		}else{
			// $message({
			// 	message:"无商品可以结账",
			// 	type:"error"
			// });
			alert("无商品可以结账");
		}
	},
	//计算总价和总数
	getCount(state){
		if(state.orderList){
			state.totalCount = 0;
			state.totalMoney = 0;
			state.orderList.forEach((element)=>{
				state.totalCount += element.proNum;
				state.totalMoney = state.totalMoney + (element.proNum*element.proPrice);
			})
		}
	}
}

export default new Vuex.Store({
	state,mutations
})