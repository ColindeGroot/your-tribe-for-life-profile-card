<script>
  import favicon from "$lib/assets/favicon.svg";
  import { sortUserPlugins } from "vite";

  let { children } = $props();
</script>

<main>
  {@render children?.()}
</main>

<svelte:head>
  <link rel="icon" href={favicon} />

  <style>
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    main {
      background-color: red;
      perspective: 1000px;
      margin: auto;
      width: fit-content;
    }

    .card {
      position: relative;
      width: 500px;
      height: 500px;
      transform-style: preserve-3d;
      transition: transform 0.6s ease-in-out;
    }

    main:hover .card {
      transform: rotateY(180deg); /* Je kunt ook rotateX doen */
    }

    .front,
    .back {
      background: linear-gradient(145deg, #393e46 0%, #000 100%);
      color: #08d9d6;

      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      overflow: hidden;
    }

    .back {
      background: #222;
      color: #fff;
      transform: rotateY(180deg);
      padding: 1em;
      text-align: center;
    }

    .back-content {
      display: flex;
      flex-direction: column;
      gap: 1em;
      width: 100%;
    }

    .fav-item {
      border-top: 1px solid #444;
      padding-top: 0.5em;
    }
  </style>
</svelte:head>
