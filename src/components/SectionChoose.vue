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
        <div class="logoV"><img src="../assets/img/letter-v-128.png" alt=""></div>
        <div class="titoloVideo">
          <span class="mainTitle">TVC / Saratov / University</span>
          <span class="subTitle"><span class="color-white">from</span> N3</span>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
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
  .titolo,
  .sotto_titolo,
  .linea
  {
    margin-bottom: 30px;
  }
  
  
  div
  {
    margin-bottom: 100px;
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
    width: 70%;
    padding-top: 40px;
    
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
  }
  
}

</style>
