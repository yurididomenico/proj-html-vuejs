<template>
  <footer>
    <div class="f-mode f-justify-between f-align-center">
      
      <ul class="f-mode">
        <li>
          <font-awesome-icon icon="fa-regular fa-copyright" class="iconaCopyright"/>
          <span>Theme Fusion</span>
          <span>All Rights Reserved</span>
        </li>
        
        <li>
          <span>Powered by WordPress</span>
        </li>
        
        <li>
          <span>Support#theme-fusion</span>
        </li>
        
        <li>
          <span>1.800.555.6789</span>
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
  </footer>
</template>

<script>
export default {
  name: 'CreditsSite'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer
{
  padding: 40px 100px;

  div
  {
    ul
    {
      li
      {
        margin: 0 10px;
        font-size: 0.8rem;
        color: grey;

        .iconaCopyright
        {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
