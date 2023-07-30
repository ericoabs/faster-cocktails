<script setup lang="ts">
import { ref } from 'vue';
import { CocktailListItem } from '@/types/cocktails'

const props = defineProps<{ cocktailList: CocktailListItem[] }>()

const showModal = ref(false);
const selectedCocktailId = ref('');

const cocktails = computed(() => {
  if (!props.cocktailList) {
    return
  }

  return props.cocktailList.map((item: CocktailListItem) => (
    {
      strDrink: item.strDrink,
      strDrinkThumb: item.strDrinkThumb,
      idDrink: item.idDrink,
    }));
});

const handleOpenModal = (id: string) => {
  selectedCocktailId.value = id
  showModal.value = true
}
</script>
<template>
  <div>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        class="col-span-1 flex flex-col    rounded-lg bg-white text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <img
            class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            :src="cocktail.strDrinkThumb"
            alt=""
          >
          <h3 class="mt-6 text-sm font-medium text-gray-900">
            {{ cocktail.strDrink }}
          </h3>
        </div>
        <div class="-mt-px flex">
          <div class="flex w-0 flex-1 justify-center items-center pb-8">
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded-md"
              @click="handleOpenModal(cocktail.idDrink)"
            >
              Show Details
            </button>
          </div>
        </div>
      </li>
    </ul>
    <CocktailModal
      v-if="showModal"
      :cocktail-id="selectedCocktailId"
      :show-modal="showModal"
      @update:showModal="showModal = $event"
    />
  </div>
</template>


