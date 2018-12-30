<template>
  <div :class="className">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  props: {
    className: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mySwiper: null
    }
  },
  methods: {
    initSwiper () {
      this.mySwiper = new Swiper('.' + this.className, {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40,
        coverflowEffect: {
          rotate: 0,
          slideShadows: false
        }
      })
    }
  },
  mounted () {
    this.initSwiper()
  }
}
</script>
