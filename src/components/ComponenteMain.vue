<template>
  <main>
    <SectionJumbotron/>
    <SectionChoose/>
    <SectionClass/>
  </main>
</template>

<script>
import SectionJumbotron from './SectionJumbotron.vue'
import SectionChoose from './SectionChoose.vue'
import SectionClass from './SectionClass.vue'

export default {
  name: 'ComponenteMain',
  components: {
    SectionJumbotron,
    SectionChoose,
    SectionClass
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
