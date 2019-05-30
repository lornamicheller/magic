import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MobileApp from '@/components/MobileApp'
import Djs from '@/components/Djs'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Videos from '@/components/Videos'
import Surveys from '@/components/Surveys'
import Contest from '@/components/Contest'
import Advertisement from '@/components/Advertisement'
import BirthdayClub from '@/components/BirthdayClub'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/magicapp',
			name: 'MobileApp',
			component: MobileApp
		},
		{
			path: '/magicdjs',
			name: 'Djs',
			component: Djs
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/registro',
			name: 'SignUp',
			component: SignUp
		},
		{
			path: '/videos',
			name: 'Videos',
			component: Videos
		},
		{
			path: '/encuestas',
			name: 'Surveys',
			component: Surveys
		},
		{
			path: '/concurso/:id',
			name: 'Contest',
			component: Contest
		},
		{
			path: '/birthdayclub',
			name: 'BirthdayClub',
			component: BirthdayClub
		},
		{
			path: '/anunciate',
			name: 'Advertisement',
			component: Advertisement
		}
	
	]
})
