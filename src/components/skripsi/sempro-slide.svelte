<script>
  import Reveal from "reveal.js";
  import Markdown from "reveal.js/plugin/markdown/markdown";
  import Highlight from "reveal.js/plugin/highlight/highlight";
  import Notes from "reveal.js/plugin/notes/notes";
  import Zoom from "reveal.js/plugin/zoom/zoom";
  import Math from "reveal.js/plugin/math/math";
  import Mermaid from "reveal.js-mermaid-plugin/plugin/mermaid/mermaid";
  import "reveal.js/dist/reveal.css";
  import "reveal.js/dist/theme/dracula.css";
  import "reveal.js/plugin/highlight/monokai.css";
  import '../../styles/global.css';
  import { onMount } from "svelte";

  onMount(() => {
    const deck = new Reveal({
      autoAnimateEasing: "ease",
      autoAnimateDuration: 1,
      hash: true,
      controls: true,
      progress: true,
      slideNumber: "c/t",
    });

    deck.initialize({
      plugins: [Markdown, Highlight, Notes, Math, Mermaid, Zoom],
    });
  });
</script>

<div class="reveal">
  <div class="slides">
    <section
      data-markdown="/skripsian/sempro-slides/index.md"
      data-separator-vertical="^\n\n"
    >
      <div data-template></div>
    </section>
  </div>
</div>

<style>
  :root {
    --r-main-font-size: 30px;
  }
 
</style>
