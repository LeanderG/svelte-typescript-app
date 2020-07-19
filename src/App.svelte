<script lang="ts">
  import Tailwindcss from "./Tailwindcss.svelte";
  export let name: string;
</script>

<main class="container mx-auto">
  <h1 class="text-6xl text-orange-600">Hello {name}!</h1>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, aliquam!
  Pariatur dignissimos earum eaque, nam reprehenderit vitae necessitatibus
  exercitationem rerum? Laudantium placeat debitis ipsum animi unde dolorem
  voluptatibus possimus! Quia. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Illo quasi placeat quo provident minima quos accusantium
  alias ex porro, voluptatem cupiditate possimus est velit dolore quidem quas
  consequatur nobis libero!
  <div>
    <button class="btn btn-blue">Button</button>
  </div>

</main>

<Tailwindcss />
