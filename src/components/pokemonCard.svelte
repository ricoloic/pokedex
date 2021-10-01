<script>
	export let pokemon;
</script>

<a
	class="p-6 bg-gray-200 text-gray-900 text-center rounded-md shadow-sm hover:font-bold hover:shadow-lg flex flex-col items-center"
	href={`/pokemon/${pokemon.id}`}
>
	<div>
		<img class="w-40 h-40" src={pokemon.image} alt={pokemon.name} />
		<h1 class="uppercase">{pokemon.id} - {pokemon.name}</h1>
	</div>
</a>

<style>
	a:hover img {
		scale: 1.2;
	}
</style>
