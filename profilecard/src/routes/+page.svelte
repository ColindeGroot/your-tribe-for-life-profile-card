<script>
  let { data } = $props();
  const users = data.user;
</script>

  <div class="card">
   
    <article class="front">

      <h1>{users.name}</h1>
      <p>hier komt intro</p>
      <button>lees meer</button>
      
    </article>

 
    <article class="back">
      <h2>About</h2>

      <section class="back-content">

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            assumenda natus corrupti, deserunt magni doloremque rerum.
          </p>
        </div>

        <div class="fav-item">
          <h3>Fav:</h3>
          <p>fav item</p>
        </div>

        <div>
          <p>Nog iets leuks?</p>
        </div>

      </section>

    </article>

  </div>
