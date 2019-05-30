<template lang="pug">
    #Videos
        #content
            .container
                //- .title1.animated(data-animation='fadeInUp', data-animation-delay='100')
                    | Los que hacen que sean Mágicos tus días
                .title2.animated(data-animation='fadeInUp', data-animation-delay='200') VIDEOS
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
                    .col-sm-4(v-for="video in videos")
                        .artists1.clearfix(style="height: 187px;;",)
                            figure
                                img.img-responsive(:src='video.thumbnail._url', alt='')
                            a.caption(target="_blank", :href="video.url")
                                .txt1 {{video.descripcion}}
                                .txt2 {{video.titulo}}
                                //- .social2_wrapper
                                    ul.social2.clearfix
                                        li
                                            a(target="_blank", :href="video.url")
                                                i.fa.fa-youtube
                                        //- li
                                            a(href='#')
                                                i.fa.fa-twitter
</template>
<script>
import Parse from 'parse'
export default {
    name: 'Videos',
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        // this.initView()
        this.getVideos()
    },
    methods: {
        getVideos() {
            var Videos = Parse.Object.extend("Videos");
			var query = new Parse.Query(Videos);
			// query.equalTo("playerName", "Dan Stemkoski");
			query.find().then(res => {
				res.forEach(v => {
					// console.log(p)
					let vid = {}
					vid = Object.assign(vid, v.attributes)
					vid.id = v.id
					this.videos.push(vid)
				});
				
                console.log('videos', this.videos)
                this.initView()
			}).catch(err => {
				console.log(err)
			});
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
