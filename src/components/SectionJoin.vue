<template>
  <section>
    <div class="contenitore">
      <h2>Joining Over <span>500,000 Students </span>Enjoying Avada Education now</h2>
      <p>Become Part of Avada University to Further Your Career</p>
      <form>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="number" placeholder="Telephone">
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

  h2
  {
    color: white;
    font-size: 2rem;
    span
    {
      color: #ffab0b;
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
