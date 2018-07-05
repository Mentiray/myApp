<template>
	<div class="cashier">
		<el-row>
			<el-col :span="2">
				<leftNav></leftNav>
			</el-col>
			<el-col :span="6">
				<orderList></orderList>
			</el-col>
			<el-col :span="16">
				<productList></productList>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import leftNav from '@/components/cashier/common/leftNav';
	import orderList from '@/components/cashier/common/orderList';
	import productList from '@/components/cashier/common/productList';
	export default{
		name: 'cashier',
		components:{
			leftNav,
			orderList,
			productList
		}
	}
</script>

<style type="text/css">
	.cashier{
		height: 100%;
	}
</style>
