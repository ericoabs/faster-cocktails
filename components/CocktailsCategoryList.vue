<script setup lang="ts">
const cocktails = [
  {
    strCategory: "Ordinary Drink"
  },
  {
    strCategory: "Cocktail"
  },
  {
    strCategory: "Shake"
  },
  {
    strCategory: "Other / Unknown"
  },
  {
    strCategory: "Cocoa"
  },
  {
    strCategory: "Shot"
  },
  {
    strCategory: "Coffee / Tea"
  },
  {
    strCategory: "Homemade Liqueur"
  },
  {
    strCategory: "Punch / Party Drink"
  },
  {
    strCategory: "Beer"
  },
  {
    strCategory: "Soft Drink"
  }
]
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
          href="#"
          class="focus:outline-none text-center"
        >
          <p class="text-sm font-medium text-gray-900">{{ cocktail.strCategory }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
