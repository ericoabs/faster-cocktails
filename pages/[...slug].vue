<template>
  <div>
    <NavBar />
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold">
        Page not found
      </h1>
      <p class="text-lg mt-4">
        The route <strong>{{ $route.fullPath }}</strong> does not exist.
      </p>
      <button
        class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="navigateTo('/')"
      >
        Go to Home
      </button>
    </div>
  </div>
</template>
