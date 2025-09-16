<script>
  import favicon from "$lib/assets/favicon.svg";
  import { sortUserPlugins } from "vite";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />

  <style>
    section {
      width: 80vw;
      height: 380px;
      position: relative;

	  margin: auto;

      transform-style: preserve-3d;
      transition: transform 0.6s ease-in-out;
      will-change: transform;
      perspective: 1000px;

	  background: #393E46;
	  background: linear-gradient(145deg, rgba(57, 62, 70, 1) 0%, rgba(0, 0, 0, 1) 100%);

      &:hover {
        transform: rotateX(180deg);
      }
    }

    @media (min-width: 700px;) {
      section {
        width: 600px;
      }
    }
  </style>
</svelte:head>

<main>
  {@render children?.()}
</main>
