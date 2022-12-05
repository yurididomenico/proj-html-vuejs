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
          <li>Arts & Humanities</li>
          <li>Business & Management</li>
          <li>Engineering & Technology</li>
          <li>Life Sciences & Medicine</li>
          <li>Natural Sciences</li>
        </ul>
      </div>
      <div>
        <h3>RESOURCES</h3>
        <ul>
          <li>Campus Directory</li>
          <li>Academic Calendar</li>
          <li>Sport Clubs</li>
          <li>Graduate Programs</li>
          <li>Faculty & Staff</li>
        </ul>
      </div>
      <div>
        <h3>ADMISSION</h3>
        <ul>
          <li>Eligibility</li>
          <li>Application</li>
          <li>Review Process</li>
          <li>How to Apply</li>
        </ul>
      </div>
      <div>
        <h3>QUICKLINKS</h3>
        <ul>
          <li>University Library</li>
          <li>Campus Services</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
    <div class="upcoming">
      <h3>UPCOMING EVENTS</h3>
      <ul>
        <li class="f-mode f-align-center">
          <div class="calendar">
            <div>FRI</div>
            <span>27</span>
          </div>
          <div class="events-info">
            <h5>Business Seminar</h5>
            <p>July 1, 2019 @ 8:00 am - July 1, 2021 @ 5:00 pm</p>
            <p>United States</p>
          </div>

        </li>

        <li class="f-mode f-align-center">
          <div class="calendar">
            <div>FRI</div>
            <span>27</span>
          </div>
          <div class="events-info">
            <h5>Politics Seminar</h5>
            <p>November 6, 2019 @ 8:00 am - November 6, 2021 @ 5:00 pm</p>
            <p>United Kingdom</p>
          </div>
        </li>
      </ul>
      <a href="#@">View More...</a>
    </div>
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
  

  .dinamiche
  {
    width: 800px;

    >div
    {
      flex-basis: 50%;
      margin-bottom: 50px;

      >ul
      {
        
        >li
        {
          margin-bottom: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
      }
    }
  }

  h3
  {
    margin-bottom: 30px;
  }

  .avada-university
  {
    padding-right: 70px;
    width: 300px;
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
    width: 450px;

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

  .upcoming
  {
    ul
    {
      li
      {
        border-bottom: 1px solid rgb(237, 237, 237);
        margin-bottom: 20px;
        .calendar
        {
          background-color: #f09a3f;
          color: white;
          padding: 3px;
          margin-right: 20px;
          

          div
          {
            background-color: white;
            color: #f09a3f;
            font-size: 0.6rem;
            font-weight: bold;
            padding: 15px;
            padding-right: 13px;
          }
          span
          {
            text-align: center;
            display: block;
            font-weight: bold;
          }

        }
        .events-info
        {
          >*
          {
            margin-bottom: 15px;
          }
          p
          {
            font-size: 0.8rem;
          }
        }
      }
    }

    a
    {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
}
</style>
