<script setup lang="ts">
	const handleClick = () => {
		globalThis.window.location = `https://${modfeds.shop_cart.host}/`;
	};
</script>

<template>
	<article>
		<figure>Product Image</figure>
		<h1>Product Title</h1>
		<p>Product Description</p>
		<b>$20.00</b>
		<footer>
			<button @click.prevent.stop="handleClick">Add to Cart</button>
			<button @click.prevent.stop="handleClick">Buy Now</button>
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

		b {
			font-weight: bold;
		}

		figure {
			border: 1px solid #ccc;
			border-radius: 4px;
			width: 100%;
			height: 150px;
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
</style>