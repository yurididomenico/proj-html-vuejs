<template>
  <section>
    <div class="contenitore f-mode f-justify-between">
      <div class="class-facilities">
        <h2>WORLD CLASS FACILITIES</h2>
        <p>Avada University is devoted to excellence in teaching, learning, and research, and developing leaders in mani disciplines who make a difference globally.</p>
        <div class="facilities-middle">
          <div class="f-mode f-align-center">
            <font-awesome-icon icon="fa-solid fa-globe" />
            <h3>International focus <span>- our students come from across the globe</span></h3>
          </div>
          <div class="f-mode f-align-center">
            <font-awesome-icon icon="fa-solid fa-graduation-cap" />
            <h3 class="test">Residential courses <span>- we encourage learning and growth</span></h3>
          </div>
          <div class="f-mode f-align-center">
            <font-awesome-icon icon="fa-solid fa-address-book" />
            <h3>People not profits <span>- education is a right not a privilege</span></h3>
          </div>
        </div>
        <p>If you prefer to study in your own time and at your own speed then on of our e-learning packages may be right up your street.</p>
      </div>

      <div class="class-values">
        <h2>OUR VALUES</h2>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <h3>OUR MISSION</h3>
        </a>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <h3>OUR PHILOSOPHY</h3>
        </a>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <h3>OUR COMMITMENT</h3>
        </a>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <h3>OUR PROMISE</h3>
        </a>
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <h3>OUR VALUES</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionClass'
}
</script>

<style scoped lang="scss">
section
{
  background-color: #f7f5f4;
  padding: 100px 0;


  .class-facilities
  {
    flex-basis: 55%;
    padding-right: 30px;

    >*
    {
      margin-bottom: 30px;
    }
    .facilities-middle
    {
      font-size: 0.8rem;
      span
      {
        color: #4a4b4b;
        font-weight: normal;
      }
      div
      {
        margin-bottom: 20px;
        
        h3
        {
          margin-left: 10px;
        }
        .test
        {
          margin-left: 5px;
        }
      }
    }
  }


  .class-values
  {
    flex-basis: 40%;
    font-weight: bold;

    h2
    {
      margin-bottom: 20px;
    }

    a
    {
      display: flex;
      align-items: center;
      padding: 15px;
      background-color: white;
      margin-bottom: 10px;
      margin-left: 20px;
      color: #ffab0b;
      

      h3
      {
        font-size: 0.9rem;
        margin-left: 20px;
      }
    }

  }
}
</style>
