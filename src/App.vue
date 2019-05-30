<template lang="pug">
	#app
		//- img(src="./assets/logo.png")
		Slider(v-if="show", @showChanged='show = $event', :show="show")
		//- div(style="position: fixed; bottom:0px; width: 100%; height: 77px; background-color: #333;")
		RadioPlayer(style="position: fixed; bottom:0px; width: 100%; height: auto; background-color: #333; z-index: 99")
		Header(:isLoggedIn="isLoggedIn", @loggedChanged="isLoggedIn = $event")
		router-view(:isLoggedIn="isLoggedIn", @loggedChanged="isLoggedIn = $event")
		Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
import RadioPlayer from '@/components/RadioPlayer'
import Parse from 'parse'
export default {
	name: 'App',
	components: {
		Header,
		RadioPlayer,
		Slider,
		Footer,
	},
	watch:{
		$route (to, from){
			// console.log('to', to, 'from', from)
			if (to.path.toLowerCase() == '/') {
				this.show = true;
				// this.initSlider(true)
			}
			else this.show = false;
		}
	},
	data() {
		return {
			show: false,
			isLoggedIn: Parse.User.current() != null,
			// isLoggedIn: this.$session.exists(),
			loggedUser: this.$session.get('user'),
		}
	},
	mounted() {
		console.log('user: ', Parse.User.current())
		if (this.$route.path.toLowerCase() == '/') this.show = true
		else this.show = false
	},
	methods: {
		// initSlider(show) {
		// 	this.show = show
		// 	if (!show) return
		// 	/*---------------------------------------------------*/
		// 	// Camera slideshow
		// 	/*----------------------------------------------------*/
		// 	var oa = $('#camera_wrap');
		// 	if (oa.length > 0) {
		// 		oa.camera({
		// 			//thumbnails: true
		// 			alignment     : 'centerTop',
		// 			autoAdvance     : true,
		// 			mobileAutoAdvance : true,
		// 			// fx          : 'scrollRight',
		// 			height: '51%',
		// 			hover: false,
		// 			loader: 'none',
		// 			navigation: false,
		// 			navigationHover: false,
		// 			mobileNavHover: false,
		// 			playPause: false,
		// 			pauseOnClick: false,
		// 			pagination      : true,
		// 			time: 5000,
		// 			transPeriod: 1000,
		// 			minHeight: '300px'
		// 		});
		// 	}
		// }
	}
}
</script>

<style>
#app {
	/* font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50; */
}
</style>
