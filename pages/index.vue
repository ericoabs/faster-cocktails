<script setup lang="ts">
</script>

<template>
  <div>
    <NavBar />
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8 text-center">
        <h1 class="text-3xl font-semibold text-gray-800">
          Pick a Cocktail category!
        </h1>
      </header>

      <CocktailsCategoryList />

      <footer class="mt-8 text-center">
        <p class="text-gray-500">
          © 2023 All Rights Reserved.
        </p>
      </footer>
    </div>
  </div>
</template>
