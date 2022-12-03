<template>
  <section>
    <div>
      <img src="../assets/img/page-logo-1.png" alt="">
      <p class="titolo">Today's University News</p>
      <p class="sotto_titolo">Covering topics from classes to politics and student organization events.</p>
      <div class="linea"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionUniversity'
}
</script>

<style scoped lang="scss">
section
{
  text-align: center;
  padding: 100px 0;

  >div>img
  {
    margin-bottom: 40px;
  }

  .titolo,
  .sotto_titolo
  {
    margin-bottom: 30px;
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
  .linea
  {
    width: 150px;
    height: 1px;
    background-color: #f5c085;
    margin: auto;
    margin-bottom: 80px;
  }
}
</style>
