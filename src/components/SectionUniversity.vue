<template>
  <section>
    <div class="contenitore">
      <img src="../assets/img/page-logo-1.png" alt="">
      <p class="titolo">Today's University News</p>
      <p class="sotto_titolo">Covering topics from classes to politics and student organization events.</p>
      <div class="linea"></div>

      <div class="area-carte f-mode f-justify-between">
        <div class="carta image_1">
          <img src="../assets/img/news_single_post_header_1-800x444.jpg" alt="">
          <div>
            <h3>titolo</h3>
            <div>testo</div>
            <div class="f-mode f-justify-between">
              <a href="#">
                <span>Read More</span>
                <span>[]</span>
              </a>
              <a href="#">
                <span>[]</span>
                <span>0</span>
              </a>
            </div>
          </div>
        </div>

        <div class="carta image_2">
          <img src="../assets/img/news_single_post_header_2-800x444.jpg" alt="">
          <div>
            <h3>titolo</h3>
            <div>testo</div>
            <div class="f-mode f-justify-between">
              <a href="#">
                <span>Read More</span>
                <span>[]</span>
              </a>
              <a href="#">
                <span>[]</span>
                <span>0</span>
              </a>
            </div>
          </div>
        </div>

        <div class="carta image_3">
          <img src="../assets/img/news_single_post_header_3-800x444.jpg" alt="">
          <div>
            <h3>titolo</h3>
            <div>testo</div>
            <div class="f-mode f-justify-between">
              <a href="#">
                <span>Read More</span>
                <span>[]</span>
              </a>
              <a href="#">
                <span>[]</span>
                <span>0</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
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



  .area-carte
  {
    >div
    {
      width: calc((100% / 3) - 20px);
      aspect-ratio: 2/1;
      text-align: left;

      >div
      {
        padding: 20px
      }
    }

    

    .image_1
    {
      // background-image: url('../assets/img/news_single_post_header_1-800x444.jpg');
    }
    .image_2
    {
      // background-image: url('../assets/img/news_single_post_header_2-800x444.jpg');
    }
    .image_3
    {
      // background-image: url('../assets/img/news_single_post_header_3-800x444.jpg');
    }

    img
    {
      width: 100%;
    }

  }
}
</style>
