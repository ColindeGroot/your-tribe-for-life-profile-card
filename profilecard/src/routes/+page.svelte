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
            <br/>
            assumenda natus corrupti, deserunt magni doloremque rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus veniam quae perspiciatis at voluptatem eligendi aliquam consequuntur temporibus voluptate, consectetur rem perferendis amet nemo culpa fugit nostrum. Incidunt, facere?
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
