<script setup lang="ts">
	import PageContainer from "shop_global_ui/PageContainer";

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

		<article>
			<figure>Product Image</figure>

			<div>
				<h1>Product Title</h1>
				<b>$20.00</b>
				<footer>
					<button @click="handleClick">Add to Cart</button>
					<button @click="handleClick">Buy Now</button>
				</footer>
			</div>

			<p>Product Description</p>
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
			flex-basis: 49%;
			height: 150px;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-basis: 49%;

			b {
				font-weight: bold;
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