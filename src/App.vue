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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
//reset
*
{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Montserrat', sans-serif;
}
////////// GENERALE ////////////////////////////////////////////////////////////
.contenitore
{
  width: 60%;
  margin: auto;
}
////////// FLEX ////////////////////////////////////////////////////////////
.f-mode
{
  display: flex;
}
.f-justify-center
{
  justify-content: center;
}
.f-justify-between
{
  justify-content: space-between;
}
.f-align-center
{
  align-items: center;
}

.flex-wrap
{
  flex-wrap: wrap
}
////////// BOTTONI ////////////////////////////////////////////////////////////
.bg-arancione
{
  background-color: #f09a3f;
}
.bg-azzurrino
{
  background-color: #00bcd4;
}
.color-white
{
  color: white;
}



</style>
