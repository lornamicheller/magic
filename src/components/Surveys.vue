<template lang="pug">
	#Surveys
		#content
			.container
				//- .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
					| Los que hacen que sean Mágicos tus días
				.title2.animated.fadeInUp ENCUESTAS
				//- .title4.animated(data-animation='fadeInUp', data-animation-delay='300')
					| Lorem ipsum dolor sit
					| amet, concateur non troppo largo, vivache sustenuto, creschendo la prada diminuendo
					br
					| un bravo sonatina
					|                 perce pensare la duro niango rodo.
				br
				br
				br
				template(v-if="!loading")
					template(v-if="surveys.length != 0")
						.row
							.col-sm-4(v-for="(survey, index) in surveys")
								.artists1.clearfix(style="height: 187px;;",)
									figure
										img.img-responsive(:src='survey.foto._url', alt='')
									a.caption(v-on:click="showModal(survey, index)", style="cursor: pointer")
										.txt1 {{survey.descripcion}}
										.txt2 {{survey.titulo}}
					template(v-else)
						.row
							.col-sm-12.text-center
								h3 No hay encuestas en este momento para completar.
		.modal#surveyModal.animated.slideInDown
			.modal-dialog(role='document')
				.modal-content
					.modal-header
						button.close(type='button', data-dismiss='modal', aria-label='Close', v-on:click="cancel")
							span(aria-hidden='true') ×
						h5.modal-title {{selectedSurvey.titulo}}
					.modal-body
						template(v-if="!completed")
							.row(v-for="(question, index) in questions")
								.col-sm-12
									h4(style="font-size:20px") {{index+1}}. {{question.pregunta}}
									.row
										.col-xs-12.col-sm-6
											button.btn.btn-option.btn-block(:id="'q'+index+'o1'", value="opcion1", v-on:click="select('q'+index+'o1')") {{question.opcion1}}
										.col-xs-12.col-sm-6
											button.btn.btn-option.btn-block(:id="'q'+index+'o2'", value="opcion2", v-on:click="select('q'+index+'o2')") {{question.opcion2}}
						template(v-else)
							.row
								.col-sm-12
									p Gracias por completar la encuesta.

					.modal-footer
						template(v-if="!completed")
							button.btn.btn-default(type='button', data-dismiss='modal', v-on:click="cancel") Cancelar
							button.btn.btn-primary(type='button', data-dismiss='modal', v-on:click="submit") Someter
						template(v-else)
							button.btn.btn-default(type='button', data-dismiss='modal', v-on:click="cancel") Cerrar
							//- button.btn.btn-primary(type='button', data-dismiss='modal', v-on:click="submit") Someter
</template>
<script>
import Parse from 'parse'
export default {
	name: 'Surveys',
	data() {
		return {
			selectedSurvey: {},
			parseSelectedSurvey: {},
			surveys: [],
			parseSurveys: [],
			questions: [],
			parseQuestions: [],
			completedSurveys: [],
			user: null,
			completed: false,
			loading: true
		}
	},
	mounted() {
		this.user = Parse.User.current()
		// console.log(this.user)
		this.getSurveys()
		// this.getSex()
		this.initView()
	},
	methods: {
		getSurveys() {
			console.log('current user', Parse.User.current())
			var EncuestasCompletadas = Parse.Object.extend("EncuestasCompletadas")
			var query = new Parse.Query(EncuestasCompletadas)
			query.equalTo('user', this.user)
			query.find().then(res => {
				// console.log('completadas', res)
				res.forEach(ec => {
					this.completedSurveys.push(ec.get('encuesta').id)
					// console.log('completed', this.completedSurveys)
					
				});
			}).catch(err => {
				console.log(err)
			})

			var Encuestas = Parse.Object.extend("Encuestas")
			var query2 = new Parse.Query(Encuestas)

			if (this.user != null) {
				query2.find().then(res => {
					
					var parseUser = this.$session.get("parseUser");
					var age = this.getAge(parseUser.fechaDeNaci)
					res.forEach(e => {
					// console.log('genero', e.get('genero').id)
						var Generos = Parse.Object.extend('Generos')
						var query3 = new Parse.Query(Generos)

						query3.equalTo('objectId', e.get('genero').id)
						query3.first().then(_res => {
							// console.log(_res)						
							if (_res.get('genero').toLowerCase() == 'todos' || _res.get('genero').toLowerCase() == parseUser.genero.toLowerCase()) {
								// console.log('gen', e.get('genero'))
								// console.log('cumple edad', e.get('edadMin') <= age && e.get('edadMax') >= age)
								if (!this.completedSurveys.includes(e.id) && e.get('edadMin') <= age && e.get('edadMax') >= age) {
									this.parseSurveys.push(e)
									let sur = {}
									sur = Object.assign(sur, e.attributes)
									sur.id = e.id
									this.surveys.push(sur)
								}

							}
						}).catch(err => {
							console.log(err)
						})
					});
					this.loading = false
					// console.log('surveys', this.surveys)
				}).catch(err => {
					console.log(err)
				});
			} else {
				query2.find().then(res => {
					
					res.forEach(e => {
						this.parseSurveys.push(e)
						let sur = {}
						sur = Object.assign(sur, e.attributes)
						sur.id = e.id
						this.surveys.push(sur)
								
					});
					this.loading = false
					// console.log('surveys', this.surveys)
				}).catch(err => {
					console.log(err)
				});
			}
		},
		showModal(survey, index) { //shows confirmation modal
			if (!this.$session.exists()) {
				this.$router.push('/login')
				return
			}
			this.selectedSurvey = survey
			this.parseSurveys.forEach(ps => {
				if (ps.id == this.selectedSurvey.id) {
					this.parseSelectedSurvey = ps
					// console.log('showmodal', ps)

				} 
			})
			// console.log(this.user)
			// console.log('selected survey index', index)
			// console.log('selected survey', this.parseSurveys[index])
			this.getQuestions(this.parseSurveys[index])
			$('#surveyModal').modal('show');

		},
		cancel() {
			this.completed = false
			this.selectedSurvey = {}
			this.parseSelectedSurvey = {}
			this.questions = []
			this.parseQuestions = []
		},
		getQuestions(survey) {
			// console.log('get survey questions', survey)
			var Preguntas = Parse.Object.extend("Preguntas")
			var query = new Parse.Query(Preguntas)

			query.equalTo('encuesta', survey)
			query.find().then(res => {
				// console.log(res)
				this.parseQuestions = res
				res.forEach(p => {
					let ques = {}
					ques = Object.assign(ques, p.attributes)
					ques.id = p.id
					this.questions.push(ques)
				});
				// console.log('questions', this.questions)
			})
		},
		select(id) {
			// console.log('select event', (id))
			$(`[id^=${id.substring(0,2)}]`).each((i, el) => {
				// console.log(el)
				$('#'+el.id).removeClass('btn-selected')
			})
			$('#'+id).addClass('btn-selected')
		}, 
		submit() {
			var sex = this.getSex()
			// console.log($('.btn-selected')[0])
			// var options = $('.btn-selected')
			// console.log(options)
			// options.each((i, o) => {
			// 	var question = this.parseQuestions[+o.id.substring(1,2)]
			// 	// console.log(this.answers)
			// 	this.insertAnswers(question, o.value)
			// 	this.incrementQuestionCounters(sex, +o.id.substring(1,2))
				
			// });

			// this.incrementSurveyCounters(sex)
			// this.saveCompletedSurvey()

		},
		insertAnswers(question, option) {
			var Contestaciones = Parse.Object.extend("Contestaciones")
			// console.log('class', Contestaciones)
			var contestaciones = new Contestaciones()

			// console.log(this.$session.get("parseUser"))
			var parseUser = this.$session.get("parseUser");
			var age = this.getAge(parseUser.fechaDeNaci)
			contestaciones.set("user", this.user)
			contestaciones.set("edad", age),
			contestaciones.set("pregunta", question)
			contestaciones.set("opcion1", option == 'opcion1')
			contestaciones.set("opcion2", option == 'opcion2')
			
			contestaciones.save().then(res => {
				console.log(res)
				// self.isInCart = true
				// $('#surveyModal').modal('toggle');
				// self.$emit('cartUpdated', cart);
				// self.getCart()
			}).catch(err => {
				console.log(err)
			})

			// console.log('contestaciones', contestaciones)
			

		}, 
		getSex() {
			var Generos = Parse.Object.extend("Generos")
			var query = new Parse.Query(Generos)

			query.equalTo('objectId', this.user.get('genero').id)
			query.first().then(res => {
				let sex = res.get("genero")
				// console.log('fucking sexo', sex)
				
				// console.log($('.btn-selected')[0])
				var options = $('.btn-selected')
				// console.log(options)
				options.each((i, o) => {
					var question = this.parseQuestions[+o.id.substring(1,2)]
					// console.log(this.answers)
					this.insertAnswers(question, o.value)
					this.incrementQuestionCounters(sex, +o.id.substring(1,2))
					
				});

				this.incrementSurveyCounters(sex)
				this.saveCompletedSurvey()
				
				return sex
			}).catch(err => {
				console.log(err)
			})

		},
		incrementQuestionCounters(sex, questionIndex) {
			// console.log('question index', questionIndex)
			if (sex.toUpperCase() == 'M') { 
				// console.log('previous', this.parseQuestions[questionIndex].get('M'))
				// let mCounter = this.parseQuestions[questionIndex].get('M')
				this.parseQuestions[questionIndex].increment('M', 1) 
				this.parseQuestions[questionIndex].save().then(res => {
					// console.log('incremented question', res)
				}).catch(err => {
					console.log(err)
				})
				
				// console.log('current', this.parseQuestions[questionIndex].get('M'))
			}
			else if (sex.toUpperCase() == 'F') { 
				// console.log('previous', this.parseQuestions[questionIndex].get('F'))
				// let mCounter = this.parseQuestions[questionIndex].get('F')
				this.parseQuestions[questionIndex].increment('F', 1) 
				// console.log('current', this.parseQuestions[questionIndex].get('F'))
			}
		},
		incrementSurveyCounters(sex) {
			let i = 0
			this.parseSurveys.forEach(s => {
				if (s.objectId == this.selectedSurvey.objectId) {
					// console.log('increment survey', s)
					if (sex.toUpperCase() == 'M') { 
						// console.log('previous', this.parseQuestions[questionIndex].get('M'))
						// let mCounter = s.get('M')
						s.increment('M', 1) 
						s.save().then(res => {
							// console.log('incremented survey', res)
						}).catch(err => {
							console.log(err)
						})
						// console.log('current', this.parseQuestions[questionIndex].get('M'))
					}
					else if (sex.toUpperCase() == 'F') { 
						// console.log('previous', this.parseQuestions[questionIndex].get('F'))
						// let mCounter = s.get('F')
						s.increment('F', 1) 
						s.save().then(res => {
							// console.log('incremented survey', res)
						}).catch(err => {
							console.log(err)
						})
						// console.log('current', this.parseQuestions[questionIndex].get('F'))
					}
				}

			})

			
		},
		saveCompletedSurvey() {
			var EncuestasCompletadas = Parse.Object.extend("EncuestasCompletadas")
			var completadas = new EncuestasCompletadas()

			completadas.set('user', this.user)
			completadas.set('encuesta', this.parseSelectedSurvey)

			completadas.save().then(res => {
				// console.log('completed', res)
				this.surveys = []
				this.getSurveys()
				this.cancel() //clears all variables
				// let i = 0
				// let found = false
				// this.surveys.forEach(s => {
				// 	if(s.id == this.parseSelectedSurvey.objectId) {
				// 		found = true
				// 		return	
				// 	}
				// 	i++
				// })
				// if (found) this.surveys.splice(i,1)
			}).catch(err => {
				console.log(err)
			})
		},
		getAge(dob) {
			var birthday = new Date(dob.iso)
			var ageDifMs = Date.now() - birthday.getTime();
			var ageDate = new Date(ageDifMs); // miliseconds from epoch
			return +Math.abs(ageDate.getUTCFullYear() - 1970);
		},
		initView() {
			/*----------------------------------------------------*/
			// Appear
			/*----------------------------------------------------*/
			$('.animated').appear(function() {
				// console.log("111111111111");
				var elem = $(this);
				var animation = elem.data('animation');
				if ( !elem.hasClass('visible') ) {
					var animationDelay = elem.data('animation-delay');
					if ( animationDelay ) {
						setTimeout(function(){
							elem.addClass( animation + " visible" );
						}, animationDelay);
					} else {
						elem.addClass( animation + " visible" );
					}
				}
			});
		}
	}
}
</script>
