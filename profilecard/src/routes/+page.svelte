<script>
  let { data } = $props();
  const users = data.user;
  const favFilters = data.fav
</script>

  <div class="card">
   
    <article class="front">

      <h1>{users.name}</h1>
      <p>{users.bio}</p>
      
    </article>

 
    <article class="back">
      <h2>About</h2>

      <section class="back-content">

        <div>
          <p>{users.custom}</p>
        </div>

        <div class="fav-item">
          <h3>Fav:</h3>
          <ul>
            {#each favFilters as [content, subject]}
              {#if users[content]}
                <li>
                    <p><strong>{subject}</strong></p>
                    <p>{users[content]}</p>
                </li>
              {/if}
            {/each}
          </ul>
        </div>

        <div class="">
          <p>Nog iets leuks?</p>
        </div>

      </section>

    </article>

  </div>
