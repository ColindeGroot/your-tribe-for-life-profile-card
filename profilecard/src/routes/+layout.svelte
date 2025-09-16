<script>
  import favicon from "$lib/assets/favicon.svg";
  import { sortUserPlugins } from "vite";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />

 
</svelte:head>

<main>
  {@render children?.()}
</main>
