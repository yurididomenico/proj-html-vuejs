<template>
  <section>
    <div>
      <img src="../assets/img/page-logo-1.png" alt="">
      <p class="titolo">Inspired By Excelence & Innovation</p>
      <p class="sotto_titolo">We offer a wide range of high quality of teaching and extra-curricular activities.</p>
      <div class="linea"></div> 
    </div>

    <div class="contenitore f-mode choose">
      <div class="chooseText">
        <span>WHY CHOOSE AVADA UNIVERSITY?</span>
        <div>
          <p>We offer a range of training packages in a range of subject areas and can offer blended learning opportunities to best meet your needs. If sitting in a room with a trainer and having the opportunity for discussion with other learners sounds good to you then we can offer this. If you prefer to study in your own time and at your own speed then on of our world class facilities.</p>
          <p>If you prefer to study in your own time and at your own speed then one of our e-learning packages may be right up your street. There is a third option, which is you like the sound of both but perhaps can't attend all training session, this is when blended learning comes into its own.</p>
        </div>
      </div>
      <div class="chooseImg">
        <!-- logo -->
        <div class="logoV"><img src="../assets/img/letter-v-128.png" alt=""></div>
        <!-- titolo video e canale -->
        <div class="titoloVideo">
          <span class="mainTitle">TVC / Saratov / University</span>
          <span class="subTitle"><span class="color-white">from</span> N3</span>
        </div>
        <!-- pulsante play e control panel del video -->
        <div class="control_panel">
          <!-- pulsante -->
          <a href="#"><font-awesome-icon icon="fa-solid fa-play" /></a>
          <!-- control panel -->
          <div class="barraVimeo">
            <div class="durataVideo"></div>
            <div><font-awesome-icon icon="fa-solid fa-signal" class="fa-segnale"/></div>
            <div><font-awesome-icon icon="fa-solid fa-gear" /></div>
            <div><font-awesome-icon icon="fa-solid fa-maximize" /></div>
            <div>Vimeo</div>
          </div>

          <div class="durationVimeo">
            <div class="time">00:10</div>
            <div class="iconaDropdown">
              <font-awesome-icon icon="fa-solid fa-caret-down"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divisione_Triangolare">
      <img src="../assets/img/YDD_Triangolo.png" alt="">
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
  padding: 100px 0 0;
  text-align: center;

  // >div>img:not(.divisione_Triangolare)
  // {
  //   margin-bottom: 40px;
  // }
  .titolo,
  .sotto_titolo
  {
    margin-bottom: 30px;
  }
  .choose
  {
    padding-bottom: 50px;
  }
  
  .linea
  {
    width: 150px;
    height: 1px;
    background-color: #f5c085;
    margin: auto;
    margin-bottom: 80px;
  }
  .titolo
  {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 40px;
  }
  .sotto_titolo
  {
    font-size: 1.2rem;
  }

  .chooseText
  {
    text-align: left;
    width: 130%;
    padding-right: 80px;
    
    span
    {
      font-size: 1.5rem;
      font-weight: bold;
    }
    div
    {
      line-height: 1.8rem;
      margin-top: 30px;
      color: #4a4b4b;
    }    
  }




  .chooseImg
  {
    background-image: url('../assets/img/University_img.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    width: 100%;
    
    .logoV
    {
      width: 50px;
      background-color: black;
      border-radius: 100%;
      position: absolute;
      top: 15px;
      left: 15px;
      img
      {
        display: block;
        padding: 15px;
        width: 100%;
      }
    }
    .titoloVideo
    {
      color: #00b6fb;
      position: absolute;
      top: 20px;
      left: 70px;
      .mainTitle
      {
        font-size: 1.2rem;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.5);
        padding: 2px;
        
      }
      .subTitle
      {
        background: rgba(0, 0, 0, 0.5);
        padding: 2px;
        position: absolute;
        top: 26px;
        left: 0;
      }
      
    }

    .control_panel
    {
      color: white;
      padding: 10px;
      a
      { 
        background: rgba(0, 0, 0, 0.8);
        padding: 4px 25px;
        font-size: 1.4rem;
        border-radius: 6px;
        position: absolute;
        top: 62%;
        left: 3%; 
        &:hover
        {
          transform: scale(1.2);
        }       
      }
      .barraVimeo
      { 
        background: rgba(0, 0, 0, 0.8);
        position: absolute;
        top: 64%;
        left: 20%;
        width: 340px;
        display: flex;
        align-items: center;
        padding: 5px 10px;
        

        .durataVideo
        {
          border: 2px solid grey;
          height: 10px;
          width: 50%;
        }
        div
        {
          padding-right: 10px;
        }
        .fa-segnale
        {
          color: #00b5fb;
          padding-left: 10px;
        }


        &:hover
        {
          cursor: pointer;
        }
      }
      
      .durationVimeo
      {
        position: absolute;
        top: 60%;
        left: 19%;
        box-shadow: 3px 3px 0 black;
        .time
        {
          background-color: white;
          color: black;
          font-size: 0.5rem;
          font-weight: bold;
          padding: 5px;
        }
        .iconaDropdown
        {
          position: absolute;
          top: 60%;
          left: 35%;
          
        }
        
      }
    }
  }
  .divisione_Triangolare
  {
    width: 100%;
    img
    {
      width: 100%;
      display: block;
    }
  }
}

</style>
