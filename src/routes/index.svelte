<script>
  import { pokedex } from "../stores/pokestore";
  import Title from "../components/title.svelte";
  import PokemanCard from "../components/pokemonCard.svelte";

  let searchTerm = "";
  let filteredPokedex = [];

  $: {
    if (searchTerm.trim())
      filteredPokedex = $pokedex.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    else filteredPokedex = $pokedex;
  }
</script>

<svelte:head>
  <title>Svelte Kit Pokedex</title>
</svelte:head>

<Title title="Svelte Kit Pokedex" />

<div class="xl:max-w-6xl lg:max-w-4xl md:max-w-lg sm:max-w-2md my-0 mx-auto">
  <input
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
    name="search-input"
    placeholder="Search..."
    bind:value={searchTerm}
  />

  <div class="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5">
    {#each filteredPokedex as pokemon}
      <PokemanCard {pokemon} />
    {/each}
  </div>
</div>
