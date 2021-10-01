import axios from "axios";
import { writable } from "svelte/store";

export const pokedex = writable([]);

const POKE_API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";
const POKE_API_IMAGE_ENDPOINT =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const processPokedex = (queryResponse) =>
    queryResponse.data.results.map((pokemon, i) => ({
        id: i + 1,
        ...pokemon,
        image: `${POKE_API_IMAGE_ENDPOINT}/${i + 1}.png`
    }));

const queryPokedex = async(pokemonAmount = 20) => {
    try {
        const response = await axios.get(POKE_API_ENDPOINT + `?count=${pokemonAmount}`);
        const processedPokedex = processPokedex(response);

        pokedex.set(processedPokedex);
    } catch (error) {
        console.error(error);
    }
};

queryPokedex();