<template lang="pug">
    #Contest
        #content
            .container
                //- .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Los que hacen que sean Mágicos tus días
                //- .title2.animated(data-animation='fadeInUp', data-animation-delay='200') CONCURSO
                .title2 CONCURSO
                //- .kand1.animated(data-animation='fadeInUp', data-animation-delay='200')
                .kand1
                br
                .row(v-show="incorrectKey")
                    .col-sm-12.text-center
                        p(style="color: red;") La clave que entró es inválida
                .row
                    .col-sm-10.col-sm-offset-1
                        //- p.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo fermentum diam nec suscipit. Sed a neque lorem. Sed purus risus, mollis et nisi at, ullamcorper placerat metus. Nulla commodo risus in metus semper, at sodales diam ultrices. Proin a ipsum quis elit volutpat iaculis. Maecenas feugiat, dolor at faucibus eleifend, metus erat eleifend sem, quis imperdiet massa metus vel lacus.
                br
                #fields.row(v-if="contest != null")
                    .col-xs-6.col-sm-8.col-md-4.col-xs-offset-3.col-sm-offset-2.col-md-offset-2( style="text-align: center")
                        img.img-responsive(:src="contest.get('foto')._url")
                        br
                        //- a(target="_blank", href="http://magic973.com/es/files/reglasweekend.pdf", v-if="$route.params.id == 'ltMSoSyBHD'") Reglas del Concurso
                        a(target="_blank", href="http://magic973.com/es/files/superdad.pdf", v-if="$route.params.id == 'YGCvnYmUEj'") Reglas del Concurso
                        //- a.btn.btn-primary(v-if="$route.params.id == 'EwcvEbh8qk'", href="/es/static/images/magicmom.png", download="yosoyunamagicmom.png" style="margin-left: 5px;") Descargar Imagen
                    template(v-if="submitted")
                        .col-xs-8.col-sm-8.col-md-4.col-xs-offset-2.col-md-offset-0
                            .alert.alert-success
                                strong Sometido
                                br
                                | Su entrada al concurso ha sido sometida exitosamente.
                            //- a.btn.btn-block.btn-primary(v-if="$route.params.id == 'EyyIxGCAWb'", href="/es/static/images/yosoyunamagicmom.jpg", download="yosoyunamagicmom.jpg") Descargar Imagen
                            //- a.btn.btn-primary(v-if="$route.params.id == 'EyyIxGCAWb'", href="http://magic973.com/es/files/Reglas-TaxRelief-2018.doc.pdf" download="yosoyunamagicmom.jpg") Descargar Imagen
                            //- form(method="get" action="http://magic973.com/es/files/Reglas-TaxRelief-2018.doc.pdf")
                                button(type="submit") Reglas del Concurso
                    template(v-else)
                        template(v-if="$route.params.id == 'YGCvnYmUEj'")
                            .col-xs-8.col-sm-8.col-md-4.col-xs-offset-2.col-md-offset-0
                                #ajax-contact-form.form-horizontal(action="javascript:alert('success!');")
                                    //- .form-group
                                    //-     label(for='inputName')
                                    //-     input#inputName.form-control(type='text', name='name', value='Full Name', onblur="if(this.value=='') this.value='Full Name'", onfocus="if(this.value =='Full Name' ) this.value=''")
                                    //- .form-group
                                    //-     label Ingresa la clave del día
                                    //-     input.form-control(type="text", v-model="key", placeholder='Ingresa la clave del día')
                                    //-     span#key-error.hidden Clave es requerida
                                    .form-group
                                        label Nombre
                                        input.form-control(type='text', v-model="name", placeholder='Nombre')
                                        span#name-error.hidden Nombre es requerido
                                    .form-group
                                        label Correo Electrónico
                                        input.form-control(type='email', v-model="email", placeholder='Correo Electrónico')
                                        span#email-error.hidden Correo Electrónico es requerido
                                    .form-group
                                        label Teléfono
                                        input.form-control(type='text', v-model="phone", onkeypress='return event.charCode >= 48 && event.charCode <= 57', placeholder='Teléfono', maxlength="10")
                                        span#phone-error.hidden Teléfono es requerido
                                    .form-group
                                        label Dirección
                                        textarea.form-control(type='address', v-model="address", placeholder='Dirección')
                                        span#address-error.hidden Dirección es requerida
                                    .form-group
                                        label Nombre de Artista
                                        input.form-control(type='text', v-model="clave", placeholder='Nombre de Artista')
                                    br
                                    //- .form-group(v-if="parseFile")
                                        | File: {{ parseFile._name }}
                                    //- .form-group
                                        label.btn.btn-primary(style="display: block; color: #fff") Upload Document
                                            input.hidden(type="file", hidden, @change="onFileChange")
                                vue-ladda.btn-default.btn-cf-submit.pull-right(v-on:click='submit', data-style="expand-right", :loading="submitting") Participar
                        //- template(v-else)
                        //-   .col-xs-8.col-sm-8.col-md-4.col-xs-offset-2.col-md-offset-0
                        //-         #ajax-contact-form.form-horizontal(action="javascript:alert('success!');")
                        //-             .form-group
                        //-                 label Nombre
                        //-                 input.form-control(type='text', v-model="name", placeholder='Nombre')
                        //-                 span#name-error.hidden Nombre es requerido
                        //-             .form-group
                        //-                 label Correo Electrónico
                        //-                 input.form-control(type='email', v-model="email", placeholder='Correo Electrónico')
                        //-                 span#email-error.hidden Correo Electrónico es requerido
                        //-             .form-group
                        //-                 label Teléfono
                        //-                 input.form-control(type='text', v-model="phone", onkeypress='return event.charCode >= 48 && event.charCode <= 57', placeholder='Teléfono', maxlength="10")
                        //-                 span#phone-error.hidden Teléfono es requerido
                        //-             .form-group
                        //-                 label Dirección
                        //-                 textarea.form-control(type='address', v-model="address", placeholder='Dirección')
                        //-                 span#address-error.hidden Teléfono es requerido
                        //-             //- span#pass-error.hidden Contraseña debe contener al menos 8 caracteres
                        //-         //- .form-group
                        //-             label(for='inputConfirmPassword') Confirmar Contraseña
                        //-             input#inputConfirmPassword.form-control(type='password', v-model="confirmPassword", placeholder='Confirmar Contraseña')
                        //-             span#confirm-pass-error.hidden Contraseña debe contener al menos 8 caracteres
                        //-         //- .form-group
                        //-             label(for='inputDoB') Fecha de Nacimiento
                        //-             input#inputPassword.form-control(type='date', v-model="regUser.dob", placeholder='Fecha de Nacimiento')
                        //-             span#dob-error.hidden Fecha de Nacimiento es requerida
                        //-         //- .radio
                        //-             label(style="margin-right: 20px")
                        //-                 input(type='radio', name='male', v-model="regUser.sex", :value="male")
                        //-                 | Masculino
                        //-             label
                        //-                 input(type='radio', name='female', v-model="regUser.sex", :value="female")
                        //-                 |   Femenino
                        //-             br
                        //-             span#sex-error.hidden Genero es requerido
                        //-         vue-ladda.btn-default.btn-cf-submit.pull-right(v-on:click='submit', data-style="expand-right", :loading="submitting") Participar
</template>
<script>
import Parse from 'parse'
export default {
  name: "Contest",
  data() {
    return {
      // key: '',
      name: null,
      email: null,
      phone: null,
      address: null,
      submitting: false,
      contest: null,
      submitted: false,
      respuestaCanción: null,
      clave: null,
      day: new Date().getDate(),
      // incorrectKey: false,
      // contestKey: null,
      parseFile: null
    };
  },
  mounted() {
    this.initView();
    this.getContest();
    // this.getContestKey()
  },
  methods: {
    initView() {
      /*----------------------------------------------------*/
      // Appear
      /*----------------------------------------------------*/
      $(".animated").appear(function() {
        // console.log("111111111111");
        var elem = $(this);
        var animation = elem.data("animation");
        if (!elem.hasClass("visible")) {
          var animationDelay = elem.data("animation-delay");
          if (animationDelay) {
            setTimeout(function() {
              elem.addClass(animation + " visidfble");
            }, animationDelay);
          } else {
            elem.addClass(animation + " visible");
          }
        }
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log("##FILE", files[0]);
      this.parseFile = new Parse.File(files[0].name, files[0]);
    },
    submit() {
      // if (this.isFormInvalid()) return;

      this.submitting = true;

      var EntradaConcurso = Parse.Object.extend("EntradaConcurso");

      var entrada = new EntradaConcurso();
      // this.parseFile.save()
      // entrada.set('clave', this.key)
      entrada.set("nombre", this.name);
      entrada.set("telefono", this.phone);
      entrada.set("email", this.email);
      entrada.set("direccion", this.address);
      entrada.set("concurso", this.contest);
      entrada.set("clave", this.clave);
      // entrada.set('archivo', this.parseFile)
      entrada.save().then(res => {
        // console.log('entrada', res)
        this.submitting = false;
        this.submitted = true;
      });
    },
    // getContestKey() {
    //     var Claves = Parse.Object.extend("Claves")
    //     var query = new Parse.Query(Claves)

    //     query.equalTo('dia', this.day)
    //     query.first().then(res => {
    //         // console.log('clave', res)
    //         this.contestKey = res
    //     }).catch(err => console.log(err))
    // },
    getContest() {
      // console.log(this.$route.params.id)
      let contestId = this.$route.params.id;

      var Concurso = Parse.Object.extend("Concurso");

      var query = new Parse.Query(Concurso);

      query.equalTo("objectId", contestId);
      query.first().then(res => {
        // console.log('contest', res)
        this.contest = res;
      });
    },
    isFormInvalid() {
      var hasError = false;

      if (this.email == null || this.email.length == 0) {
        $("#email-error").removeClass("hidden");
        $("#email-error").text("Correo Electrónico es requerido");
        hasError = true;
      } else if (!this.isValidEmail()) {
        $("#email-error").removeClass("hidden");
        $("#email-error").text("Correo Electrónico inválido");
        hasError = true;
      } else {
        $("#email-error").addClass("hidden");
      }

      // if (this.key == null || this.key.length == 0) {
      // 	$('#key-error').removeClass('hidden');
      // 	hasError = true;
      // } else {
      // 	$('#key-error').addClass('hidden');
      //       }
      if (this.name == null || this.name.length == 0) {
        $("#name-error").removeClass("hidden");
        hasError = true;
      } else {
        $("#name-error").addClass("hidden");
      }
      if (this.phone == null || this.phone.length == 0) {
        $("#phone-error").removeClass("hidden");
        hasError = true;
      } else {
        $("#phone-error").addClass("hidden");
      }
      if (this.address == null || this.address.length == 0) {
        $("#address-error").removeClass("hidden");
        hasError = true;
      } else {
        $("#address-error").addClass("hidden");
      }

      // if (this.contestKey == null || (this.contestKey.get('clave').toLowerCase().trim() != this.key.toLowerCase().trim()))  {
      //     this.incorrectKey = true
      //     hasError = true
      // } else {
      //     this.incorrectKey = false
      // }

      return hasError;
    },
    isValidEmail: function() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    }
  }
};
</script>
<style>
#key-error,
#name-error,
#email-error,
#phone-error,
#address-error {
  color: red;
}
</style>
