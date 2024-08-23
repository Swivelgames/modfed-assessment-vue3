<script setup lang="ts">
	import { ref, watch } from "vue";
	import PageContainer from "shop_global_ui/PageContainer";
	import { useProductStore } from "./stores/ProductStore";

	const productStore = useProductStore();
	const p = ref(null);

	watch(productStore, () => {
		const products = productStore.products;
		p.value = products[Math.floor(Math.random() * products.length)];
	});

	const handleClick = () => {
		globalThis.window.location = `https://${modfeds.shop_cart.host}/`;
	};
</script>

<template>
	<PageContainer>
		<div>Name: shop-product</div>
		<div>Framework: vue3</div>
		<div>Language: TypeScript</div>
		<div>CSS: Empty CSS</div>
		
		<div v-if="isLoading">
			Loading product...
		</div>

		<article v-if="productStore.products.length > 0 && product !== null">
			<figure>Product Image</figure>

			<div>
				<h1>{{p.title}}</h1>
				<b>${{p.price}}</b>
				<footer>
					<button @click="handleClick">Add to Cart</button>
				</footer>
			</div>

			<p>{{p.description}}</p>
		</article>
	</PageContainer>
</template>

<style scoped>
	article {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 10px;
		flex-wrap: wrap;

		figure {
			border: 1px solid #ccc;
			border-radius: 4px;
			flex-basis: 39%;
			height: 150px;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-basis: 59%;

			b {
				font-weight: bold;
				flex-grow: 1;
			}
	
			h1 {
				font-size: 1.5rem;
				font-weight: bold;
				margin: 10px 0;
			}
	
			footer {
				display: flex;
				align-items: center;
	
				button {
					background: #224;
					color: #eef;
					border: none;
					border-radius: 5px;
					padding: 5px 10px;
					margin: 0 5px 0 0;
					font-weight: bold;
					cursor: pointer;
				}
			}
		}
	}
</style>