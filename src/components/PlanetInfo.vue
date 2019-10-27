<template>
	<div class="wrapper">
		<h1>Информация о планете</h1>
		<br />
		<h2 class="w-100">Планета - {{this.$route.params.pName}}</h2>
		<br />
		<router-link to="/" class="w-100">Назад</router-link>
		<br />

		<div v-for="planet in planets" :key="planet.url" class="w-100">
			<div class="card" v-if="planet_name == planet.name">
				<span>
					<span>Имя:</span>
					<span style="color: orange;font-weight:bolder;" class="pink">&nbsp;{{planet.name}}</span>
				</span>
				<span>
					<span>Вращение, часы:</span>
					<span>&nbsp;{{planet.rotation_period}}</span>
				</span>
				<span>
					<span>Орбита:</span>
					<span>&nbsp;{{planet.orbital_period}}</span>
				</span>
				<span>
					<span>Диаметр:</span>
					<span>&nbsp;{{planet.diameter}}</span>
				</span>
				<span>
					<span>Климат:</span>
					<span>&nbsp;{{planet.climate}}</span>
				</span>
				<span>
					<span>Гравитация:</span>
					<span>&nbsp;{{planet.gravity}}</span>
				</span>
				<span>
					<span>Поверхность:</span>
					<span>&nbsp;{{planet.terrain}}</span>
				</span>
				<span>
					<span>Вода:</span>
					<span>&nbsp;{{planet.surface_water}}</span>
				</span>
				<span>
					<span>Население:</span>
					<span>&nbsp;{{planet.population}}</span>
				</span>
				<span class="d-flex" style="text-align:left;">
					<span>Резиденты:</span>
					<ul>
						<li>{{planet.residents}}</li>
					</ul>
				</span>
				<span class="d-flex" style="text-align:left;">
					<span>Фильмы:</span>
					<ul>
						<li>{{planet.films}}</li>
					</ul>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PlanetInfo",
		props: ["planets"],
		data: () => ({
			planet_name: ""
		}),
		created() {
			this.planet_name = this.$route.params.pName;
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h1 {
		position: absolute;
		left: 40%;
		top: 0px;
	}
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
	.wrapper {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.card {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			border-radius: 5px;
			max-width: 100%;
			width: 100%;
			& span > span:first-child {
				font-weight: 600;
			}
			color: black;
			text-decoration: unset;
			margin: 10px 24px;
		}
		span {
			padding-left: 14px;
		}
		.w-100 {
			width: 100%;
		}
	}
</style>
