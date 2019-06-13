<template lang="pug">
    #home
        .logo3_wrapper.hidden-xs.hidden-sm
            a.logo3.scroll-to(href='#home')
                img.img-responsive(src='../assets/images/app_logo_w.png', :style="{ width: '150px' }", alt='')
        //- .add1.add2.clearfix
            .icon-search
                a(href='#')
            .dropdown.dropdown1
                button#dropdownMenu1.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='true')
                    | EN
                ul.dropdown-menu(aria-labelledby='dropdownMenu1')
                    li
                        a(href='javascript:void(0);') FR
                    li
                        a(href='javascript:void(0);') DE
                    li
                        a(href='javascript:void(0);') ES
        #slider_wrapper
            .go-down
                a.scroll-to(href='#featured')
            div
                #slider_inner.clearfix
                    #slider.clearfix
                        #camera_wrap
                            div(data-src='/es/static/images/tripmagic.jpg')
                            div(data-src='/es/static/images/superdad.jpg')
                            div(data-src='/es/static/images/moneyclub.jpg')
                            //- div(data-src='/es/static/images/slide05.jpg')
                            //- test
                            //- div(data-src='/magic/static/img/slide03.jpg')
                            //- local
                            //- div(data-src='/static/images/slide03.jpg')
                            //- prod
                            //- div(data-src='/es/static/images/slide03.jpg')
                                //- .camera_caption.fadeFromLeft.nav1
                                    .txt1.txt Magic
                                    .txt2.txt te Paga
                                    .txt3.txt La Planilla
                                    //- .txt4 06:00 - 24:00
                                    //- .txt5
                                    br
                                    router-link.btn-default.btn0(:to="{ name: 'Contest', params: { id: 'qcIl5NFxzM' }}") Clic Para Participar
                            //- test
                            //- div(data-src='/magic/static/img/slide01.jpg')
                            //- local
                            //- div(data-src='/static/images/slide01.jpg')
                            //- prod
                            //- div(data-src='/es/static/img/slide01.jpg')
                            //-     .camera_caption.fadeFromLeft.nav1
                            //-         .txt1.txt Lleva tu
                            //-         .txt2.txt Música a
                            //-         .txt3.txt donde Quieras
                            //-         //- .txt4 06:00 - 24:00
                            //-         br
                            //-         router-link.btn-default.btn0(to="/magicapp") Descarga el App
                            //- test
                            //- div(data-src='/es/static/images/santa.jpg')
                            //- local
                            //- div(data-src='/es/static/images/vip.jpg')
                            //- prod
                            div(data-src='/es/static/images/slide02.jpg')
                                .camera_caption.fadeFromRight.nav1
                                    .txt1.txt Tu
                                    .txt2.txt Vida En
                                    .txt3.txt Música
                                
</template>
<script>
import Parse from 'parse'
export default {
  name: "Slider",
  props: ["show"],
  watch: {
    show(current, old) {
      if (current) {
        console.log("slider watcher", current);
        this.initSlider();
      }
    },
  },
  mounted() {
    if (this.$route.path.toLowerCase() == "/") {
      this.$emit("showChanged", true);
    }
    this.initSlider();
    this.getConcursos();
  },
  methods: {
    initSlider() {
      /*---------------------------------------------------*/
      // Camera slideshow
      /*----------------------------------------------------*/
      var oa = $("#camera_wrap");
      if (oa.length > 0) {
        oa.camera({
          //thumbnails: true
          alignment: "centerTop",
          autoAdvance: true,
          mobileAutoAdvance: true,
          // fx          : 'scrollRight',
          height: "51%",
          hover: false,
          loader: "none",
          navigation: false,
          navigationHover: false,
          mobileNavHover: false,
          playPause: false,
          pauseOnClick: false,
          pagination: true,
          time: 5000,
          transPeriod: 1000,
          minHeight: "300px"
        });
      }
    },
    getConcursos() {
            var Concurso = Parse.Object.extend("Concurso")
            var query = new Parse.Query(Concurso)
            var self = this;
            query.find().then(res => {
                this.concursos = res
                console.log("Concurso" + this.concursos)
            }).catch(err => {
                    console.log(err)
                })
        }
  }
};
</script>
<style>
/* html {
    max-width: 100%;
    overflow-x: hidden;
} */
</style>
