<template>
  <div class="min-h-screen flex flex-col">
    <header class="fixed top-0 w-full z-50 bg-dark-950/80 backdrop-blur-md border-b border-white/5">
      <nav class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold">
          <span class="text-primary-500">Nex</span><span class="text-white">oma</span>
        </NuxtLink>
        <div class="hidden md:flex items-center gap-8">
          <a href="#services" class="text-sm text-gray-300 hover:text-white transition">Services</a>
          <a href="#cas-usage" class="text-sm text-gray-300 hover:text-white transition">Cas d'usage</a>
          <a href="#process" class="text-sm text-gray-300 hover:text-white transition">Comment ça marche</a>
          <a href="#faq" class="text-sm text-gray-300 hover:text-white transition">FAQ</a>
          <a href="#contact" class="btn-primary text-sm !py-2 !px-4">Prendre RDV</a>
        </div>
        <button class="md:hidden text-white" @click="menuOpen = !menuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
      <div v-if="menuOpen" class="md:hidden bg-dark-950/95 backdrop-blur-md border-b border-white/5 px-4 py-4 flex flex-col gap-4">
        <a href="#services" class="text-gray-300 hover:text-white" @click="menuOpen = false">Services</a>
        <a href="#cas-usage" class="text-gray-300 hover:text-white" @click="menuOpen = false">Cas d'usage</a>
        <a href="#process" class="text-gray-300 hover:text-white" @click="menuOpen = false">Comment ça marche</a>
        <a href="#faq" class="text-gray-300 hover:text-white" @click="menuOpen = false">FAQ</a>
        <a href="#contact" class="btn-primary text-sm text-center" @click="menuOpen = false">Prendre RDV</a>
      </div>
    </header>

    <main class="flex-1 pt-16">
      <slot />
    </main>

    <footer class="border-t border-white/5 bg-dark-950">
      <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <span class="text-xl font-bold"><span class="text-primary-500">Nex</span>oma</span>
            <p class="mt-3 text-sm text-gray-400">Agents IA sur-mesure pour PME.<br>Poitiers & Vienne (86).</p>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Navigation</h4>
            <div class="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#services" class="hover:text-white transition">Services</a>
              <a href="#cas-usage" class="hover:text-white transition">Cas d'usage</a>
              <a href="#process" class="hover:text-white transition">Comment ça marche</a>
              <a href="#faq" class="hover:text-white transition">FAQ</a>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Contact</h4>
            <div class="flex flex-col gap-2 text-sm text-gray-400">
              <a href="mailto:contact@nexoma.fr" class="hover:text-white transition">contact@nexoma.fr</a>
              <p>Poitiers, France</p>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Nexoma. Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const menuOpen = ref(false)
</script>
