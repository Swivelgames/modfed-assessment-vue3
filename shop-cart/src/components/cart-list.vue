<script setup lang="ts">
	import { ref, watch } from "vue";
	import ProductListItem from "shop_product/ProductListItem";
	import { useProductStore } from "shop_product/useProductStore";
	import { useCartStore } from "../stores/CartStore.ts";

	const productStore = useProductStore();
	const cartStore = useCartStore();

	const ps = ref([]);

	watch([productStore, cartStore], () => {
		if (!productStore.isReady || !cartStore.isReady) return;

		const cart = cartStore.cart;
		const products = productStore.products;

		ps.value = cart.map((p) => {
			const product = products.find((product) => product.id === p.id);
			if (product) {
				return { ...product, quantity: p.quantity };
			}
			return null;
		}).filter(p => p !== null);
	})
</script>

<template>
	<section>
		<ProductListItem
			v-for="p in ps"
			:id="p.id"
			:title="p.title"
			:price="p.price"
		>
			QTY:

			{{p.quantity}}
			<!-- select>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select -->

			<button>X</button>
		</ProductListItem>

		<div v-if="cartStore.isLoading" class="cart-empty">
			Loading cart...
		</div>

		<div v-if="!cartStore.isLoading && ps.length < 1" class="cart-empty">
			Your cart is empty.
		</div>
	</section>
</template>

<style scoped>
	.cart-empty {
		margin: 20px;
		font-weight: bold;
		text-align: center;
	}
</style>