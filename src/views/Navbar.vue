<template>
    <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
        <div class="container">
            <RouterLink to="/" class="navbar-brand" href="#">
                <!-- <img src="/images/logo.png" alt="logo image"> -->
                <span class="logo text-warning">NŠTV</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#services">šotori</a> -->
                        <RouterLink to="/" class="link-custom">Domov</RouterLink>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#services">napihljiva igrala</a> -->
                        <RouterLink to="/sotori" class="link-custom">Šotori</RouterLink>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#contact">kontakt</a> -->
                        <RouterLink to="/napihljiva-igrala" class="link-custom">dodatne storitve</RouterLink>

                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#about">o nas</a> -->
                        <RouterLink to="/o-nas" class="link-custom">O nas</RouterLink>

                    </li>
                </ul>
                <RouterLink to="/kontakt">
                    <button href="tel:031-123-321" type="button" class="rounded-pill btn-rounded ms-3">{{ tel }}
                        <span>
                            <i>
                                <fa icon="fa-solid fa-phone"/>
                            </i>
                        </span>
                    </button>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script>
    import { RouterLink, RouterView } from 'vue-router'

    export default {
        data() {
            return {
                tel: '031-123-321'
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "../css/sections/navbar";
</style>