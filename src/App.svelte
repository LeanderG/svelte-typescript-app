<script lang="ts">
  import Tailwindcss from "./Tailwindcss.svelte";
  export let name: string;

  let counter = 0;

  function click() {
    counter++;
  }
</script>

<main class="container mx-auto">
  <h1 class="text-6xl text-orange-600">Hello {name}!</h1>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, aliquam!
  Pariatur dignissimos earum eaque, nam reprehenderit vitae necessitatibus
  exercitationem rerum? Laudantium placeat debitis ipsum animi unde dolorem
  voluptatibus possimus!
  <div class="flex flex-col items-center">
    <div data-cy="increment-text" class="m-4">
      Button pressed {counter} {counter === 1 ? 'time' : 'times'}.
    </div>
    <button data-cy="increment-button" class="btn btn-blue" on:click={click}>
      Click me!
    </button>
  </div>

</main>

<Tailwindcss />
