<script setup lang="ts">
import { CocktailCategoryList, CocktailCategoryItem } from '@/types/cocktails'
const { $toast } = useNuxtApp();

const { data } = await useFetch<CocktailCategoryList>('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', {
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

const cocktails = computed(() => {
  if (!data) {
    return
  }

  return data.value?.drinks.map((item: CocktailCategoryItem) => (
    {
      strCategory: item.strCategory,
    }));
});
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="cocktail in cocktails"
      :key="cocktail.strCategory"
      class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div class="min-w-0 flex-1">
        <a
          class="focus:outline-none text-center"
          @click="navigateTo(`/category/${encodeURIComponent(cocktail.strCategory)}`)"
        >
          <p class="text-sm font-medium text-gray-900">
            {{ cocktail.strCategory }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
