<script setup lang="ts">
	import "../index.css";
	import Header from "./header.vue"
	import Footer from "./footer.vue"
</script>

<template>
	<div class="page">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>

<style scoped>
	main {
		min-height: 400px;
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}
</style>
