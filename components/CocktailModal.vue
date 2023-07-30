<script setup lang="ts">
import { CocktailItemList } from '@/types/cocktails'
import { convertIngredients } from '@/helpers/convertIngredients'
const { $toast } = useNuxtApp();

const props = defineProps<{ cocktailId: string }>();

const cocktailId = computed(() => {
  return props.cocktailId
})

const emit = defineEmits(['update:showModal']);

const closeModalOnOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const closeModal = () => {
  emit('update:showModal', false);
};

const { data } = await useFetch<CocktailItemList>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId.value}`, {
  onResponseError({ request, response, options }) {
    if (response.status === 500) {
      $toast.error('Ops! Tivemos um interno, tente novamente mais tarde.', {
        position: 'top-right'
      });
      return
    } else if (response.status === 400) {
      $toast.error('Ops! Requisição inválida.', {
        position: 'top-right'
      });
      return
    }
    $toast.error('Ops! Não conseguimos processar sua requisição, tente novamente mais tarde', {
      position: 'top-right'
    });
  }
})

const cocktail = computed(() => {
  if (!data) {
    return
  }

  const ingredients = convertIngredients(data.value?.drinks[0])

  return {
    id: data.value?.drinks[0].idDrink,
    name: data.value?.drinks[0].strDrink,
    thumb: data.value?.drinks[0].strDrinkThumb,
    instructions: data.value?.drinks[0].strInstructions,
    ingredients: ingredients
  }
});
</script>

<template>
  <div
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
    @click="closeModalOnOverlayClick"
  >
    <div
      class="bg-white rounded-lg p-4 max-w-xl w-full text-center overflow-y-auto"
      @click.stop
    >
      <img
        :src="cocktail?.thumb"
        alt="Cocktail Image"
        class="w-full mb-4 rounded-lg"
      >
      <h2 class="text-xl font-bold mb-2">
        {{ cocktail?.name }}
      </h2>

      <h3 class="font-semibold mb-1">
        Ingredients:
      </h3>

      <ul class="list-disc list-inside mb-4">
        <li
          v-for="(ingredient, index) in cocktail?.ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>

      <h3 class="font-semibold mb-1">
        Instructions:
      </h3>
      <p>{{ cocktail?.instructions }}</p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        @click="closeModal"
      >
        Close
      </button>
    </div>
  </div>
</template>


