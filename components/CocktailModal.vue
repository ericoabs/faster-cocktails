<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['cocktail']);
const emit = defineEmits(['update:showModal']);

const closeModalOnOverlayClick = (event) => {
  // Verifica se o clique foi diretamente no overlay (fora do conteúdo do modal)
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const closeModal = () => {
  emit('update:showModal', false);
};
</script>

<template>
  <div
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
    @click="closeModalOnOverlayClick"
  >
    <div
      class="bg-white rounded-lg p-4 max-w-xl w-full"
      @click.stop
    >
      <img
        :src="cocktail.strDrinkThumb"
        alt="Cocktail Image"
        class="w-full mb-4 rounded-lg"
      >

      <h2 class="text-xl font-bold mb-2">
        {{ cocktail.strDrink }}
      </h2>

      <h3 class="font-semibold mb-1">
        Ingredients:
      </h3>
      <ul class="list-disc list-inside mb-4">
        <li
          v-for="(ingredient, index) in ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>

      <h3 class="font-semibold mb-1">
        Instructions:
      </h3>
      <p>{{ cocktail.strInstructions }}</p>

      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        @click="closeModal"
      >
        Close
      </button>
    </div>
  </div>
</template>


