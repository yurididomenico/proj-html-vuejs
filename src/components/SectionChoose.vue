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
        <img src="../assets/img/University_img.jpg" alt="">
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
  div
  {
    margin-bottom: 100px;
  }
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
    width: 70%;
    padding-top: 40px;
    img
    {
      width: 100%;
    }
  }
  
}

</style>
