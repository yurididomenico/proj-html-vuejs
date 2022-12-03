<template>
  <footer class="f-mode">
    <div>
      <h3>AVADA UNIVERSITY</h3>
      <ul class="avada-university">
        <li>
          <font-awesome-icon icon="fa-solid fa-house-chimney" />
          <p>Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA</p>
        </li>
        <li>
          <font-awesome-icon icon="fa-solid fa-phone-flip" />
          <p>1.800.458.556</p>
        </li>
        <li>
          <font-awesome-icon icon="fa-regular fa-envelope" />
          <p class="fowe">info@your-domain.com</p>
        </li>
        <li>
          <font-awesome-icon icon="fa-regular fa-clock" />
          <p>Monday - Friday: 9:00 AM - 10:PM</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>RECENT POSTS</h3>
      <ul class="recent-posts">
        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="freccia-destra"/>
        
            <div>
              <span class="domanda">What do successful grads think you should study?</span>
              <div class="data">March 16, 2016</div>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="freccia-destra"/>

            <div>
              <span class="domanda">Former student discusses success in the fashion industry</span>
              <div class="data">March 15, 2016</div>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="freccia-destra"/>

            <div>
              <span class="domanda">How do you best prepare for university?</span>
              <div class="data">March 15, 2016</div>
            </div>
          </a>
        </li>
        
      </ul>
    </div>
    <div class="dinamiche f-mode flex-wrap">
      <div>
        <h3>COURSES</h3>
        <ul>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
        </ul>
      </div>
      <div>
        <h3>RESOURCES</h3>
        <ul>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
        </ul>
      </div>
      <div>
        <h3>ADMISSION</h3>
        <ul>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
        </ul>
      </div>
      <div>
        <h3>QUICKLINKS</h3>
        <ul>
          <li>li_testo</li>
          <li>li_testo</li>
          <li>li_testo</li>
        </ul>
      </div>
    </div>
    <div><h3>UPCOMING EVENTS</h3><span>a</span></div>
  </footer>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer
{
  padding: 100px;
  >div
  {
    flex-basis: 20%;
  }

  .dinamiche
  {
    >div
    {
      flex-basis: 50%;
      margin-bottom: 50px;
    }
  }

  h3
  {
    margin-bottom: 30px;
  }

  .avada-university
  {
    padding-right: 70px;
    li
    {
      display: flex;
      margin-bottom: 20px;

      p
      {
        font-size: 0.8rem;
        margin-left: 10px;
      }
    }
  }

  .recent-posts
  {
    padding-right: 70px;
    li
    {
      padding-bottom: 10px;
      margin-bottom: 30px;
      border-bottom: 1px solid lightgrey;

      a
      {
        display: flex;
      }

      .domanda //domanda
      {
        color: black;
        font-weight: bold;
      }
      .freccia-destra
      {
        font-size: 0.6rem;
        padding-right: 5px;
        padding-top: 5px;
      }
      
      .data //data
      {
        font-size: 0.8rem;
        color: grey;
        margin-top: 10px;
      }
    
    }
  }
}
</style>
