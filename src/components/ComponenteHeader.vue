<template>
  <header>
    <div class="header-navbar">
      <!-- div per dare un margine automatico a destra e a sinistra -->
      <div class="contenitore">
        <!-- Header navbar contatti -->
        <div class="f-mode f-justify-between f-align-center">
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
          <ul class="f-mode f-align-center iconeSocial">
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
          </ul>
        </div>
      </div>
    </div>

    
    <!-- Header navbar menu -->
    <div class="header-menu contenitore f-mode f-align-center f-justify-between">
        <!-- Header menu logo -->
        <div>
          <img src="../assets/img/university_logo.png" alt="">
        </div>

        <!-- Header menu lista -->
        <ul class="f-mode">
          <li class="paginaAttiva">HOME</li>
          <li>ABOUT</li>
          <li>COURSES <span class="badge">NEW</span></li>
          <li>EVENTS</li>
          <li>FACILITIES</li>
          <li>NEWS</li>
          <li>ADMISSIONS <span class="badge">APPLY</span></li>
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
  font-size: 0.8rem;
  
  .header-navbar
  {
    background-color: #f09a3f;
    color: white;
    padding: 15px;
  }
  
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
  .iconeSocial > *
  {
    font-size: 1rem;
  }

  .header-menu
  {
    padding: 15px 0;
    
    li
    {
      font-weight: bold;
      font-size: 0.9rem;
      margin-left: 20px;
    }
    .paginaAttiva
    {
      color: #f09a3f;
    }
  }
  







  .badge
  {
    background-color: #00bcd4;
    color: white;
    font-size: 0.5rem;
    padding: 3px 5px;
    border-radius: 5px;
  }
}
</style>
