<template lang="pug">
    #SignUp
        #content
            .container
                //- .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Los que hacen que sean Mágicos tus días
                .title2.animated(data-animation='fadeInUp', data-animation-delay='200') REGISTRO
                .kand1.animated(data-animation='fadeInUp', data-animation-delay='200')
                br
                .row(v-show="signUpError") 
                    .col-sm-12.text-center
                        p(style="color: red;") Correo Electrónico o Contraseña inválida
                template(v-if="!completed")
                    #fields.row
                        .col-xs-10.col-sm-8.col-md-6.col-xs-offset-1.col-sm-offset-2.col-md-offset-3
                            #ajax-contact-form.form-horizontal(action="javascript:alert('success!');")
                                //- .form-group
                                    label(for='inputName') 
                                    input#inputName.form-control(type='text', name='name', value='Full Name', onblur="if(this.value=='') this.value='Full Name'", onfocus="if(this.value =='Full Name' ) this.value=''")
                                .form-group
                                    label(for='inputEmail') Correo Electrónico
                                    input#inputEmail.form-control(v-model="regUser.username", placeholder='Correo Electrónico')
                                    span#email-error.hidden Correo Electrónico es requerido
                                .form-group
                                    label(for='inputPassword') Contraseña
                                    input#inputPassword.form-control(type='password', v-model="regUser.password", placeholder='Contraseña')
                                    span#pass-error.hidden Contraseña debe contener al menos 8 caracteres
                                .form-group
                                    label(for='inputConfirmPassword') Confirmar Contraseña
                                    input#inputConfirmPassword.form-control(type='password', v-model="confirmPassword", placeholder='Confirmar Contraseña')
                                    span#confirm-pass-error.hidden Confirmación de Contraseña debe contener al menos 8 caracteres
                                .form-group
                                    label(for='inputDoB') Fecha de Nacimiento
                                    input#inputPassword.form-control(type='date', v-model="regUser.dob", placeholder='Fecha de Nacimiento')
                                    span#dob-error.hidden Fecha de Nacimiento es requerida
                                .radio
                                    label(style="margin-right: 20px")
                                        input(type='radio', name='male', v-model="regUser.sex", :value="male")
                                        | Masculino  
                                    label
                                        input(type='radio', name='female', v-model="regUser.sex", :value="female")
                                        |   Femenino
                                    br
                                    span#sex-error.hidden Genero es requerido

                                
                                //- .row
                                    .col-sm-12
                                        .form-group
                                            label(for='inputMessage') Your Message
                                            textarea#inputMessage.form-control(rows='5', name='content', onblur="if(this.value=='') this.value='Message'", onfocus="if(this.value =='Message' ) this.value=''") Message
                                vue-ladda.btn-default.btn-cf-submit.pull-right(v-on:click='signUp', data-style="expand-right", :loading="signingUp") Crear Cuenta
                template(v-else)
                    .row
                        .col-xs-10.col-sm-8.col-md-6.col-xs-offset-1.col-sm-offset-2.col-md-offset-3
                            .alert.alert-success 
                                strong Completado
                                br
                                | Su registro ha sido completado exitosamente.
</template>
<script>
import Parse from 'parse'
export default {
    name: 'SignUp',
    data() {
        return {
            regUser: {
                username: null,
                password: null,
                dob: null,
                sex: null
            },
            confirmPassword: null,
            signingUp: false,
            signUpError: false,
            sexes: null,
            male: null,
            female: null,
            completed: false
        }
    },
    mounted() {
        this.getSex()
    },
    methods: {
        signUp() {
            this.signingUp = true
            if (this.isSignUpFormInvalid()) {
                this.signingUp = false
                return;

            } 
            console.log(this.regUser.username, this.regUser.password, this.confirmPassword, this.regUser.dob, this.regUser.sex)
            this.signingUp = false
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
        },
        signUp: function() {
			if (this.isSignUpFormInvalid()) {
                this.signingUp = false
                return;
            } 

			this.regUser.email = this.regUser.username
			var user = new Parse.User();
			var _user = {
					username: this.regUser.username,
					email: this.regUser.username,
					password: this.regUser.password,
					fechaDeNaci: new Date(this.regUser.dob),
					genero: this.regUser.sex
            	}

            this.signingUp = true            
            user.save(_user).then(res => {
                console.log(res)
                this.signingUp = false
                this.completed = true
                
            }).catch(err => {
                console.log(err)
            })
            
			// this.user.save(this.regUser,
			// 	{
			// 		success: function(response) {
			// 			console.log(response);
			// 			// $('#ws-register-modal').modal('toggle');
			// 		},
			// 		error: function(response, error) {
			// 			console.log('Error: ', error)
			// 			if (error.code == 202) {
			// 				$('.alert-danger').removeClass('hidden')
			// 			}
			// 		}
			// 	}
			// )
		},
        isValidEmail: function() {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		return re.test(String(this.regUser.username).toLowerCase());
		},
		isSignUpFormInvalid: function() {
			var hasError = false

			if (this.regUser.username == null || this.regUser.username.length == 0) {
                $('#email-error').removeClass('hidden');
                $('#email-error').text('Correo Electrónico es requerido')
				hasError = true;
			} else if (!this.isValidEmail()) {
                $('#email-error').removeClass('hidden');
                $('#email-error').text('Correo Electrónico inválido')
				hasError = true;
			} else {
				$('#email-error').addClass('hidden');
			}

			if (this.regUser.password == null || this.regUser.password.length < 8) {
				$('#pass-error').removeClass('hidden');
				hasError = true;
			} else {
				$('#pass-error').addClass('hidden');
            }
            
			if (this.confirmPassword == null || this.confirmPassword.length < 8) {
				$('#confirm-pass-error').removeClass('hidden');
				hasError = true;
			} else {
				$('#confirm-pass-error').addClass('hidden');
            }
            
			if (this.regUser.dob == null || this.regUser.dob.length == 0) {
				$('#dob-error').removeClass('hidden');
				hasError = true;
			} else {
				$('#dob-error').addClass('hidden');
				
            }
            
			if (this.regUser.sex == null || this.regUser.sex.length == 0) {
				$('#sex-error').removeClass('hidden');
				hasError = true;
			} else {
				$('#sex-error').addClass('hidden');
				
			}
			// // if (!this.name || !this.email)
			// if (!this.acceptedTerms) {
			// 	// alert("Favor aceptar los Términos de Servicio");
			// 	$('#error').removeClass('hidden');
			// 	hasError = true;
			// } else {
			// 	$('#error').addClass('hidden');
				
			// }
			return hasError;
        }, 
        getSex() {
            var Generos = Parse.Object.extend("Generos")
            var query = new Parse.Query(Generos)

            query.find().then(res => {
                this.sexes = res
                console.log('sexes', this.sexes)

                this.sexes.forEach(s => {
                    if (s.get('genero') == 'M') this.male = s
                    if (s.get('genero') == 'F') this.female = s
                })
            }).catch(err => console.log(err))
        }
    }
}
</script>
<style>
#error, #pass-error, #email-error, #dob-error, #sex-error, #confirm-pass-error {
    color: red;
}
</style>
