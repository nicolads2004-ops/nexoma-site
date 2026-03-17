<template>
  <div class="min-h-screen flex flex-col">
    <!-- NAV -->
    <header class="fixed top-0 w-full z-50 transition-all duration-300" :class="scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-transparent'">
      <nav class="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white text-sm transition-transform group-hover:scale-105">
            N
          </div>
          <span class="text-[17px] font-bold tracking-tight text-gray-900">nexoma</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-1">
          <a v-for="link in navLinks" :key="link.href" :href="link.href"
            class="px-4 py-2 text-[14px] text-gray-500 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-all duration-150">
            {{ link.label }}
          </a>
        </div>

        <div class="hidden md:flex items-center gap-3">
          <a href="#contact" class="btn-primary text-[14px] !px-5 !py-2.5">
            Prendre RDV
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        <button class="md:hidden p-2 text-gray-600" @click="menuOpen = !menuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100" leave-active-class="transition duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0 -translate-y-1">
        <div v-if="menuOpen" class="md:hidden bg-white border-b border-gray-100 shadow-lg px-6 py-5 flex flex-col gap-1">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition" @click="menuOpen = false">{{ link.label }}</a>
          <a href="#contact" class="btn-primary text-center mt-3" @click="menuOpen = false">Prendre RDV</a>
        </div>
      </Transition>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="bg-gray-50 border-t border-gray-100">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid md:grid-cols-4 gap-10">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">N</div>
              <span class="text-[17px] font-bold tracking-tight">nexoma</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
              Agents IA sur-mesure pour PME. On automatise ce qui vous ralentit pour que vous puissiez vous concentrer sur ce qui compte.
            </p>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">Navigation</h4>
            <div class="flex flex-col gap-3">
              <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm text-gray-500 hover:text-gray-900 transition">{{ link.label }}</a>
            </div>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">Contact</h4>
            <div class="flex flex-col gap-3 text-sm text-gray-500">
              <a href="mailto:contact@nexoma.fr" class="hover:text-gray-900 transition">contact@nexoma.fr</a>
              <p>Poitiers, Vienne (86)</p>
            </div>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-xs text-gray-400">&copy; {{ new Date().getFullYear() }} Nexoma. Tous droits réservés.</p>
          <div class="flex gap-6 text-xs text-gray-400">
            <a href="#" class="hover:text-gray-600 transition">Mentions légales</a>
            <a href="#" class="hover:text-gray-600 transition">Confidentialité</a>
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
  { href: '#resultats', label: 'Résultats' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>
