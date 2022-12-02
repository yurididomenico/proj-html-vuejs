<template>
  <div id="app">
    <ComponenteHeader/>
    <ComponenteMain/>
    <ComponenteFooter/>
  </div>
</template>

<script>
import ComponenteHeader from './components/ComponenteHeader.vue'
import ComponenteMain from './components/ComponenteMain.vue'
import ComponenteFooter from './components/ComponenteFooter.vue'
// import ComponenteHeader from './components/ComponenteHeader.vue'
export default {
  name: 'App',
  components: {
    ComponenteHeader,
    ComponenteMain,
    ComponenteFooter
  }
}
</script>

<style lang="scss">

</style>
