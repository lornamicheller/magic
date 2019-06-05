<template lang="pug">
    #Djs
        #content
            .container
                .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Los que hacen que sean Mágicos tus días
                .title2.animated(data-animation='fadeInUp', data-animation-delay='200') MAGIC DJ’S
                //- .title4.animated(data-animation='fadeInUp', data-animation-delay='300')
                    | Lorem ipsum dolor sit
                    | amet, concateur non troppo largo, vivache sustenuto, creschendo la prada diminuendo
                    br
                    | un bravo sonatina
                    |                 perce pensare la duro niango rodo.
                br
                br
                br
                .row
                    .col-sm-3
                        .artists1.clearfix.animated.fadeInUp
                            figure
                                img.img-responsive(src='../assets/images/singer5.png', alt='')
                            .caption
                                //- .txt1 The Singer
                                .txt2 Dennisse A. Torres
                                .social2_wrapper
                                    ul.social2.clearfix
                                        li
                                            a(href='mailto:dtorres@magic973.com')
                                                i.fa.fa-envelope  
                                                |  dtorres@magic973.com
                                        //- li
                                            a(href='#')
                                                i.fa.fa-twitter
                                | Lunes a Viernes 10am a 3pm
                                br
                                | Domingos de 12 a 5pm en Sunroof
                    //- .col-sm-4
                    //-     .artists1.clearfix.animated.fadeInUp
                    //-         figure
                    //-             img.img-responsive(src='../assets/images/singer3.png', alt='')
                    //-         .caption
                    //-             .txt2 Rony Campos
                    //-             .social2_wrapper
                    //-                 ul.social2.clearfix
                    //-                     li
                    //-                         a(href='mailto:rony@magic973.com')
                    //-                             i.fa.fa-envelope  
                    //-                             |  rony@magic973.com
                    //-                     //- li
                    //-                         a(href='#')
                    //-                             i.fa.fa-twitter
                    //-             | Lunes a Viernes de 6am a 10am
                    .col-sm-3
                        .artists1.clearfix.animated.fadeInUp
                            figure
                                img.img-responsive(src='../assets/images/singer1.png', alt='')
                            .caption
                                .txt2 ICEMAN
                                .social2_wrapper
                                    ul.social2.clearfix
                                        li
                                            a(href='mailto:iceman@magic973.com')
                                                i.fa.fa-envelope  
                                                |  iceman@magic973.com
                                        //- li
                                            a(href='#')
                                                i.fa.fa-twitter
                                | Viernes 5:30pm a 10pm en Magic Mix
                    .col-sm-3
                        .artists1.clearfix.animated.fadeInUp
                            figure
                                img.img-responsive(src='../assets/images/singer2.png', alt='')
                            .caption
                                .txt2 Francisco Javier
                                .social2_wrapper
                                    ul.social2.clearfix
                                        li
                                            a(href='mailto:franciscojavier@magic973.com')
                                                i.fa.fa-envelope  
                                                |  franciscojavier@magic973.com
                                        //- li
                                            a(href='#')
                                                i.fa.fa-twitter
                                | Lunes a Viernes 3pm a 7pm
                    .col-sm-3
                        .artists1.clearfix.animated.fadeInUp
                            figure
                                img.img-responsive(src='../assets/images/singer4.png', alt='')
                            .caption
                                .txt2 Zamaris Rodríguez
                                .social2_wrapper
                                    ul.social2.clearfix
                                        li
                                            a(href='mailto:zrodriguez@magic973.com')
                                                i.fa.fa-envelope  
                                                |  zrodriguez@magic973.com
                                        //- li
                                            a(href='#')
                                                i.fa.fa-twitter
                                | Domingos 7pm-10pm

</template>
<script>
import Parse from 'parse'
export default {
    name: 'Djs',
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
