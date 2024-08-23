<script setup lang="ts">
	import hero from "./public/hero.png";
	import Header from "./components/header.vue"
	import PageContainer from "./components/page-container.vue"

	const categoryPage = `https://${modfeds.shop_category.host}`;
</script>

<template>
	<PageContainer>
		<figure>
			<img :src="hero" />
			<div>
				<h1>Welcome to our Module Federation Assessment!</h1>
				<p>To get started, checkout the README.md</p>
				<a :href="categoryPage">Shop Now</a>
			</div>
		</figure>
		<div>
			<p>Name: shop-global-ui</p>
			<p>Framework: vue3</p>
			<p>Language: TypeScript</p>
			<p>CSS: Empty CSS</p>
		</div>
	</PageContainer>
</template>

<style scoped>
	figure {
		position: relative;
		display: inline-block;
		margin: -20px;
		margin-bottom: 20px;
		overflow: hidden;
		min-width: 800px;
		padding: 50px;
		color: #224;

		div {
			position: relative;
			display: inline-block;
			z-index: 1;
			padding: 20px;
			background: rgb(255 255 255 / 0.5);
			width: 60%;
			border-radius: 5px;
		}

		h1 {
			font-size: 2.5rem;
			margin-bottom: 20px;
			font-weight: bold;
		}

		p {
			font-size: 1.2rem;
			margin-bottom: 20px;
		}

		a {
			display: inline-block;
			background: #fff;
			color: #000;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			font-size: 0.8rem;
			font-weight: bold;
			cursor: pointer;
			text-decoration: none;
		}
	}

	/*
	figure::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.3);
		pointer-events: none;
	}
	*/

	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
		display: block;
		filter: blur(1px);
	}
</style>
