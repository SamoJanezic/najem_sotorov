<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      index: 0,
      images: [
        "./image1.jpeg",
        "./image2.jpeg",
        "./image3.jpeg",
        "./image4.jpeg",
        "./image5.jpeg",
        "./image6.jpeg",
        "./image7.jpeg",
        "./image8.jpeg",
        "./image9.jpeg",
      ],
    }
  },
  mounted() {
    // setInterval(() => {
    //   console.log(this.index);
    //   this.index++
    //   if(this.index >= this.images.length) {
    //     this.index = 0
    //   }
    // }, 1000);
  }
}

</script>

<template>

  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide v-for="image in images">
      <img :src=image />
    </SplideSlide>
  </Splide>
</template>

<style>
img{
  max-width: 50%;
  max-height: 50%;
}
</style>
