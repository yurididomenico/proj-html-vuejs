<template>
  <section>
    <div class="contenitore">
      <h2>Joining Over <span>500,000 Students </span>Enjoying Avada Education now</h2>
      <img src="../assets/img/YDD_Underline_Students_6.png" alt="">
      <!-- <img src="../assets/img/YDD_Underline_Students.png" alt=""> -->
      <p>Become Part of Avada University to Further Your Career</p>
      <form>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="tel" placeholder="Telephone">
        <a href="#">APPLY NOW</a>

      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionJoin'
}
</script>

<style scoped lang="scss">
section
{
  background-color: #333c4e;
  text-align: center;
  padding: 100px 0;

  .contenitore
  {
    position: relative;

    img
    {
      width: 315px;
      height: 15px;
      position: absolute;
      top: 21%;
      left: 23%;

    }
  }

  h2
  {
    color: white;
    font-size: 2rem;
    margin-bottom: 10px;

    span
    {
      color: #fea13e;
    }
  }

  

  p
  {
    color: grey;
    font-size: 1.2rem;
    margin-bottom: 60px;
  }

  form
  {
    
    input
    {
      background-color: #444d63;
      
      width: calc(100% / 5 - 10px);
      border: none;
      padding: 10px;
      margin: 0 10px;
    }
    a
    {
      background-color: #f09a3f;
      color: white;
      padding: 10px 50px;
      width: calc(100% / 4);
      font-size: 0.8rem;
      font-weight: bold;
    }
    input::placeholder
    {
      color: white;
    }
  }
}
</style>
