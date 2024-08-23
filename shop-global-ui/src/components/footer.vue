<script setup lang="ts">
	const categoryPage = `https://${modfeds.shop_category.host}/`
</script>

<template>
	<footer>
		<div>
			<div>
				<h1>LOGO</h1>
				<p>Lorem ipsum dolor sit amet</p>
			</div>
			<nav>
				<b>Women's</b>
				<a :href="categoryPage">Purses</a>
				<a :href="categoryPage">Women's Clothes</a>
				<a :href="categoryPage">Women's Watches</a>
			</nav>
			<nav>
				<b>Men's</b>
				<a :href="categoryPage">Men's Bags</a>
				<a :href="categoryPage">Men's Clothes</a>
				<a :href="categoryPage">Men's Watches</a>
			</nav>
			<aside>
				business name
				<address>
					123 Foobar Ln,<br>
					City, State 12345
				</address>
			</aside>
		</div>
	</footer>
</template>

<style scoped>
	footer {
		background: #224;
		width: 100%;

		> div {
			display: flex;
			align-content: top;
			align-items: top;
			justify-content: space-between;

			color: #eef;
			max-width: 800px;

			margin: 0 auto;
			padding: 30px 20px;

			h1 {
				font-weight: bold;
				font-size: 1.5rem;
			}

			nav {
				display: block;
				a {
					display: block;
					margin: 5px 0px;
					color: #eef;
					text-decoration: none;
				}
				b {
					font-weight: bold;
					font-size: 1.2rem;
				}
			}
		}
	}
</style>