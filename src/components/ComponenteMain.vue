<template>
  <main>
    <SectionJumbotron/>
    <SectionChoose/>
    <SectionClass/>
    <SectionEvents/>
    <SectionUniversity/>
  </main>
</template>

<script>
import SectionJumbotron from './SectionJumbotron.vue'
import SectionChoose from './SectionChoose.vue'
import SectionClass from './SectionClass.vue'
import SectionEvents from './SectionEvents.vue'
import SectionUniversity from './SectionUniversity.vue'

export default {
  name: 'ComponenteMain',
  components: {
    SectionJumbotron,
    SectionChoose,
    SectionClass,
    SectionEvents,
    SectionUniversity
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
