<script>
  let { data } = $props();
  const users = data.user;
  const favFilters = data.fav
</script>

  <div class="card">
   
    <article class="front">

      <h1>{users.name}</h1>
      <p>Software developer/FDND student</p>
      
    </article>

 
    <article class="back">
      <h2>About</h2>

      <section class="back-content">

        <div class="bio">
          <p>{users.bio}</p>
        </div>

        <div class="fav-item">
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
