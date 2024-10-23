<template>
    <section class="contact-section">
        <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col-lg-6">
                    <ul>
                        <li>Lahko nas kontaktirate preko telefona na številko {{ phoneNumber }} ali preko obrazca na tej strani</li>
                        <li>Na gumb Pošlji nam pošljete vašo zahtevo</li>
                        <li>Če so vsa polja pravilno izpoljnena prejmete E-pošto z vašim sporočilom in potrditvijo, da smo vašo vlogo prejeli</li>
                    </ul>
                </div>
                <div class="col-lg-6 mb-5">
                    <span class="">
                        Pošljite povpraševanje in odgovorili vam bomo v naslednjih 3 urah:
                    </span>
                    <div class="form-group mt-3">
                        <label for="fullName">Ime in priimek</label>
                        <input v-model="info.fullName" type="name" class="form-control" id="fullName" placeholder="Vnesite vaše ime in priimek">
                        <p v-if="errors.fullName.length" class="text-warning">
                            {{ errors.fullName[0] }}
                        </p>
                    </div>
                    <div class="form-group mt-3">
                        <label for="email">E-poštni naslov</label>
                        <input v-model="info.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Vnesite vaš e-mail">
                        <p v-if="errors.email.length" class="text-warning">
                            {{ errors.email[0] }}
                        </p>
                    </div>
                    <div class="form-group mt-3">
                        <label for="address">Naslov za najem</label>
                        <input v-model="info.address" type="address" class="form-control" id="address" placeholder="Vnesite naslov za najem">
                        <p v-if="errors.fullName.length" class="text-warning">
                            {{ errors.address[0] }}
                        </p>
                    </div>
                    <div class="form-group mt-3">
                        <label for="message">Vaše sporočilo</label>
                        <textarea v-model="info.message" class="form-control" id="message" rows="5"></textarea>
                        <p v-if="errors.message.length" class="text-warning">
                            {{ errors.message[0] }}
                        </p>
                    </div>
                    <button @click="validateInput" class="btn btn-primary mt-3">Pošlji</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                info: {
                    fullName: '',
                    email: '',
                    address: '',
                    message: ''
                },
                errors: {
                    fullName: [],
                    email: [],
                    address: [],
                    message: []
                },
                names: [],
                phoneNumber: '031665323'
            }
        },
        methods: {
            // getInfo() {
            //     axios({
            //         method: 'get',
            //         url: 'http://127.0.0.1:8000',
            //         responseType: 'json'
            //     })
            //     .then(function (response) {
            //         console.log(response.data);
            //     });
            // },
            sendInfo() {
                // console.log(this.info)
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/send-email',
                    headers: {
                        accept: 'application/json',
                    },
                    responseType: 'json',
                    data: {
                        info: this.info
                    },
                    withCredentials: true,
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            validateInput() {
                this.errors.fullName = []
                this.errors.email = []
                this.errors.address = []
                this.errors.message = []

                if (!this.info.fullName) {
                    this.errors.fullName.push('To polje je obvezno');
                }
                if (!this.info.email) {
                    this.errors.email.push('To polje je obvezno');
                }
                if (!this.info.message) {
                    this.errors.message.push('To polje je obvezno');
                }
                if(!this.validateEmail(this.info.email)) {
                    this.errors.email.push('Vnesite veljaven E-poštni naslov');
                }
                this.sendInfo();
            },
            validateEmail(email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    }
</script>

<style scoped lang="scss">
    @use "../css/sections/contact";
</style>