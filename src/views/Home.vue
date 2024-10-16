<template>
    <section id="home" class="intro-section fw-bolder">
        <div class="container">
            <div class="">
                <div class="">
                    <h3 class="display-2">
                        <span class="display-2--intro title">{{ title }}</span>
                        <span class="display-2--description description text-warning">{{ description }}
                            <br><a href="#presentation" class= "text-center link">Preberi več
                                <i class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                        <path d="M8 12l4 4" />
                                        <path d="M12 8v8" />
                                        <path d="M16 12l-4 4" />
                                    </svg>
                                </i>
                                <i class="fas fa-play-circle"></i>
                            </a>
                        </span>
                    </h3>
                </div>

            </div>
        </div>
    </section>
    <section id="presentation" class="presentation pt-5">
        <div class="container p-1" v-for="(property, idx) in properties">

            <div class="row mb-4 presentation_box" v-if="idx % 2">
                <div class="col-lg-6">
                    <h3 class="presentation_box--text mt-5">
                        {{ property.text }}
                    </h3>
                </div>
                <div class="col-lg-6">
                    <img :src="property.image" :alt="property.imageAlt" class="img-fluid presentation_box--img">
                </div>
            </div>
            <!-- ------------------------------------- -->
            <div class="row mb-4 presentation_box" v-else>
                <div class="col-lg-6">
                    <img :src="property.image" :alt="property.imageAlt" class="img-fluid presentation_box--img">
                </div>
                <div class="col-lg-6">
                    <h3 class="presentation_box--text mt-5">
                        {{ property.text }}
                    </h3>
                </div>
            </div>

        </div>
    </section>

</template>

<script>

    export default {
        data() {
            return {
                title: 'Najem šotorov Tomaž Vrabelj',
                description: 'Pozdravljeni na naši spletni strani, na kateri si lahko hitro rezervirate prireditvene šotore in napihljive igrala.',
                // description: 'Rezervacija'
                properties: [
                    {
                        image: '../../images/6x10 black.jpg',
                        imageAlt: 'mere šotora',
                        text: 'Zadostna velikost za do 50 ljudi'
                    },
                    {
                        image: '../../images/bevestiging-met-elastiek-pvc-party-tent.jpg',
                        imageAlt: 'Slika ogrodja',
                        text: 'Močno kovinsko ogrodje'
                    },
                    {
                        image: '../../images/IMG_9862.JPG',
                        imageAlt: 'Slika ogrodja',
                        text: 'Dodatne stranice za zavarovanje pred dežjem, vetrom itd.'
                    },
                    {
                        image: '../../images/img-1802.jpg',
                        imageAlt: 'Slika ogrodja',
                        text: 'Hitro zrolanje dodatnih stranic'
                    },
                ]
            }
        },
        methods: {
            change() {
                this.title = 'hey';
            }
        }
    }

</script>

<style scoped lang="scss">
    @use "../css/sections/home";
</style>