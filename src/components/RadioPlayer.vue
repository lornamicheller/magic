<template lang="pug">
    #RadioPlayer(style="height: auto !important")
        .song1_wrapper
            .container-fluid
                .song1_inner.clearfix
                    .song1.clearfix
                        .left.clearfix(v-if="ads.length != 0")
                            //- slider(styleanimation="fade")
                                slider-item(v-for="(ad, index) in list" :key="index")
                            figure.slide.text-center
                                //- img.ad-banner.img-responsive(src="../assets/images/blanco.jpg", alt='')
                                img.ad-banner.img-responsive(:src="sliderImg", alt='', v-on:click="adClicked", style="cursor: pointer; margin-top: 2px")
                            //- .timer
                                .slideshow
                                    .slide 01
                                    .slide 02
                                    .slide 03
                                    .slide 04
                            //- figure
                                img(src='../assets/images/song1.jpg', alt='')
                            //- .caption
                                .txt1 Magic 97.3 FM Metro | 99.5 FM Isla
                                //- .txt2 Jazz Samba
                        .right.clearfix.hidden-xs
                            .caption
                                #magic.selected(v-on:click="playMagic", style="margin-top: -5px; font-size: 14px; cursor: pointer") 
                                    //- a.selected(style="text-decoration: none;  cursor: pointer")
                                    span#listening-magic Escuchando 
                                    | Magic 97.3 FM
                                #tbk(v-on:click="playTbk", style="margin-top: -5px; font-size: 14px; cursor: pointer") 
                                    //- a(style="text-decoration: none;  cursor: pointer")
                                    span#listening-tbk.hidden Escuchando 
                                    | Live TBK 80's Radio
                            template(v-if="playingMagic")
                                figure
                                    img(src='../assets/images/magic.png', style="height: 77px", alt='')
                            template(v-else)
                                figure
                                    img(src='../assets/images/tbk.png', style="height: 77px", alt='')
                        //- .right
                        .left.audio1
                            audio.audio#player(preload='none', style='width: 100%; visibility: hidden;', controls='controls')
                                source(type='audio/aac', src='http://ice.eleden.com/magic.aac')
                                source(type='audio/aac', src='http://ice.eleden.com/magic2.aac')
                                // <a href="audio/19377766_jazz-samba-5_by_abmode_preview.mp3">audio/song1.mp3</a>
</template>
<script>
import Parse from 'parse'
import { Slider, SliderItem } from "vue-easy-slider";
export default {
  name: "RadioPlayer",
  data() {
    return {
      ads: [],
      list: [],
      testFunc: null,
      player: null,
      magic: "http://ice.eleden.com/magic.aac",
      tbk: "http://ice.eleden.com/magic2.aac",
      playingMagic: true,
      sliderImg: "",
      adUrl: "",
      currentAd: null
    };
  },
  // components: {
  //     Slider,
  //     SliderItem
  // },
  mounted() {
    this.initView();
    this.getAds();
  },
  methods: {
    adsSlider() {
      console.log("slider");
      var l = this.ads.length;
      var i = 0;
      var _self = this;
      $("#player")[0].play();
      setInterval(() => {
        _self.currentAd = _self.ads[i];
        _self.sliderImg = _self.currentAd.get("foto")._url;
        _self.adUrl = _self.currentAd.get("link");
        _self.currentAd.increment("views", 1);
        _self.currentAd.save();
        i++;
        // console.log('img'+i)
        if (i == l) i = 0;
      }, 5000);
    },
    adClicked() {
      this.currentAd.increment("clicked", 1);
      this.currentAd.save();
      if (
        this.currentAd.get("link") != null &&
        this.currentAd.get("link") != ""
      ) {
        var win = window.open(this.currentAd.get("link"), "_blank");
        win.focus();
      }
    },
    getAds() {
      var Ads = Parse.Object.extend("Ads");
      var query = new Parse.Query(Ads);
      query.equalTo("isBanner", true);
      query.equalTo("isOn", true);
      query.find().then(res => {
        console.log("ads", res);
        this.ads = res;
        this.adsSlider();
        this.initAdSlider();
      });
    },
    playMagic() {
      $("#player")[0].src = this.magic;
      $("#player")[0].play();
      $("#magic").addClass("selected");
      $("#tbk").removeClass("selected");
      $("#listening-magic").removeClass("hidden");
      $("#listening-tbk").addClass("hidden");
      this.playingMagic = true;
    },
    playTbk() {
      $("#player")[0].src = this.tbk;
      $("#player")[0].play();
      $("#tbk").addClass("selected");
      $("#magic").removeClass("selected");
      $("#listening-tbk").removeClass("hidden");
      $("#listening-magic").addClass("hidden");
      this.playingMagic = false;
    },
    initView() {
      /*----------------------------------------------------*/
      // player.
      /*----------------------------------------------------*/

      MediaElementPlayer.prototype.prevbuilder = function(
        player,
        controls,
        layers,
        media
      ) {
        var prevbut = $(
          '<div class="mejs-button mejs-previous-button mejs-cust1-button">' +
            "</div>"
        )
          // append it to the toolbar
          .appendTo(controls)
          // add a click toggle event
          .click(function() {
            // window.open(player.options.logo.link, '_blank');
            player.options.prevFunc.apply(this);
          });
      };

      MediaElementPlayer.prototype.buildcust3 = function(
        player,
        controls,
        layers,
        media
      ) {
        var cust3 = $(
          '<div class="mejs-button mejs-cust3-button "><button></button></div>'
        )
          // append it to the toolbar
          .appendTo(controls);
      };

      MediaElementPlayer.prototype.buildcust4 = function(
        player,
        controls,
        layers,
        media
      ) {
        var cust4 = $(
          '<div class="mejs-button mejs-cust4-button "><button></button></div>'
        )
          // append it to the toolbar
          .appendTo(controls);
      };

      if ($("body").find(".liveRadio").length !== 0) {
        $("#audio4_html5_white").audio4_html5({
          playerWidth: 1200,
          skin: "whiteControllers",
          initialVolume: 0.5,
          responsive: false,
          showPlaylistOnInit: false,
          showCategories: false,
          showSearchArea: false
        });
      }

      $(".audio1 audio").mediaelementplayer({
        //features: ['cust1','playpause','cust2','progress','current','duration','cust3','cust4','volume']
        features: [
          "playlistfeature",
          "prevtrack",
          "playpause",
          "nexttrack",
          "progress",
          "current",
          "volume"
        ]
      });

      $(".audio2 audio").mediaelementplayer({
        features: ["playpause", "progress"]
      });

      $(".mejs-prevtrack-button").addClass("mejs-cust1-button");
      $(".mejs-nexttrack-button").addClass("mejs-cust2-button");

      console.log($(".mejs-controls button"));
      // $('.mejs-controls button').each((i, o) => {
      //     console.log(o)
      $(".mejs-prevtrack-button").addClass("hidden");
      $(".mejs-nexttrack-button").addClass("hidden");
      // })
    }
    // initAdSlider() {
    //      // slider type
    //     $t = "slide"; // opitions are fade and slide

    //     //variables
    //     $f = 1000,  // fade in/out speed
    //     $s = 1000,  // slide transition speed (for sliding carousel)
    //     $d = 5000;  // duration per slide

    //     $n = $('.slide').length; //number of slides
    //     $w = $('.slide').width(); // slide width
    //     $c = $('.container').width(); // container width
    //     $ss = $n * $w; // slideshow width

    //     // function timer() {
    //     //     $('.timer').animate({"width":$w}, $d);
    //     //     $('.timer').animate({"width":0}, 0);
    //     // }

    // // fading function
    //     function fadeInOut() {
    //     timer();
    //         $i = 0;
    //         var setCSS = {
    //             'position' : 'absolute',
    //             'top' : '0',
    //             'left' : '0'
    //         }

    //         $('.slide').css(setCSS);

    //         //show first item
    //         $('.slide').eq($i).show();

    //         setInterval(function() {
    //         timer();
    //             $('.slide').eq($i).fadeOut($f);
    //             if ($i == $n - 1) {
    //                 $i = 0;
    //             } else {
    //                 $i++;
    //             }
    //             $('.slide').eq($i).fadeIn($f, function() {
    //                 $('.timer').css({'width' : '0'});
    //             });

    //         }, $d);

    //     }

    //     // function slide() {
    //     // this.timer();
    //     //     var setSlideCSS = {
    //     //         'float' : 'left',
    //     //         'display' : 'inline-block',
    //     //         'width' : $c
    //     //     }
    //     //     var setSlideShowCSS = {
    //     //         'width' : $ss // set width of slideshow container
    //     //     }
    //     //     $('.slide').css(setSlideCSS);
    //     //     $('.slideshow').css(setSlideShowCSS);

    //     //     setInterval(function() {
    //     //         timer();
    //     //         $('.slideshow').animate({"left": -$w}, $s, function(){
    //     //             // to create infinite loop
    //     //             $('.slideshow').css('left',0).append( $('.slide:first'));
    //     //         });
    //     //     }, $d);

    //     // }

    //     if ($t == "fade") {
    //         fadeInOut();

    //     } if ($t == "slide") {
    //         slide();

    //     } else {

    //     }
    // },
    // timer() {
    //     $('.timer').animate({"width":$w}, $d);
    //     $('.timer').animate({"width":0}, 0);
    // },
    // slide() {
    //     this.timer();
    //         var setSlideCSS = {
    //             'float' : 'left',
    //             'display' : 'inline-block',
    //             'width' : $c
    //         }
    //         var setSlideShowCSS = {
    //             'width' : $ss // set width of slideshow container
    //         }
    //         $('.slide').css(setSlideCSS);
    //         $('.slideshow').css(setSlideShowCSS);

    //         setInterval(function() {
    //             timer();
    //             $('.slideshow').animate({"left": -$w}, $s, function(){
    //                 // to create infinite loop
    //                 $('.slideshow').css('left',0).append( $('.slide:first'));
    //             });
    //         }, $d);

    //     }
  }
};
</script>
<style>
.selected {
  color: #ad2080;
  font-size: 20px !important;
}
</style>

