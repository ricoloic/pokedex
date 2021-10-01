<script>
	import Nav from "../components/nav.svelte";
</script>

<div class="p-5 max-6-6xl mx-auto">
	<Nav />

	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
