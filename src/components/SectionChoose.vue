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
        <span>titolo</span>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis mollitia aliquam delectus repellendus distinctio reiciendis, officia, earum ipsum veritatis enim nobis laborum laboriosam similique sequi accusamus velit, cum modi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis mollitia aliquam delectus repellendus distinctio reiciendis, officia, earum ipsum veritatis enim nobis laborum laboriosam similique sequi accusamus velit, cum modi.</p>
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
    padding-right: 50px;
    
    span
    {
      font-size: 2rem;
      font-weight: bold;
    }
    div
    {
      line-height: 1.8rem;
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
