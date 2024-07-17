<template>
    <section id="home" class="intro-section">
        <div class="container">
            <div class="">
                <div class="">
                    <h3 class="display-2">
                        <span class="display-2--intro title">{{ title }}</span>
                        <span class="display-2--description description text-warning">{{ description }}
                            <a href="#presentation">Preberi več
                                <i class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                        <path d="M8 12l4 4" />
                                        <path d="M12 8v8" />
                                        <path d="M16 12l-4 4" />
                                    </svg>
                                </i>
                                <!-- <i class="fas fa-play-circle"></i> -->
                            </a>
                        </span>
                    </h3>
                </div>
                <div class="col-md-6">
                    <!-- <img src="/images/intro-tent.jpg" alt="intro-tent" class="img-fluid"> -->
                </div>

            </div>
            <!-- <button @click="change">click me</button> -->
        </div>
    </section>
    <section id="presentation" class="presentation pt-5">
        <!-- <div class="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#778c45" fill-opacity="1" d="M0,128L21.8,117.3C43.6,107,87,85,131,74.7C174.5,64,218,64,262,80C305.5,96,349,128,393,154.7C436.4,181,480,203,524,202.7C567.3,203,611,181,655,154.7C698.2,128,742,96,785,80C829.1,64,873,64,916,85.3C960,107,1004,149,1047,154.7C1090.9,160,1135,128,1178,96C1221.8,64,1265,32,1309,21.3C1352.7,11,1396,21,1418,26.7L1440,32L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
        </div> -->
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
                        image: '../../images/šotor/6x10 black.jpg',
                        imageAlt: 'mere šotora',
                        text: 'Zadostna velikost za do 50 ljudi'
                    },
                    {
                        image: '../../images/šotor/bevestiging-met-elastiek-pvc-party-tent.jpg',
                        imageAlt: 'Slika ogrodja',
                        text: 'Močno kovinsko ogrodje'
                    },
                    {
                        image: '../../images/šotor/IMG_9862.JPG',
                        imageAlt: 'Slika ogrodja',
                        text: 'Dodatne stranice za zavarovanje pred dežjem, vetrom itd.'
                    },
                    {
                        image: '../../images/šotor/img-1802.jpg',
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