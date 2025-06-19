<script>
export default {
  props: {
    pokemon: {
      type: Object,
      requiere: true,
    }
  }
}
</script>
<template>
  <div class="w-full min-h-full flex flex-col items-center">
    <h1 class="text-2xl font-bold text-center">{{ capitalize(pokemon.name.fr) }}</h1>
    <img :src="pokemon.sprites.regular" alt="Sprite" loading="lazy" width="300px" height="300px" />
  </div>
</template>