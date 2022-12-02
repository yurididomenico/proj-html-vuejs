<template>
  <header>
    <!-- div per dare un margine automatico a destra e a sinistra -->
    <div class="contenitore f-mode f-justify-between f-align-center">
      <!-- Lista contatti navbar -->
      <ul class="f-mode">
        <li>
          <font-awesome-icon icon="fa-solid fa-phone-flip" class="iconeHeader"/>
          <span>1.800.567.8910</span>
          <span>24hrs</span>
        </li>
        
        <li>
          <font-awesome-icon icon="fa-solid fa-envelope" class="iconeHeader"/>
          <span>Contact Us</span>
        </li>
        
        <li>
          <font-awesome-icon icon="fa-solid fa-graduation-cap" class="iconeHeader"/>
          <span>Alumns</span>
        </li>
        
        <li>
          <font-awesome-icon icon="fa-solid fa-building-columns" class="iconeHeader"/>
          <span>Campus</span>
        </li>
      </ul>
      <!-- Lista social navbar -->
      <ul class="f-mode f-align-center">
        <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
        <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
        <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
        <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
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
  font-size: 0.8rem;
  li
  {
    margin-right: 15px;
    .iconeHeader
    {
      margin-right: 15px;
    }
    span
    {
      margin-right: 10px;
    }
  }
}
</style>
