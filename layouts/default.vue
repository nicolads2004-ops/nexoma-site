<template>
  <div class="min-h-screen">
    <!-- NAV -->
    <header class="fixed top-0 w-full z-50 transition-all duration-300"
      :class="scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5' : ''">
      <nav class="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-extrabold text-sm text-white">N</div>
          <span class="font-bold text-white tracking-tight">nexoma</span>
        </NuxtLink>
        <a href="#rdv" class="hidden sm:inline-flex btn-main !text-sm !px-5 !py-2.5">
          Audit gratuit →
        </a>
        <a href="#rdv" class="sm:hidden text-sm font-bold text-emerald-400">
          Audit gratuit →
        </a>
      </nav>
    </header>
    <main><slot /></main>
    <footer class="border-t border-white/5 py-10 px-5">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <span>&copy; {{ new Date().getFullYear() }} Nexoma — Poitiers, Vienne (86)</span>
        <span>contact@nexoma.fr</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
const scrolled = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 20 })
})
</script>
