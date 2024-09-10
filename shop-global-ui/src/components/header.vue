<script setup lang="ts">
	import { ref } from "vue";
	import CartDialog from "shop_cart/CartDialog";

	const cartButton = ref(null);
	const cartOpen = ref(false);

	const toggleCart = () => {
		cartOpen.value = !cartOpen.value;
	};

	const homePage = `https://${modfeds.shop_global_ui.host}/`
	const categoryPage = `https://${modfeds.shop_category.host}/`
</script>

<template>
	<header>
		<div>
			<h1>
				<a :href="homePage">LOGO</a>
			</h1>
			<nav>
				<a :href="categoryPage">Women's Clothes</a>
				<a :href="categoryPage">Men's Clothes</a>
				<a :href="categoryPage">Watches</a>
				<a :href="categoryPage">Bags</a>
			</nav>
			<aside>
				<button @click="toggleCart">Cart</button>
				<CartDialog v-model:open="carotpen" />
				<button>Sign-In</button>
			</aside>
		</div>
	</header>
</template>

<style scoped>
	header {
		background: #224;
		width: 100%;

		div {
			display: flex;
			align-content: center;
			align-items: center;
			justify-content: space-between;

			color: #eef;
			height: 60px;
			max-width: 800px;

			margin: 0 auto;
			padding: 0 20px;

			h1, h1 a {
				font-weight: bold;
				font-size: 1.5rem;
				color: #eef;
				text-decoration: none;
			}

			nav {
				a {
					margin: 0px 10px;
					font-size: 1.2rem;
					color: #eef;
					text-decoration: none;
				}
			}

			aside button {
				background: #eef;
				color: #224;
				border: none;
				border-radius: 5px;
				padding: 5px 10px;
				margin: 5px;
				font-weight: bold;
				cursor: pointer;
			}
		}
	}
</style>