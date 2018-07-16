<template>
	<div>
		<el-tabs type="card" stretch="true">
			<el-tab-pane label="点餐">
				<el-table :data="orderList">
					<el-table-column label="商品" prop="proName" align="center"></el-table-column>
					<el-table-column label="数量" prop="proNum" align="center"></el-table-column>
					<el-table-column label="单价" prop="proPrice" align="center"></el-table-column>
					<el-table-column label="操作" align="center">
						<!-- 这里用scope.row传参	 -->					
						<template slot-scope="scope">
							<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
							<el-button type="text" size="small" @click="delOnePro(scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-col :span="12">总件数：{{totalCount}}</el-col>
				<el-col :span="12">总价：{{totalMoney}}</el-col>
			</el-tab-pane>
			<el-tab-pane label="外卖">外卖</el-tab-pane>
			<el-tab-pane label="挂单">挂单</el-tab-pane>
		</el-tabs>		
		<el-button type="success" @click="checkOut()">结账</el-button>
		<el-button type="danger" @click="delAllPro()">清空</el-button>
	</div>
</template>

<script>
	import store from "@/store/store"
	import { mapState,mapMutations } from 'vuex'
	export default{
		name: 'orderList',
		computed:mapState(
			["orderList","totalCount","totalMoney"]
		),
		methods:mapMutations(
			["addOrderList","delSinglePro","delOnePro","delAllPro","checkOut"]
		),
		store
	}
</script>

<style scoped>
	.el-button{
		margin-top: 10px; 
	}
	.el-tabs__content{
		border-right: 1px solid #e4e7ed; 
	}
	.el-col{
		margin: 10px 0;
	}

</style>