<script setup lang="ts">
	import { watch } from "vue";
	import PageContainer from "shop_global_ui/PageContainer";
	import ProductCard from "shop_product/ProductCard";
	import { useProductStore } from "shop_product/useProductStore";
	import ProductList from "./components/product-list.vue";

	const handleClick = () => {
		globalThis.window.location = `https://${modfeds.shop_product.host}/`;
	};

	const productStore = useProductStore();
</script>

<template>
	<PageContainer>
		<div>Name: shop-category</div>
		<div>Framework: vue3</div>
		<div>Language: TypeScript</div>
		<div>CSS: Empty CSS</div>

		<div v-if="productStore.isLoading">
			Loading products...
		</div>

		<div v-if="productStore.error">
			Error loading products:
			{{error}}
		</div>

		<ProductList>
			<ProductCard
				v-for="p in productStore.products"
				:id="p.id"
				:title="p.title"
				:description="p.description"
				:price="p.price"
				@click="handleClick"
			/>
		</ProductList>
	</PageContainer>
</template>
