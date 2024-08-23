<script setup lang="ts">
	import PageContainer from "shop_global_ui/PageContainer";
	import ProductCard from "shop_product/ProductCard";
	import ProductList from "./components/product-list.vue";

	const handleClick = () => {
		globalThis.window.location = `https://${modfeds.shop_product.host}/`;
	};
</script>

<template>
	<PageContainer>
		<div>Name: shop-category</div>
		<div>Framework: vue3</div>
		<div>Language: TypeScript</div>
		<div>CSS: Empty CSS</div>

		<ProductList>
			<ProductCard @click="handleClick" />
			<ProductCard @click="handleClick" />
			<ProductCard @click="handleClick" />
			<ProductCard @click="handleClick" />
			<ProductCard @click="handleClick" />
		</ProductList>
	</PageContainer>
</template>
