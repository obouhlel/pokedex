<script lang="ts" setup>
import { UiLeftArrow, UiPokemonCard, UiRightArrow } from '#components'
import { ref, computed, watch } from 'vue'
import type { Pokemon } from '~/types/pokemon.type'

const id = ref<number>(1);
const max = 1025;

const { data, status, error, refresh, clear } = await useFetch<Pokemon>(() => `https://tyradex.vercel.app/api/v1/pokemon/${id.value}`);

const pokemon = computed<Pokemon | null>(() => data.value);

watch(id, () => {
  clear();
  refresh();
})

function nextPokemon() {
  id.value++;
  if (id.value === 0) {
    id.value = max;
  } else if (id.value === max + 1) {
    id.value = 1;
  }
}

function previousPokemon() {
  id.value--;
  if (id.value === 0) {
    id.value = max;
  } else if (id.value === max + 1) {
    id.value = 1;
  }
}
</script>

<template>
  <div class="w-full min-h-[calc(100vh-56px-32px)] flex flex-col items-center justify-center">
    <div v-if="pokemon" class="w-full h-full flex-1 flex items-center justify-center">
      <UiLeftArrow @click="previousPokemon" />
      <UiPokemonCard :pokemon="pokemon" />
      <UiRightArrow @click="nextPokemon" />
    </div>
    <div v-else class="w-full h-full flex items-center justify-center">
      <div class="pokeball" />
    </div>
  </div>
</template>

<style scoped>
@import '~/assets/styles/pokeball.css';
</style>