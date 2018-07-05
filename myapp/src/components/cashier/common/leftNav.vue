<template>
	<div>
		<el-menu>
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span slot="title">收银</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">订单</span>
			</el-menu-item>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>管理</span>
				</template>				
				<el-menu-item-group>
					<template slot="title">商品管理</template>
					<el-menu-item index="3-1"><span slot="title">上新</span></el-menu-item>
					<el-menu-item index="3-2"><span slot="title">下架</span></el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'leftNav'
	}	
</script>

<style type="text/css">

</style>
