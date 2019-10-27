<template>
	<div id="app">
		<transition name="moveInUp">
			<router-view :planets="planets" />
		</transition>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "app",
		data: () => ({
			planets: []
		}),
		mounted() {
			axios
				.get("https://swapi.co/api/planets/")
				.then(response => {
					this.planets = response.data.results;
				})
				.catch(function(error) {
					console.log(error);
				});
		}
	};
</script>

<style lang="scss">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		.moveInUp-enter-active {
			opacity: 0;
			transition: opacity 1s ease-in;
		}
		.moveInUp-enter-active {
			animation: fadeIn 1s ease-in;
		}
		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			50% {
				opacity: 0.5;
			}
			100% {
				opacity: 1;
			}
		}
	}
</style>
