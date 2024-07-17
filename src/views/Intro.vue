<template>
    <section id="home" class="intro-section">
        <div class="container">
            <div class="row align-center">
                <div class="col-md-6">
                    <h1 class="display-2">
                        <span class="display-2--intro">{{ title }}</span>
                        <span class="display-2--description">{{ description }}</span>
                    </h1>
                </div>
                <div class="col-md-6">
                    <img src="/images/intro-tent.jpg" alt="intro-tent" class="img-fluid">
                </div>
            </div>
            <!-- <button @click="change">click me</button> -->
        </div>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                title: 'Najem šotorov Tomaž Vrabelj',
                description: 'Pozdravljeni na naši spletni strani na kateri si lahko hitro rezervirate prireditvene šotore in napihljive igrala.'
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
    @use "../css/sections/intro";
</style>
