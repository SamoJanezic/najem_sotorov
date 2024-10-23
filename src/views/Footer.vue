<template>
    <footer class="footer pt-3 pb-3">
        <div class="container">
            <div class="row contact-box">
                <div class="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex" v-for="contact in contactOptions">
                    <div class="contact-box__icon" v-html="contact.svg">
                    </div>
                    <div class="contact-box__info mt-2">
                        <a href="" class="contact-box__info--title">{{ contact.title }}</a>
                        <p class="contact-box__info--subtitle">{{ contact.subtitle }}</p>
                    </div>
                </div>
            </div>
            <div class="w-100 row social">
                <div class="col-md-6 text">
                    Pridružite se nam na socialnih omrežjih
                </div>
                <div class="col-md-6">
                    <a  v-for="icon in socialMediaIcons">
                        <fa class="pe-3 social-icon" :icon=icon />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { icon } from '@fortawesome/fontawesome-svg-core';

    export default {
        data() {
            return {
                contactOptions: {
                    phone: {
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5356FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>`,
                        title: '040-708-113',
                        subtitle: 'pon-pet 8:00 - 16:00'
                    },
                    mail: {
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5356FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>`,
                        title: 'info@najem-sotorov.si',
                        subtitle: 'Spletna pomoč'
                    },
                    location: {
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2 d-flex" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5356FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                                <path d="M9 4v13" />
                                <path d="M15 7v5.5" />
                                <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                                <path d="M19 18v.01" />
                            </svg>`,
                        title: 'Mota 20',
                        subtitle: '9240 Ljutomer'
                    }
                },
                socialMediaIcons: {
                    facebook: ['fab', 'facebook'],
                    twitter: ['fab', 'twitter'],
                    instagram: ['fab', 'instagram'],
                    linkedIn: ['fab', 'linkedin'],
                    github: ['fab', 'github']
                }
            }
        },
        methods: {
            conWrite() {
                console.log('yeah');
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "../css/sections/footer";
</style>