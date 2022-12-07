<template>
  <section>
    <div>
      <div>
        <div class="titolo">Inspiring Tomorrows Leaders</div>
        <div class="sotto_titolo">The Future Belongs To Those Who See Poossibilities Today</div>
      </div>
      <div class="bottoni">
        <a href="#" class="bg-arancione">FIND A COURSE</a>
        <a href="#" class="bg-azzurrino">APPLY NOW</a>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'SectionJumbotron'
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital@1&display=swap');

section
{
  background-image: url('../assets/img/home_main_slider_bg.jpg');
  background-position: center;
  // font-family: 'Playfair Display SC', serif;

  color: white;
  >div
  {
    padding: 300px 0;
    text-align: center;
    .titolo
    {
      font-size: 4.5rem;
      margin-bottom: 15px;
    }
    .sotto_titolo
    {
      font-size: 1.5rem;
      margin-bottom: 0px;
    }
    .bottoni
    {
      margin: 50px 0;

      a
      {
        padding: 10px 30px;
        margin: 0 10px;
        font-size: 0.8rem;
        font-weight: bold;

        
      }

      .bg-arancione:hover
      {
        background-color: #90591f;
      }

      .bg-azzurrino:hover
      {
        background-color: #068494;
      }


    }
  }
}
</style>
