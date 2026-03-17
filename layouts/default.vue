<template>
  <div class="min-h-screen flex flex-col noise-bg">
    <!-- NAV -->
    <header class="fixed top-0 w-full z-50 transition-all duration-500" :class="scrolled ? 'bg-[#050510]/80 backdrop-blur-xl border-b border-white/5' : ''">
      <nav class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center font-display font-bold text-sm transition-transform group-hover:scale-110">
            N
          </div>
          <span class="text-lg font-display font-bold tracking-tight">nexoma</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-1">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
            {{ link.label }}
          </a>
        </div>

        <div class="hidden md:flex items-center gap-3">
          <a href="#contact" class="btn-primary text-sm !px-5 !py-2.5">
            Appel gratuit
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <button class="md:hidden text-white p-2" @click="menuOpen = !menuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile menu -->
      <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="menuOpen" class="md:hidden bg-[#050510]/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 flex flex-col gap-2">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition" @click="menuOpen = false">{{ link.label }}</a>
          <a href="#contact" class="btn-primary text-sm text-center mt-2" @click="menuOpen = false">Appel gratuit</a>
        </div>
      </Transition>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="relative border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-4 gap-10">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center font-display font-bold text-xs">N</div>
              <span class="text-lg font-display font-bold">nexoma</span>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed max-w-sm">
              On transforme les PME de Poitiers et de la Vienne avec des agents IA qui automatisent le travail répétitif. Plus de temps pour ce qui compte vraiment.
            </p>
          </div>
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</h4>
            <div class="flex flex-col gap-3">
              <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm text-gray-500 hover:text-white transition">{{ link.label }}</a>
            </div>
          </div>
          <div>
            <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
            <div class="flex flex-col gap-3 text-sm text-gray-500">
              <a href="mailto:contact@nexoma.fr" class="hover:text-white transition">contact@nexoma.fr</a>
              <p>Poitiers, France</p>
            </div>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-gray-600">&copy; {{ new Date().getFullYear() }} Nexoma. Tous droits réservés.</p>
          <div class="flex gap-6 text-xs text-gray-600">
            <a href="#" class="hover:text-gray-400 transition">Mentions légales</a>
            <a href="#" class="hover:text-gray-400 transition">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const menuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#cas-usage', label: 'Cas d\'usage' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>
