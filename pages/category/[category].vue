<script setup lang="ts">
import { CocktailList } from '@/types/cocktails'
const { $toast } = useNuxtApp();
const route = useRoute()

const queryParam = ref('')

onMounted(() => {
  queryParam.value = decodeURIComponent(route.params.category as string);
});

const { data } = await useFetch<CocktailList>(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${route.params.category}`, {
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
</script>

<template>
  <div>
    <NavBar />
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8 text-center">
        <h1 class="text-3xl font-semibold text-gray-800">
          {{ queryParam }}
        </h1>
      </header>
      <CocktailsList
        v-if="data"
        :cocktail-list="data.drinks"
      />
    </div>
  </div>
</template>
