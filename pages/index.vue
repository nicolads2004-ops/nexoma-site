<template>
  <div>
    <!-- HERO -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <!-- Subtle background -->
      <div class="absolute inset-0 bg-grid" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />

      <div class="relative max-w-6xl mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Badge -->
          <div class="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span class="text-sm font-medium text-emerald-700">Agence IA — Poitiers &amp; Vienne (86)</span>
          </div>

          <!-- Title -->
          <h1 class="animate-fade-up delay-1 text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] mb-6">
            Automatisez votre business avec des
            <span class="text-gradient">agents IA</span>
          </h1>

          <!-- Subtitle -->
          <p class="animate-fade-up delay-2 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Nexoma crée des agents IA sur-mesure pour les PME. Devis, relances, prospection, support — on automatise ce qui vous ralentit.
          </p>

          <!-- CTAs -->
          <div class="animate-fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="btn-primary text-base px-8 py-4">
              Réserver un appel gratuit
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#resultats" class="btn-secondary text-base px-8 py-4">
              Voir les résultats
            </a>
          </div>

          <!-- Trust -->
          <div class="animate-fade-up delay-4 mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              Sans engagement
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              ROI visible en 30 jours
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              Accompagnement local
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS BAR -->
    <section class="py-6 bg-gray-900">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-2xl md:text-3xl font-extrabold text-white">{{ stat.value }}</div>
            <div class="text-xs md:text-sm text-gray-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center">
          <span class="section-label">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Services
          </span>
          <h2 class="section-title">Ce qu'on automatise <span class="text-gradient">pour vous</span></h2>
          <p class="section-subtitle">Chaque agent est conçu sur-mesure pour votre métier et vos outils existants.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="service in services" :key="service.title" class="card p-7 group">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" :class="service.iconBg">
              <div v-html="service.icon" />
            </div>
            <h3 class="text-lg font-bold mb-2 text-gray-900">{{ service.title }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>

        <!-- Tools -->
        <div class="mt-14 text-center">
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-5">Compatible avec vos outils</p>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tool in tools" :key="tool" class="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-500 font-medium">{{ tool }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- RESULTATS -->
    <section id="resultats" class="py-20 md:py-28 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center">
          <span class="section-label">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Résultats
          </span>
          <h2 class="section-title">Des résultats <span class="text-gradient">concrets</span></h2>
          <p class="section-subtitle">Ce qu'on fait pour les PME de la Vienne, par secteur.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="(uc, i) in useCases" :key="i" class="card p-7">
            <div class="flex items-center gap-4 mb-4">
              <span class="text-3xl">{{ uc.icon }}</span>
              <div>
                <h3 class="font-bold text-gray-900">{{ uc.title }}</h3>
                <span class="text-xs text-gray-400">{{ uc.sector }}</span>
              </div>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">{{ uc.description }}</p>
            <div class="pt-4 border-t border-gray-100 flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              <span class="text-sm font-semibold text-emerald-700">{{ uc.result }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section id="process" class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center">
          <span class="section-label">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Process
          </span>
          <h2 class="section-title">4 étapes, <span class="text-gradient">c'est tout</span></h2>
          <p class="section-subtitle">De l'appel découverte à l'agent en production.</p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div v-for="(step, i) in steps" :key="i" class="relative">
            <!-- Connector line -->
            <div v-if="i < 3" class="hidden md:block absolute top-10 left-[calc(50%+32px)] right-[-calc(50%-32px)] w-[calc(100%-64px)] h-px bg-gray-200 translate-x-[32px]" />
            <div class="card p-7 text-center h-full">
              <div class="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
                <span class="text-xl font-extrabold text-emerald-600">{{ i + 1 }}</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-sm text-gray-500 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AVANTAGES -->
    <section class="py-20 md:py-28 bg-gray-900 text-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 mb-4">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Pourquoi Nexoma
            </span>
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Pas une agence web.<br>
              <span class="text-emerald-400">Une agence IA.</span>
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              On ne fait pas de sites vitrines. On crée des agents intelligents qui travaillent pour vous, 24h/24, 7j/7. La différence ? Vous voyez le ROI dès le premier mois.
            </p>
            <div class="space-y-4">
              <div v-for="adv in advantages" :key="adv" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                </div>
                <span class="text-gray-300 font-medium">{{ adv }}</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-3xl font-extrabold text-white mb-1">10h+</div>
              <div class="text-xs text-gray-400">gagnées par semaine</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-3xl font-extrabold text-white mb-1">24/7</div>
              <div class="text-xs text-gray-400">agents toujours actifs</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-3xl font-extrabold text-white mb-1">30j</div>
              <div class="text-xs text-gray-400">pour voir le ROI</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-3xl font-extrabold text-white mb-1">0€</div>
              <div class="text-xs text-gray-400">si pas de résultat</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-20 md:py-28">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center">
          <span class="section-label">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            FAQ
          </span>
          <h2 class="section-title">Questions <span class="text-gradient">fréquentes</span></h2>
          <p class="section-subtitle">Tout ce qu'il faut savoir avant de démarrer.</p>
        </div>

        <div class="space-y-3">
          <div v-for="(item, i) in faq" :key="i"
            class="card overflow-hidden cursor-pointer"
            @click="openFaq === i ? openFaq = -1 : openFaq = i">
            <div class="px-6 py-5 flex items-center justify-between gap-4">
              <h3 class="font-semibold text-gray-900">{{ item.q }}</h3>
              <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                :class="openFaq === i ? 'bg-emerald-50 rotate-180' : 'bg-gray-50'">
                <svg class="w-4 h-4" :class="openFaq === i ? 'text-emerald-600' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <Transition enter-active-class="transition-all duration-200 ease-out" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100" leave-active-class="transition-all duration-150" leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">
              <div v-show="openFaq === i" class="px-6 pb-5">
                <div class="h-px bg-gray-100 mb-4" />
                <p class="text-sm text-gray-500 leading-relaxed">{{ item.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28 bg-emerald-600 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300 rounded-full blur-[80px]" />
      </div>
      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Prêt à automatiser ce qui vous ralentit ?
        </h2>
        <p class="text-lg text-emerald-100 mb-10 max-w-xl mx-auto">
          30 minutes. Gratuit. On identifie ensemble les tâches que l'IA peut gérer pour vous.
        </p>
        <a href="#contact" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl text-lg hover:bg-emerald-50 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
          Réserver mon appel gratuit
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-20 md:py-28">
      <div class="max-w-2xl mx-auto px-6">
        <div class="text-center mb-10">
          <span class="section-label">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Contact
          </span>
          <h2 class="section-title">Parlons de <span class="text-gradient">votre projet</span></h2>
          <p class="text-gray-500 mt-3">On vous recontacte sous 24h.</p>
        </div>

        <div class="card p-8 md:p-10">
          <form class="space-y-5" @submit.prevent="submitForm">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Nom</label>
                <input v-model="form.name" type="text" placeholder="Jean Dupont" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-gray-900 placeholder-gray-400 transition text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Entreprise</label>
                <input v-model="form.company" type="text" placeholder="Mon entreprise" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-gray-900 placeholder-gray-400 transition text-sm" />
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Email</label>
                <input v-model="form.email" type="email" placeholder="jean@entreprise.fr" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-gray-900 placeholder-gray-400 transition text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Téléphone</label>
                <input v-model="form.phone" type="tel" placeholder="06 XX XX XX XX" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-gray-900 placeholder-gray-400 transition text-sm" />
              </div>
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Secteur</label>
              <select v-model="form.sector" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none text-gray-900 transition text-sm appearance-none">
                <option value="" disabled>Choisir votre secteur</option>
                <option value="btp">BTP / Artisanat</option>
                <option value="commerce">Commerce / Retail</option>
                <option value="liberal">Profession libérale</option>
                <option value="hotellerie">Hôtellerie / Restauration</option>
                <option value="services">Services aux entreprises</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
              <textarea v-model="form.message" rows="4" placeholder="Décrivez brièvement votre besoin..." class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 focus:outline-none text-gray-900 placeholder-gray-400 resize-none transition text-sm" />
            </div>
            <button type="submit" class="btn-primary w-full text-base py-4" :class="submitted ? 'bg-emerald-700' : ''" :disabled="submitted">
              {{ submitted ? 'Message envoyé !' : 'Envoyer ma demande' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- SEO LOCAL -->
    <section class="py-10 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-xs text-gray-400 leading-relaxed">
          Nexoma accompagne les PME de Poitiers, Chasseneuil-du-Poitou, Buxerolles, Mignaloux-Beauvoir, Saint-Benoît, Biard, Ligugé, Fontaine-le-Comte, Montamisé, Jaunay-Marigny, Neuville-de-Poitou, Vivonne, Lusignan, Chauvigny, Loudun et toute la Vienne (86) dans leur transformation digitale grâce à l'intelligence artificielle.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const openFaq = ref(-1)
const submitted = ref(false)
const form = reactive({ name: '', company: '', email: '', phone: '', sector: '', message: '' })

const stats = [
  { value: '10h+', label: 'gagnées par semaine' },
  { value: '30 jours', label: 'pour voir les résultats' },
  { value: '24/7', label: 'agents toujours actifs' },
  { value: '100%', label: 'adapté à vos outils' },
]

const services = [
  {
    title: 'Devis & Facturation',
    desc: 'Génération automatique de devis, envoi au client, relance à J+3. Fini les devis oubliés.',
    icon: '<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
    iconBg: 'bg-emerald-50'
  },
  {
    title: 'Support Client',
    desc: 'Réponses instantanées 24/7, prise de RDV automatique, suivi client personnalisé.',
    icon: '<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>',
    iconBg: 'bg-blue-50'
  },
  {
    title: 'Prospection & Vente',
    desc: 'Emails personnalisés, qualification de leads, séquences de relance automatisées.',
    icon: '<svg class="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>',
    iconBg: 'bg-violet-50'
  },
  {
    title: 'Planning & Organisation',
    desc: 'Gestion des plannings, rappels automatiques, coordination d\'équipe optimisée.',
    icon: '<svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
    iconBg: 'bg-amber-50'
  },
  {
    title: 'Reporting & Analyse',
    desc: 'Tableaux de bord automatiques, KPIs en temps réel, alertes sur vos métriques.',
    icon: '<svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
    iconBg: 'bg-rose-50'
  },
  {
    title: 'Workflows Sur-Mesure',
    desc: 'Process métier unique ? On crée l\'agent qui le gère, connecté à vos outils.',
    icon: '<svg class="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>',
    iconBg: 'bg-cyan-50'
  }
]

const tools = ['Gmail', 'Google Sheets', 'HubSpot', 'WhatsApp', 'Slack', 'Notion', 'Pipedrive', 'Excel', 'Outlook']

const useCases = [
  { icon: '🏗️', title: 'BTP & Artisanat', sector: 'Construction, plomberie, électricité...', description: 'Demande client → devis généré en 2 min → envoyé automatiquement → relance à J+3 si pas de réponse.', result: '+40% de devis signés, 5h/semaine gagnées' },
  { icon: '🏪', title: 'Commerce & Retail', sector: 'Boutiques, e-commerce, franchises...', description: 'Réponses auto aux questions clients, relance panier abandonné, programme fidélité automatisé.', result: '+25% de récurrence client, support 24/7' },
  { icon: '⚖️', title: 'Professions libérales', sector: 'Avocats, comptables, consultants...', description: 'Prise de RDV intelligente, préparation de dossiers, rappels auto, synthèse de documents.', result: '8h/semaine libérées sur l\'administratif' },
  { icon: '🏨', title: 'Hôtellerie & Restauration', sector: 'Hôtels, restaurants, traiteurs...', description: 'Gestion des réservations, réponses aux avis Google, commandes fournisseurs auto.', result: '-30% de no-shows, avis traités en 1h' }
]

const steps = [
  { title: 'Appel découverte', desc: 'On identifie vos tâches répétitives et les quick wins. 30 min, gratuit.' },
  { title: 'Proposition', desc: 'Agent recommandé, ROI estimé, planning clair. Prix fixe, zéro surprise.' },
  { title: 'Déploiement', desc: 'On construit et connecte l\'agent à vos outils. Vous validez chaque étape.' },
  { title: 'Résultats', desc: 'L\'agent tourne, vous gagnez du temps. On suit les métriques ensemble.' }
]

const advantages = [
  'Sur-mesure : chaque agent est adapté à votre métier',
  'Local : basé à Poitiers, on se déplace chez vous',
  'ROI garanti : résultats mesurables sous 30 jours',
  'Sans engagement : pas de contrat longue durée',
  'Support inclus : on ajuste et optimise en continu',
]

const faq = [
  { q: "Combien ça coûte ?", a: "Chaque projet est sur-mesure. Comptez à partir de 500€ pour un agent simple. L'appel découverte est gratuit et sans engagement." },
  { q: "C'est quoi un agent IA concrètement ?", a: "Un programme intelligent qui exécute des tâches à votre place : répondre aux emails, générer des devis, qualifier des prospects, relancer des clients... Connecté à vos outils existants." },
  { q: "Combien de temps pour mettre en place ?", a: "Entre 1 et 4 semaines selon la complexité. Un agent de devis auto peut être opérationnel en 1 semaine." },
  { q: "Je n'y connais rien en IA, c'est un problème ?", a: "Pas du tout. On gère tout. Vous expliquez votre process, on le transforme en agent. Rien de technique à faire." },
  { q: "Mes données sont-elles sécurisées ?", a: "Toutes les données sont hébergées en Europe, chiffrées, jamais partagées. 100% conforme RGPD." },
  { q: "Et si ça ne marche pas ?", a: "On mesure les résultats ensemble dès le premier mois. Si le ROI n'est pas là, on ajuste ou on arrête. Pas d'engagement longue durée." },
  { q: "Quels outils sont compatibles ?", a: "Gmail, Outlook, Google Sheets, Excel, HubSpot, Pipedrive, WhatsApp, Slack, Notion et bien d'autres." }
]

function submitForm() {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 3000)
}
</script>
