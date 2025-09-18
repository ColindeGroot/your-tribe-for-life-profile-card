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
    @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 0;

      box-sizing: border-box;

      font-family: "Inter", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
    }

    h1,
    h2,
    h3,
    h4 {
      color: #08d9d6;
      margin:0;
    }

    h1{
      font-size:2.5em;
    }

    h2{
      font-size:1.8em;
      margin:1em;
    }

    h3{
      font-size:1.5em;
    }

    main {
      background-color: red;
      perspective: 1000px;
      margin: auto;
      width: fit-content;

      color: #fff;
      font-weight: medium;
    }

    .card {
      position: relative;
      width: 320px;
      height: 400px;
      transform-style: preserve-3d;
      transition: transform 0.5s ease-in-out;
    }

    @media (min-width: 800px) {
      .card {
        width: 700px;
        height: 500px;
      }
    }

    main:hover .card,
    main:active .card {
      transform: rotateY(180deg);
    }

    .front,
    .back {
      background: linear-gradient(145deg, #393e46 0%, #000 100%);
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;

      display: flex;
      flex-direction: column;
      border-radius: 10px;
      overflow: hidden;
    }

    .front{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .back {
      align-items: start;

      color: #fff;
      transform: rotateY(180deg);
      text-align: center;
      padding: 1rem;
      gap: 1rem;
      display: flex;
      flex-direction: column;
    }

    .back-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1em;
      height: 100%;

      overflow-y: auto;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;

      scrollbar-color: #08d9d6 transparent;
      scrollbar-width: thin;
    }

    .back-content > div {
      flex: 0 0 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      scroll-snap-align: start;
    }
  </style>
</svelte:head>
