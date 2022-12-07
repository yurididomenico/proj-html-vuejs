<template>
  <section>
    <div class="events-group f-mode">
      <div class="courses">
        <h2>COURSES</h2>
        <div class="linea"></div>
        <a href="#">View More</a>
      </div>
      <div class="events">
        <h2>EVENTS</h2>
        <div class="linea"></div>
        <a href="#">View More</a>
      </div>
      <div class="news">
        <h2>LATEST NEWS</h2>
        <div class="linea"></div>
        <a href="#">View More</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionEvents'
}
</script>

<style scoped lang="scss">
section
{
  color: white;
  img
  {
    display: block;
  }

  .events-group
  {
    >*
    {
      width: calc(100% / 3);
      aspect-ratio: 1/1;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      >*
      {
        margin: 15px 0;
      }
    }

    img
    {
      display: block;
    }

    

    .linea
    {
      background: rgba(229, 159, 25, 0.5);
      height: 3px;
      width: 60px;
    }

    .courses
    {
      background-image: url('../assets/img/home_courses_section_bg.jpg');
    }
    .events
    {
      background-image: url('../assets/img/home_events_section_bg.jpg');
    }
    .news
    {
      background-image: url('../assets/img/home_latest_news_section_bg.jpg');
    }
  }
  

}
</style>
