<script>

  let { data } = $props();
  const users = data.user;

</script>

<section>

  <article class="front">

    <img src="" alt="" />
    <h1>{users.name}</h1>
    <p>hier komt intro</p>

    <button>lees meer</button>

  </article>

  <article class="back">
      
    <h2>About</h2>
    
    <div class="back-content">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo assumenda natus corrupti, deserunt magni doloremque rerum. Similique, culpa rem vel ipsum est fugiat dolor officia modi, expedita, quo unde doloribus.
      </p>

      <div class="fav-item">
          <h3>fav:</h3>
          <p>fav item</p>
      </div>

      <p>
        nog iets leuks?
      </p>

    </div>

  </article>

</section>
