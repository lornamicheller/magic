<template lang="pug">
    #Home
        #collection2(style="padding-top: 60px !important")
            .container    
                .title2.animated(data-animation="fadeInUp")
                    | CONCURSOS
                    .kand1.animated(data-animation='fadeInUp', data-animation-delay='200')
                    //- | COLLECTION
                //- .title3.animated.fadeInUp
                    | Lorem ipsum dolor sit amet
                    | concateur non tropp sit namo, allegro sustenuto al prada bravo pensare, chicco milo naturo
                    br
                    | el spresso
                    |                 concateur non value maro noro strata. notn troppo.
                br
                br
                //- .row(style="margin-bottom: 35px")
                //-     //- (v-for="(concurso, index) in concursos", style="margin-bottom: 35px")
                //-     .col-sm-6
                //-         //- .animated(data-animation='fadeInLeft', data-animation-delay='200')
                //-         //- a(target="_blank", :href="concurso.get('link')")
                //-         //- router-link.btn-default.btn2(:to="{ name: 'Contest', params: { id: concurso.id }}")
                //-         img.img-responsive.disk1-img(src="../assets/images/magic_birthday_club.png", alt='')
                //-     .col-sm-5.col-sm-offset-1
                //-         //- .animated(data-animation='fadeInRight', data-animation-delay='200')
                //-         .disk1
                //-             //- .txt1
                //-                 span Created
                //-                 |   |  By: John Coltrain
                //-             .txt2
                //-                 | Magic Birthday Club
                //-             br
                //-                 //- ( 
                //-                 //- span 1 CD
                //-                 //- |  )
                //-             //- .txt3
                //-                 | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elementum
                //-                 | felis, a semper orci. Nam id odio vel nulla vestibulum gravida. Sed ex sem. vestibulum urna
                //-                 | magna. Suspendisse isis
                //-             //- .txt4 Nam id odio vel nulla vestibulum gravida.
                //-             .txt5
                //-                 //- a.btn-default.btn2(target="_blank", :href="concurso.get('link')") VER DETALLES
                //-                 router-link.btn-default.btn2(to="/birthdayclub") VER DETALLES
                .row(v-for="(concurso, index) in concursos", style="margin-bottom: 35px")
                    .col-sm-6
                        //- .animated(data-animation='fadeInLeft', data-animation-delay='200')
                        //- a(target="_blank", :href="concurso.get('link')")
                        //- router-link.btn-default.btn2(:to="{ name: 'Contest', params: { id: concurso.id }}")
                        img.img-responsive.disk1-img(:src="concurso.get('foto')._url", alt='')
                    .col-sm-5.col-sm-offset-1
                        //- .animated(data-animation='fadeInRight', data-animation-delay='200')
                        .disk1
                            //- .txt1
                                span Created
                                |   |  By: John Coltrain
                            .txt2
                                | {{concurso.get('name')}}
                            br
                                //- ( 
                                //- span 1 CD
                                //- |  )
                            //- .txt3
                                | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed elementum
                                | felis, a semper orci. Nam id odio vel nulla vestibulum gravida. Sed ex sem. vestibulum urna
                                | magna. Suspendisse isis
                            //- .txt4 Nam id odio vel nulla vestibulum gravida.
                            .txt5
                                //- a.btn-default.btn2(target="_blank", :href="concurso.get('link')") VER DETALLES
                                button.btn-default.btn2(v-on:click="goToDetails(concurso)") VER DETALLES
        #featured(style="padding-top: 40px !important; padding-bottom: 0px !important")
            .container
                //- .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Escucha toda la música en Radio
                    | FM - 
                    b 97.3
                .title2.animated(data-animation='fadeInUp', data-animation-delay='300') EVENTOS
                .kand1.animated(data-animation='fadeInUp', data-animation-delay='200')
            .slick-slider-wrapper.hidden-xs
                //- (v-if="events != null && events.length != 0")
                .container
                    slick(v-if="events != null && events.length != 0", ref="slick", :options="slickOptions")
                        div(v-for="event in events", v-on:click="eventClicked(event)", style="cursor: pointer")
                            .slick-slider-inner
                                figure
                                    img.img-responsive(:src="event.get('foto')._url", alt='')
                                br
                                br
                                br
                                br
                                .caption
                                    .txt1
                                        span {{event.get('descripcion')}}
                                    .txt2
                                        span {{event.get('titulo')}}
                                    .txt3
                        //- a.btn.btn-default() Ver Detalles
                        //- .slick-slider-overlay
                        //- slick(v-if="events != null && events.length != 0", ref="slick", :options="slickOptions")
                        div(v-for="event in events", v-if="events.length <= 3 && events.length > 1", v-on:click="eventClicked(event)", style="cursor: pointer")
                            .slick-slider-inner
                                figure
                                    img.img-responsive(:src="event.get('foto')._url", alt='')
                                br
                                br
                                br
                                br
                                .caption
                                    .txt1
                                        span {{event.get('descripcion')}}
                                    .txt2
                                        span {{event.get('titulo')}}
                                    .txt3
                                        //- a.btn.btn-default() Ver Detalles
                                //- .slick-slider-overlay
            .container.hidden-sm.hidden-md.hidden-lg(style="margin-top:30px")
                .row
                    .col-sm-12(v-for="event in events")
                        .artists1.clearfix
                            figure
                                img.img-responsive(:src="event.get('foto')._url", alt='')
                            .caption( v-on:click="eventClicked(event)")
                                .txt2 {{event.get('titulo')}}
                                .social2_wrapper
                                    //- ul.social2.clearfix
                                        li
                                            a(href='mailto:rony@magic973.com')
                                                i.fa.fa-envelope  
                                                |  rony@magic973.com
                                        //- li
                                            a(href='#')
                                                i.fa.fa-twitter
                                | {{event.get('descripcion')}}
</template>
<script>
import Parse from 'parse'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
export default {
    name: 'Home',
    data() {
        return {
            concursos: [],
            events: [],
            slickOptions: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 77000,
            }
        }
    },
    components: { Slick },
    mounted() {
        this.getConcursos()
        this.getEvents()
        this.initView()
        this.getEntradas()
    },
    methods: {
        getEntradas(){
            var concursoQuery = new Parse.Query("Concurso")
            concursoQuery.equalTo("objectId", "EyyIxGCAWb")

            concursoQuery.first(res => {
                var EntradaConcurso = Parse.Object.extend("EntradaConcurso")
                var query = new Parse.Query(EntradaConcurso)
                query.equalTo("concurso", res)
                query.limit(5000)
                query.find().then(res => {
                    console.log(res)
                })

            })
        },
        goToDetails(concurso) {
            concurso.increment('clicked', 1)
            concurso.save()
            this.$router.push('/concurso/'+concurso.id)
        },
        getConcursos() {
            var Concurso = Parse.Object.extend("Concurso")
            var query = new Parse.Query(Concurso)

            query.equalTo("isActive", true)
            query.find().then(res => {
                this.concursos = res
                console.log(this.concursos)
            }).catch(err => {
                    console.log(err)
                })
        },
        eventClicked(event) {
            event.increment("clicked", 1)
            event.save()
            console.log("event clicked", event.link)
            if (event.get("link") != null && event.get("link") != "") {
                var win = window.open(event.get("link"), '_blank');
                win.focus();
            }
        },
        getEvents() {
            var Eventos = Parse.Object.extend("Eventos")

            var query = new Parse.Query(Eventos)

            query.equalTo("isOn", true)
            query.find().then(res => {
                this.events = res
            }).catch(err => { console.log(err) })
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
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    }
}
</script>
<style>
/* Slider */
.slick-slider
{
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

.slick-slider-inner {
    -webkit-transform: scale(1.1) !important;
    transform: scale(1.1) !important;
}

.slick-slider-wrapper {
    padding-top: 60px
}
.slick-center .slick-slider-inner .caption .txt2 span, .slick-center .slick-slider-inner .caption .txt1 span {
    background: transparent
}
</style>
