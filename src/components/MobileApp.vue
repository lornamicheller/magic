<template lang="pug">
    #MobileApp
        #content
            .container
                .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Descargue nuestra aplicación
                .title2.animated(data-animation='fadeInUp', data-animation-delay='200') APLICACIÓN MÓVIL 
                .title4.animated(data-animation='fadeInUp', data-animation-delay='300')
                    | Lleva donde quiera nuestro App y disfruta de la mejor música y la mejor programación donde quieras.
                br
                br
                .row
                    .col-sm-7.animated(data-animation='fadeInLeft', data-animation-delay='300')
                        img.img-responsive.iphone1(src='../assets/images/about01.png', alt='')
                    .col-sm-5.animated(data-animation='fadeInRight', data-animation-delay='300')
                        .about_wrapper
                            .title1 Descárgalo y disfruta de música gratis
                            .title2 Magic 97.3 App
                            br
                            p
                                |   Descarga nuestra aplicación móvil, Magic 97.3, gratis y disfruta de nuestra música en cualquier parte del mundo. Ademas puedes accesar a nuestra estación online "Throwback 80's" (TBK 80's) con música de los '80 24/7. ¡Descargala ya!

                                //- | En esta tu nueva aplicación móvil, Magic 97.3 podrás disfrutar de la música de la emisora, como también nuestra emisora online TBK,
                                //- | podrás accesar a videos, encuestas y hasta solicitar tus canciones, escuchar poderosas reflexiones que levantarán tu espíritu y
                                //- | escribirles a tus DJ's, en fin llevarás en la palma de tu mano 24/7 lo mejor de Magic. Es la única cadena radial en Puerto Rico
                                //- | dedicada totalmente a la música de los 80, 90 y ahora en inglés con una lista que sobrepasa los 10,000 éxitos.
                            .apps_wrapper
                                a(href='https://itunes.apple.com/us/app/magic-97-3/id481091591?mt=8')
                                    img.img-responsive(src='../assets/images/app1.png', alt='')
                                a(href='https://play.google.com/store/apps/details?id=com.magic973.radio&hl=en')
                                    img.img-responsive(src='../assets/images/app2.png', alt='')
</template>
<script>
import Parse from 'parse'
export default {
    name: 'MobileApp',
    data() {
        return {

        }
    },
    mounted() {
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
</script>
