<template>
  <main>
    <SectionJumbotron/>
    <SectionChoose/>
  </main>
</template>

<script>
import SectionJumbotron from './SectionJumbotron.vue'
import SectionChoose from './SectionChoose.vue'

export default {
  name: 'ComponenteMain',
  components: {
    SectionJumbotron,
    SectionChoose
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
