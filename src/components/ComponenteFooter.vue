<template>
  <footer>
    <AboutUs
    :linkFooter="linkFooter"/>
    <CreditsSite/>
  </footer>
</template>

<script>
import AboutUs from './AboutUs.vue'
import CreditsSite from './CreditsSite.vue'

export default {
  name: 'ComponenteFooter',
  components: {
    AboutUs,
    CreditsSite
  },
  props: {
    linkFooter: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer
{
  background-image: url('../assets/img/university_ft_bg.png');
  background-size: cover;
}
</style>
