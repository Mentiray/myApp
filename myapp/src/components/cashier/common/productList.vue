<template>
	<div>
		<div class="hotPro">
			<div class="title">
				热卖商品
			</div>
			<ul class="list" v-for="item in products">
				<li class="pro"  @click="addOrderList(item)">
					{{item.proName}} ￥{{item.proPrice}}元
				</li>
			</ul>
		</div>

		<div class="proList">
			<el-tabs>
				<el-tab-pane label="汉堡">
					<template>
						<ul v-for="item in products" >
							<li @click="addOrderList(item)">
								<div class="left">
									<img src="static/img/hanbao.jpg">
								</div>
								<div class="right">
									<dl>
										<dd>{{item.proName}}</dd>
										<dd>￥{{item.proPrice}}元</dd>
									</dl>
								</div>								
							</li>
						</ul>
					</template>
				</el-tab-pane>
				<el-tab-pane label="小食">
					<ul v-for="item in products" >
						<li>
							<div class="left">
								<img src="static/img/hanbao.jpg">
							</div>
							<div class="right">
								<dl>
									<dd>{{item.proName}}</dd>
									<dd>￥{{item.proPrice}}元</dd>
								</dl>
							</div>								
						</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="饮品"></el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	//需要引入store和map
	import store from '@/store/store';
	import { mapState,mapMutations } from 'vuex';	
	export default{
		name: 'productList',		
		computed:mapState(
			["products"]
		),
		methods:mapMutations(
			["addOrderList"]
		),
		store
	}
</script>

<style scoped>

	.title{
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #e4e7ed; 
	}
	.hotPro{
		margin-bottom: 50px;
	}
	.hotPro::after{
		content: " ";
		display: block;
		clear: both;
	}
	.list{
		width: 90%;
		
	}
	.hotPro .pro{
		width: 200px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #e4e7ed;
		padding: 5px;
		margin: 5px;
		float: left;
	}
	.proList li{
		width: 250px;
		height: 100px;
		border: 1px solid #e4e7ed;
		float: left;
		padding: 10px;
		margin:10px;
	}
	.left{
		width: 100px;
		float: left;
	}
	img{
		width: 100%;	
	}
	.right{
		width: 150px;
		float: left;
	}
	dd{
		text-align: left;
		margin-bottom: 5px;
	}

</style>