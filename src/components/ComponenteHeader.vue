<template>
  <header>
    <!-- div per dare un margine automatico a destra e a sinistra -->
    <div class="contenitore f-mode f-justify-between f-align-center">
      <!-- Lista contatti navbar -->
      <ul class="f-mode">
        <li><span>[]</span> 1.800.567.8910 <span>24hrs</span></li>
        
        <li><span>[]</span>Contact Us</li>
        
        <li><span>[]</span>Alumns</li>
        
        <li><span>[]</span>Campus</li>
      </ul>
      <!-- Lista social navbar -->
      <ul class="f-mode">
        <li>[]</li>
        <li>[]</li>
        <li>[]</li>
        <li>[]</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ComponenteHeader'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header
{
  background-color: #ffab0b;
  color: white;
  padding: 15px;
  li
  {
    margin-right: 20px;
    span
    {
      margin-right: 10px;
    }
  }
}
</style>
