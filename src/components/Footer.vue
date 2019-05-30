<template lang="pug">
    #Footer
        .bot1_wrapper
            .container
                .row
                    .col-sm-2
                        .logo2_wrapper
                            a.logo2(href='index.html')
                                img.img-responsive(src='../assets/images/app_logo.png', :style="{ width: '150px' }", alt='') 
                    .col-sm-4
                        p
                            | Nuestra vida esta narrada por la música; encuentra tu historia en Magic 97.3 / 99.5, tu vida en música.
                    .col-sm-3
                        .location1
                            | 1606 Ave Ponce De Leon Suite 1100
                            br
                            | San Juan Puerto Rico 00909
                        a(target="_blank", href="https://publicfiles.fcc.gov/fm-profile/woye") WOYE Public Inspection File
                        br
                        a(target="_blank", href="https://publicfiles.fcc.gov/fm-profile/widi")  WIDI Public Inspection File
                    .col-sm-3
                        .phone1
                            a(href='tel:17877220973') 787-722-0973
                        .mail1
                            a(href='mailto:ventas@magic973.com') ventas@magic973.com
                        a(target="_blank", href="https://www.facebook.com/magic973.magic995")
                            i.footer-icon.fa.fa-facebook
                        a.footer-icon(target="_blank", href="https://twitter.com/magic973")
                            i.fa.fa-twitter
                        a.footer-icon(target="_blank", href="https://www.instagram.com/magic973fm/")
                            i.fa.fa-instagram
                        a.footer-icon(target="_blank", href="https://www.youtube.com/channel/UCgjveLjnnZwqMJSNoxll6TA")
                            i.fa.fa-youtube

                    //- .col-sm-3
                        .bot1_title POPULAR TAGS
                        ul.tags1.clearfix
                            li
                                a(href='#') Amazing
                            li
                                a(href='#') Gridgum
                            li
                                a(href='#') Themes
                            li
                                a(href='#') Clean
                            li
                                a(href='#') Responsiveness
                            li
                                a(href='#') SEO
                        //- .bot1_title MAILING LIST
                        //- .newsletter_block
                            .txt1 Lorem ipsum dolor sit amet concateur non troppo sustenuto largo pensare.
                            .newsletter-wrapper.clearfix
                                form.newsletter(action='javascript:void(0);')
                                    input(type='text', name='s', value='Email Address', onblur="if(this.value=='') this.value='Email Address'", onfocus="if(this.value =='Email Address' ) this.value=''")
                                    a(href='javascript:void(0);')
                            .txt2 We respect your privacy
                    //- .col-sm-4.col-sm-offset-1
                        .bot1_title LATEST NEWS
                        .latest1
                            a.clearfix(href='#')
                                figure
                                    img(src='../assets/images/latest01.jpg', alt='')
                                .caption
                                    .txt1
                                        | Lorem ipsum dolor sit amet, concateur un otto bravo netto, sustenuto
                                        | non troppo.
                                    .txt2 January 17 - 2016
                        .latest1
                            a.clearfix(href='#')
                                figure
                                    img(src='../assets/images/latest02.jpg', alt='')
                                .caption
                                    .txt1
                                        | Lorem ipsum dolor sit amet, concateur un otto bravo netto, sustenuto
                                        | non troppo.
                                    .txt2 February 11 - 2016
                        .latest1.last
                            a.clearfix(href='#')
                                figure
                                    img(src='../assets/images/latest03.jpg', alt='')
                                .caption
                                    .txt1
                                        | Lorem ipsum dolor sit amet, concateur un otto bravo netto, sustenuto
                                        | non troppo.
                                    .txt2 March 21 - 2016
                        a.btn-default.btn3(href='#') READ MORE
        .bot2_wrapper(style="margin-bottom: 77px")
            .container
                | Copyright © 2018 Diseñado por: 
                a(href='http://pixnabilab.com/', target='_blank')
                    b PIXNABI

</template>
<script>
export default {
    name: 'footer'
}
</script>
