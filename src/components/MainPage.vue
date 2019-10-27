<template>
	<div class="wrapper">
		<h1>Планеты</h1>
		<div @click="goToInfo(planet.name)" v-for="planet in planets" :key="planet.url" class="card">
			<h3 style="padding:14px;text-decoration:underline;">{{planet.name}}</h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MainPage",
		props: ["planets"],
		methods: {
			goToInfo(name) {
				this.$router.push({
					name: "planet-info",
					params: { pName: name }
				});
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}

	.d-flex {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	h1 {
		position: absolute;
		left: 45%;
		top: 0px;
	}

	h3 {
		color: #fff;
	}

	.wrapper {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		.card {
			background-image: url(https://img02.rl0.ru/99c575b334c87e2e452aa56af1e4711c/c615x400i/news.rambler.ru/img/2019/04/12152747.451981.1367.jpg);
			color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			max-width: 25%;
			width: 20%;
			min-height: 240px;
			cursor: pointer;
			& span > span:first-child {
				font-weight: 600;
			}
			color: black;
			text-decoration: unset;
			margin: 10px 24px;
			border: 1px solid grey;
		}
		span {
			padding-left: 14px;
		}
	}
</style>
