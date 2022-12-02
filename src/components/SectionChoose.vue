<template>
  <section>
    <div>
      <img src="../assets/img/page-logo-1.png" alt="">
      <p class="titolo">Inspired By Excelence & Innovation</p>
      <p class="sotto_titolo">We offer a wide range of high quality of teaching and extra-curricular activities.</p>
      <div class="linea"></div> 
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionChoose'
}
</script>

<style scoped lang="scss">

section
{
  padding: 100px 0;
  text-align: center;
  *
  {
    margin-bottom: 30px;
  }
  .linea
  {
    width: 150px;
    height: 1px;
    background-color: #f5c085;
    margin: auto;
  }
  .titolo
  {
    font-size: 2rem;
    font-weight: bold;
  }
  .sotto_titolo
  {
    font-size: 1.2rem;
  }
}

</style>
