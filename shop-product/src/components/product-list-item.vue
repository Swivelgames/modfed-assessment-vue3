<script setup lang="ts">
	
</script>

<template>
	<article>
		<div>
			<figure>Product Image</figure>
			<h1>Product Title</h1>
		</div>
		<b>$20.00</b>
		<footer>
			<slot />
		</footer>
	</article>
</template>

<style scoped>
	article {
		display: flex;
		flex-direction: row;
		align-content: center;
		align-items: center;
		justify-content: space-between;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		margin: 0;
		margin-bottom: 1%;
		width: 100%;
		height: 80px;

		> div {
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			justify-content: space-between;
			gap: 20px;
		}

		b {
			font-weight: bold;
		}

		figure {
			border: 1px solid #ccc;
			border-radius: 4px;
			max-width: 100px;
			height: 60px;
		}

		h1 {
			font-size: 1rem;
			font-weight: bold;
			margin: 0;
		}

		footer {
			display: flex;
			align-items: center;
			gap: 10px;

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