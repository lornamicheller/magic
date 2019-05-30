<template lang="pug">
    #Login
        #content
            .container
                //- .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Los que hacen que sean Mágicos tus días
                .title2.animated(data-animation='fadeInUp', data-animation-delay='200') INICIAR SESIÓN
                .kand1.animated(data-animation='fadeInUp', data-animation-delay='200')
                br
                .row(v-show="loginError") 
                    .col-sm-12.text-center
                        p(style="color: red;") Correo Electrónico o Contraseña inválida
                #fields.row
                    .col-xs-10.col-sm-8.col-md-6.col-xs-offset-1.col-sm-offset-2.col-md-offset-3
                        #ajax-contact-form.form-horizontal(action="javascript:alert('success!');")
                            //- .form-group
                                label(for='inputName') 
                                input#inputName.form-control(type='text', name='name', value='Full Name', onblur="if(this.value=='') this.value='Full Name'", onfocus="if(this.value =='Full Name' ) this.value=''")
                            .form-group
                                label(for='inputEmail') Correo Electrónico
                                input#inputEmail.form-control(v-model="username", placeholder='Correo Electrónico')
                                span#email-error.hidden Correo Electrónico es requerido
                            .form-group
                                label(for='inputPassword') Contraseña
                                input#inputPassword.form-control(type='password', v-model="password", placeholder='Contraseña')
                                span#pass-error.hidden Contraseña es requerida
                            //- .row
                                .col-sm-12
                                    .form-group
                                        label(for='inputMessage') Your Message
                                        textarea#inputMessage.form-control(rows='5', name='content', onblur="if(this.value=='') this.value='Message'", onfocus="if(this.value =='Message' ) this.value=''") Message
                            vue-ladda.btn-default.btn-cf-submit.pull-right(v-on:click='login', data-style="expand-right", :loading="logginIn") Iniciar Sesión
                            router-link(to="/registro", style="text-decoration: none") Crear Cuenta
</template>
<script>
import Parse from 'parse'
export default {
    name: 'Login',
    props: ['isLoggedIn'],
    data() {
        return {
            username: null,
            password: null,
            logginIn: false,
            loginError: false,
            sessionUser: {}
        }
    },
    beforeCreate: function() {
        if (this.$session.exists()) this.$router.push('/') //if the user is not logged in, redirect to root
    },
    mounted() {
        this.initView()
    },
    methods: {
        login() {
            var hasError = false
            //Validates the form
            if (this.username == null || this.username.length == 0) {
                $('#email-error').removeClass('hidden')
                hasError = true
            } else {
                $('#email-error').addClass('hidden')
            }

            if (this.password == null || this.password.lengh == 0) {
                $('#pass-error').removeClass('hidden')
                hasError = true
            } else {
                $('#pass-error').addClass('hidden')
            }

            if (hasError) return
            
            this.logginIn = true //starts ladda loader
			Parse.User.logIn(this.username, this.password).then(res => {
                this.loginError = false
                this.sessionUser = res 
                this.$session.start() //sets up a session
				this.$session.set('sessionToken', this.sessionUser.getSessionToken()) //saves parse session token into vue session
				// console.log('user attributes', this.sessionUser) 
				// let user = {}
				// user = Object.assign(user, this.sessionUser.attributes) //copies parse user info into a new object, this is to access them without having to use the 'get' function
				// user.id = this.sessionUser.id
                // this.$session.set('user', user) //saves user to vue session
                
                console.log('login',res)
                this.$session.set('parseUser', res)
                // this.$session.set('currentUser', this.sessionUser)
                this.logginIn = false //stops ladda loader
				this.$router.push('/')
                this.$emit('loggedChanged', true); //emits a signal to the parent component to change UI components to a logged state
                
			}).catch(err => {
                console.log(err)
                this.logginIn = false //stops the ladda loader
                this.loginError = true //show error message
            })
            console.log("username", this.username, "password", this.password)
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
    },

}
</script>
