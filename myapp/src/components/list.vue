<template>
	<div>
		<el-row type="flex" justify="center">
			<router-link to="/cashier">
				<el-col :span="6">Cashier</el-col>
			</router-link>			
		</el-row>

		<el-row type="flex" justify="center">
			<router-link to="/blog">
				<el-col :span="6">Blog</el-col>
			</router-link>	
		</el-row>
	</div>
</template>

<script>
	export default{
		name: 'list'
	}
</script>
