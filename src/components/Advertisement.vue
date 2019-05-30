<template lang="pug">
    #Adevertisement
        #content
            .container
                .row
                    .col-sm-6.animated(data-animation='fadeInLeft', data-animation-delay='200')
                        img.img-responsive.mic1(src='../assets/images/style05.jpg', alt='')
                    .col-sm-6.animated(data-animation='fadeInRight', data-animation-delay='200')
                        .thumb5
                            .thumbnail.clearfix
                                .caption
                                    h5 Magic Radio Network
                                    p
                                        | Haz que todo el mundo se entere de tu producto o servicio con Magic Network. Anuciate en la radio y en nuestros network digitales.
                                    p Magic app
                                    ul
                                        li A- Leaderboard Banner 728 px x 90 px
                                        li B- Top Banner         728 px x 90 px
                                        li C- Top Square Banner  300 px x 250 px 
                                        li D- Bottom Banner      728 px x 90 px 
                                        li E- App Banner    300 px x 250 px
                                    p WEBSITE
                                    ul
                                        li Leaderboard Banner 728 px x 90 px
                                        //- li Leaderboard Banner 728 px x 90 px
                                        //- li Leaderboard Banner 728 px x 90 px
                                        //- li Leaderboard Banner 728 px x 90 px
                                    p Radio
                                    ul
                                        li 15 segundos
                                        li 30 segundos
                                        li 60 segundos
                                        li Live Mentions
                                        li Entrevistas
                    .col-sm-6.col-sm-offset-6.animated
                        .thumb5
                            .thumbnail.clearfix
                                .caption
                                    p
                                        | Telefono:
                                        span  787-722-0973
                                    p
                                        | Email:
                                        span  ventas@magic973.com
                                    .social3_wrapper
                                        ul.social3.clearfix

</template>
<script>
import Parse from 'parse'
export default {
    name: 'Adevertisement',
    mounted() {
        this.initView()
    }, 
    methods: {
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
    }
}
</script>
