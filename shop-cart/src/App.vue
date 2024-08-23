<script setup lang="ts">
	import PageContainer from "shop_global_ui/PageContainer";
	import ProductListItem from "shop_product/ProductListItem";
</script>

<template>
	<PageContainer>
		<div>Name: shop-cart</div>
		<div>Framework: vue3</div>
		<div>Language: TypeScript</div>
		<div>CSS: Empty CSS</div>

		<ProductListItem v-for="n in 3">
			QTY:

			<select>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>

			<button>X</button>
		</ProductListItem>
	</PageContainer>
</template>