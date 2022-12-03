<template>
  <main>
    <AboutUs/>
    <CreditsSite/>
  </main>
</template>

<script>
import AboutUs from './AboutUs.vue'
import CreditsSite from './CreditsSite.vue'

export default {
  name: 'ComponenteFooter',
  components: {
    AboutUs,
    CreditsSite
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
