<script>
  let { data } = $props();
  const users = data.user;
</script>

  <div class="card">
   
    <article class="front">

      <h1>{users.name}</h1>
      <p>{users.bio}</p>
      
    </article>

 
    <article class="back">
      <h2>About</h2>

      <section class="back-content">

        <div snap-item>
          <p>{users.custom}</p>
        </div>

        <div class="fav-item snap-item">
          <h3>Fav:</h3>
          <p>fav item</p>
        </div>

        <div class="snap-item">
          <p>Nog iets leuks?</p>
        </div>

      </section>

    </article>

  </div>
