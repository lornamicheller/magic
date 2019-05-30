<template lang="pug">
    #Header
        #top1
            #top2.top2_wrapper
                //- .song1_wrapper(style="position:absolute;bottom:0;")
                    .container
                        .song1_inner.clearfix
                            .song1.clearfix
                                .right.clearfix
                                    .caption
                                        .txt1 Magic 97.3 FM Metro | 99.5 FM Isla
                                    figure
                                        img(src='../assets/images/song1.jpg', alt='')
                                        //- .txt2 Jazz Samba
                                //- .right.clearfix
                                    figure
                                        img(src='../assets/images/song1.jpg', alt='')
                                    .caption
                                        .txt1 Magic 97.3 FM Metro | 99.5 FM Isla
                                .left
                                    .audio1
                                        audio.audio(preload='none', style='width: 100%; visibility: hidden;', controls='controls')
                                            source(type='audio/aac', src='http://ice.eleden.com/magic.aac')
                                            source(type='audio/aac', src='http://ice.eleden.com/magic2.aac')
                                            // <a href="audio/19377766_jazz-samba-5_by_abmode_preview.mp3">audio/song1.mp3</a>
                .container
                    .top2.clearfix
                        header
                            .logo_wrapper
                                router-link.logo.scroll-to(to='/')
                                    img.img-responsive(src='../assets/images/app_logo_o.png', :style="{ width: '115px', marginTop: '5px' }", alt='') 
                        .menu_wrapper
                            //- .add1.clearfix
                                //- .icon-search
                                    a(href='#')
                                //- .dropdown.dropdown1
                                    button#dropdownMenu1.dropdown-toggle(type='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='true')
                                        | EN
                                    ul.dropdown-menu(aria-labelledby='dropdownMenu1')
                                        li
                                            a(href='javascript:void(0);') FR
                                        li
                                            a(href='javascript:void(0);') DE
                                        li
                                            a(href='javascript:void(0);') ES
                            .navbar.navbar_.navbar-default
                                button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='.navbar-collapse')
                                    span.sr-only Toggle navigation
                                    span.icon-bar
                                    span.icon-bar
                                    span.icon-bar
                                .navbar-collapse.navbar-collapse_.collapse
                                    ul.nav.navbar-nav.sf-menu.clearfix
                                        li.sub-menu.sub-menu-1
                                            router-link(to='/')
                                                | INICIO
                                                //- em
                                            //- ul
                                                li
                                                    a(href='index.html') RED STYLE WITH RADIO STREAM
                                                li
                                                    a(href='index-2.html') RED STYLE WITH MUSIC PLAYER
                                                li
                                                    a(href='index-1.html') RECORDING STUDIO - STYLE
                                        //- li
                                            a EVENTOS
                                        //- li
                                            a(href='#collection') Collection
                                        //- li
                                        //-     router-link(to="/birthdayclub") MAGIC BIRTHDAY CLUB
                                        li
                                            router-link(to="/encuestas") ENCUESTAS
                                        //- li.sub-menu.sub-menu-1
                                            a(href='javascript:void(0);')
                                                | Participa
                                                em
                                            ul
                                                //- li
                                                    a(href='about.html') EVENTOS
                                                li
                                                    a CONCURSOS
                                                //- li
                                                    router-link(to="/encuestas") ENCUESTAS
                                                //- li
                                                //-     a(href='artists.html') ARTISTS PAGE
                                                //- li
                                                //-     a(href='mobile-aplication.html') MOBILE APPLICATION
                                                //- li
                                                //-     a(href='blog.html') BLOG PAGE
                                                //- li
                                                //-     a(href='post.html') BLOG POST PAGE
                                                //- li
                                                //-     a(href='channel.html') CHANNEL PAGE
                                                //- li
                                                //-     a(href='styles.html') STYLES PAGE
                                        
                                        li
                                            router-link(to='/magicdjs') MAGIC DJ'S
                                        li
                                            router-link(to='/magicapp') MAGIC APP
                                        li
                                            router-link(to='/videos') VIDEOS
                                        li
                                            router-link(to="/anunciate") ANÚNCIATE
                                        //- li.sub-menu.sub-menu-1
                                            a(href='javascript:void(0);')
                                                | Contacto
                                                em
                                            ul
                                                li
                                                    router-link(to="/anunciate") ANUNCIATE
                                                li
                                                    a CONTÁCTENOS
                                        template(v-if="!isLoggedIn")
                                            li
                                                router-link(to="/login") INICIAR SESIÓN
                                        template(v-else)
                                            li
                                                a(v-on:click="logout", style="cursor: pointer;") CERRAR SESIÓN

</template>
<script>
import Parse from 'parse'
export default {
    name: "Header",
    props: ['isLoggedIn'],
    data() {
        return {};
    },
    mounted() {
        // /*----------------------------------------------------*/
        // // Camera slideshow
        // /*----------------------------------------------------*/
        // var oa = $('#camera_wrap');
        // if (oa.length > 0) {
        //     oa.camera({
        //         //thumbnails: true
        //         alignment     : 'centerTop',
        //         autoAdvance     : true,
        //         mobileAutoAdvance : true,
        //         // fx          : 'scrollRight',
        //         height: '51%',
        //         hover: false,
        //         loader: 'none',
        //         navigation: false,
        //         navigationHover: false,
        //         mobileNavHover: false,
        //         playPause: false,
        //         pauseOnClick: false,
        //         pagination      : true,
        //         time: 5000,
        //         transPeriod: 1000,
        //         minHeight: '300px'
        //     });
        // }

        // /*----------------------------------------------------*/
        // // player.
        // /*----------------------------------------------------*/

        // MediaElementPlayer.prototype.prevbuilder = function(player, controls, layers, media){
        //     var prevbut = $('<div class="mejs-button mejs-previous-button mejs-cust1-button">' +
        //             '</div>')
        //         // append it to the toolbar
        //             .appendTo(controls)
        //         // add a click toggle event
        //             .click(function(){
        //                 // window.open(player.options.logo.link, '_blank');
        //                 player.options.prevFunc.apply(this);
        //             });
        // };



        // MediaElementPlayer.prototype.buildcust3 = function(player, controls, layers, media) {
        //     var
        //             cust3 =
        //                     $('<div class="mejs-button mejs-cust3-button "><button></button></div>')
        //                         // append it to the toolbar
        //                             .appendTo(controls);
        // };

        // MediaElementPlayer.prototype.buildcust4 = function(player, controls, layers, media) {
        //     var
        //             cust4 =
        //                     $('<div class="mejs-button mejs-cust4-button "><button></button></div>')
        //                         // append it to the toolbar
        //                             .appendTo(controls);
        // };




        // if($('body').find('.liveRadio').length !== 0) {
        //         $('#audio4_html5_white').audio4_html5({
        //                 playerWidth:1200,
        //                 skin: 'whiteControllers',
        //                 initialVolume:0.5,
        //                 responsive:false,
        //                 showPlaylistOnInit:false,
        //                 showCategories:false,
        //                 showSearchArea:false
        //         });
        // }



        // $('.audio1 audio').mediaelementplayer({
        //     //features: ['cust1','playpause','cust2','progress','current','duration','cust3','cust4','volume']
        //     features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'progress', 'current', 'volume']
        // });

        // $('.audio2 audio').mediaelementplayer({
        //     features: ['playpause','progress']
        // });



        // $('.mejs-prevtrack-button').addClass('mejs-cust1-button');
        // $('.mejs-nexttrack-button').addClass('mejs-cust2-button');


        /*----------------------------------------------------*/
        // carouFredSel.
        /*----------------------------------------------------*/
        var ob = $('#testim').find('.carousel.main ul');
        if (ob.length > 0) {
            ob.carouFredSel({
                auto: {
                    timeoutDuration: 8000
                },
                responsive: true,
                // prev: '.popular_prev',
                // next: '.popular_next',
                pagination: '.testim_pagination',
                width: '100%',
                scroll: {
                    // fx : "crossfade",
                    items: 1,
                    duration: 1000,
                    easing: "easeOutExpo"
                },
                items: {
                    width: '1000',
                    height: 'variable', //  optionally resize item-height
                    visible: {
                        min: 1,
                        max: 1
                    }
                },
                mousewheel: false,
                swipe: {
                    onMouse: true,
                    onTouch: true
                }
            });
        }

        $(window).on("resize",updateSizes_vat).on("load",updateSizes_vat);
        function updateSizes_vat(){
            $('#testim').find('.carousel.main ul').trigger("updateSizes");


        }
        updateSizes_vat();


        /*----------------------------------------------------*/
        // Sticky.
        /*----------------------------------------------------*/
        $("#top2").sticky({
            topSpacing:0,
            getWidthFrom: 'body',
            responsiveWidth: true
        });

        /*----------------------------------------------------*/
        // PRELOADER CALLING
        /*----------------------------------------------------*/
        $("body.onepage").queryLoader2({
            //barColor: "#fff",
            //backgroundColor: "#000",
            percentage: true,
            barHeight: 3,
            completeAnimation: "fade",
            minimumTime: 200
        });



        /*----------------------------------------------------*/
        // MENU SMOOTH SCROLLING
        /*----------------------------------------------------*/
        $(".menu_bot a, .scroll-to").on('click',function(event){ //.navbar_ .nav a,

            //$(".navbar_ .nav a a").removeClass('active');
            //$(this).addClass('active');
            // var headerH = $('#top1').outerHeight();
            var headerH = $('#top2').outerHeight();

            if ($(this).attr("href")=="#home") {
                $("html, body").animate({
                    scrollTop: 0 + 'px'
                    // scrollTop: $($(this).attr("href")).offset().top + 'px'
                }, {
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
            }
            else {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - headerH + 'px'
                    // scrollTop: $($(this).attr("href")).offset().top + 'px'
                }, {
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
            }



            event.preventDefault();
        });

        /*----------------------------------------------------*/
        // Slick
        /*----------------------------------------------------*/
        $('.slick-slider').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 2700,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '150px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }
            ]
        });

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

        /////// jrumble
        $('.speaker-img').find("img").jrumble({
            x: 1,
            y: 1,
            rotation: 2,
            speed: 30,
            opacity: true,
            opacityMin: .05
        }).trigger('startRumble');
        
        
        function setter() {
            var winWidth = $(window).width();
            var gavy = parseInt(winWidth)+15;
            if(gavy < 992 && gavy > 767) {
                    var mina = gavy/2;
                    var min = mina+170;
            }
            else if (gavy < 768) {
                    var min = gavy-210;
            }
            else {
                    var yop = gavy/2;
                    var min = yop-190;
            }


            if(gavy < 1200) {
                    $('.VolumeSlider').css('width',min);
            }
            else {
                    $('.VolumeSlider').css('width','468px');
            }

        }
        
        
        setTimeout(function() {
            setter();
        }, 100);
        
        $(window).resize(function() {
                setter();
        });
    },
    methods: {
        logout: function() { //logs out from parse server and destroys vue session
            this.$session.destroy()
            this.$router.push('/login')
            this.$emit('loggedChanged', false);
            Parse.User.logOut().then(res => {
                console.log(res);
			});	
        },
    }
}
</script>
