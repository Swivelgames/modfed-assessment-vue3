<script setup lang="ts">
	import { useCartStore } from "shop_cart/useCartStore";

	const { addToCart } = useCartStore();

	const handleClick = async (id: string) => {
		await addToCart(id);
		globalThis.window.location = `https://${modfeds.shop_cart.host}/`;
	};

	defineProps<{
		id: string,
		title: string,
		description: string,
		price: number,
		category?: string,
	}>();
</script>

<template>
	<article>
		<figure>Product Image</figure>
		<h1>{{title}}</h1>
		<p>{{description}}</p>
		<footer>
			<b>${{price}}</b>
			<button @click.prevent.stop="handleClick(id)">Add to Cart</button>
		</footer>
	</article>
</template>

<style scoped>
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		margin: 0 1% 20px 0;
		flex-basis: 31%;
		min-width: 220px;
		height: 300px;

		figure {
			border: 1px solid #ccc;
			border-radius: 4px;
			width: 100%;
			height: 100px;
		}

		h1 {
			font-size: 1rem;
			font-weight: bold;
			margin: 10px 0;
		}

		p {
			margin: 10px 0;
			font-size: 0.7rem;
		}

		b {
			font-weight: bold;
		}

		footer {
			display: flex;
			align-items: center;
			justify-content: space-between;

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
</style>