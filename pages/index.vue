<template>
  <div>
    <!-- HERO -->
    <section class="relative min-h-screen flex items-center overflow-hidden grid-pattern">
      <!-- Animated orbs -->
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />

      <div class="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div class="max-w-4xl">
          <!-- Badge -->
          <div class="animate-fade-up animate-fade-up-delay-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm mb-8">
            <span class="flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-violet-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            <span class="text-sm text-gray-400">Agence IA &mdash; Poitiers &amp; Vienne (86)</span>
          </div>

          <!-- Title -->
          <h1 class="animate-fade-up animate-fade-up-delay-2 text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] mb-8">
            On automatise<br>
            <span class="gradient-text">votre business</span><br>
            avec l'IA
          </h1>

          <!-- Subtitle -->
          <p class="animate-fade-up animate-fade-up-delay-3 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
            Des agents IA sur-mesure qui gèrent vos devis, relances, prospection et support client. Résultats visibles en 30 jours.
          </p>

          <!-- CTAs -->
          <div class="animate-fade-up animate-fade-up-delay-4 flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn-primary text-base px-8 py-4">
              Réserver un appel découverte
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#cas-usage" class="btn-secondary text-base px-8 py-4">
              Voir les résultats
            </a>
          </div>
        </div>

        <!-- Floating stats -->
        <div class="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
          <div class="glass-card gradient-border p-5 w-52 animate-fade-up animate-fade-up-delay-2">
            <div class="text-3xl font-display font-bold text-white">10h+</div>
            <div class="text-xs text-gray-500 mt-1">gagnées / semaine</div>
          </div>
          <div class="glass-card gradient-border p-5 w-52 animate-fade-up animate-fade-up-delay-3">
            <div class="text-3xl font-display font-bold text-white">24/7</div>
            <div class="text-xs text-gray-500 mt-1">agents toujours actifs</div>
          </div>
          <div class="glass-card gradient-border p-5 w-52 animate-fade-up animate-fade-up-delay-4">
            <div class="text-3xl font-display font-bold text-white">30j</div>
            <div class="text-xs text-gray-500 mt-1">pour voir le ROI</div>
          </div>
        </div>
      </div>

      <!-- Bottom gradient fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
    </section>

    <!-- MARQUEE TRUST -->
    <section class="py-8 border-y border-white/5 overflow-hidden">
      <div class="marquee-track">
        <div v-for="n in 2" :key="n" class="flex items-center gap-12 px-6">
          <span v-for="item in marqueeItems" :key="item" class="text-sm text-gray-600 whitespace-nowrap uppercase tracking-widest font-medium">
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <!-- SERVICES - Bento Grid -->
    <section id="services" class="py-24 md:py-32 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Services</span>
          <h2 class="section-title">Ce qu'on <span class="gradient-text">automatise</span></h2>
          <p class="section-subtitle">Chaque agent est conçu sur-mesure pour votre métier.</p>
        </div>

        <!-- Bento Grid -->
        <div class="grid md:grid-cols-3 gap-4">
          <!-- Big card -->
          <div class="md:col-span-2 glass-card gradient-border p-8 md:p-10">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/10 flex items-center justify-center shrink-0">
                <svg class="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h3 class="text-xl font-display font-bold mb-3">Devis & Facturation automatiques</h3>
                <p class="text-gray-400 leading-relaxed">Un client demande un devis ? L'agent le génère en 2 minutes, l'envoie, et relance automatiquement à J+3 si pas de réponse. Fini les devis oubliés dans un coin.</p>
                <div class="mt-6 flex items-center gap-3 text-sm">
                  <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">+40% de devis signés</span>
                  <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">5h/sem gagnées</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Small card -->
          <div class="glass-card gradient-border p-8">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/10 flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            </div>
            <h3 class="text-lg font-display font-bold mb-2">Support Client IA</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Réponses instantanées 24/7, prise de RDV auto, suivi personnalisé.</p>
          </div>

          <!-- Small card -->
          <div class="glass-card gradient-border p-8">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/10 flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h3 class="text-lg font-display font-bold mb-2">Prospection & Vente</h3>
            <p class="text-gray-400 text-sm leading-relaxed">Emails personnalisés, qualification de leads, relances séquencées 24/7.</p>
          </div>

          <!-- Big card -->
          <div class="md:col-span-2 glass-card gradient-border p-8 md:p-10">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/10 flex items-center justify-center shrink-0">
                <svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              </div>
              <div>
                <h3 class="text-xl font-display font-bold mb-3">Workflows Sur-Mesure</h3>
                <p class="text-gray-400 leading-relaxed">Un process métier unique ? On crée l'agent qui le gère. Connecté à vos outils : Gmail, Google Sheets, CRM, WhatsApp, Slack — tout ce que vous utilisez déjà.</p>
                <div class="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  <span v-for="tool in ['Gmail', 'Sheets', 'HubSpot', 'WhatsApp', 'Slack', 'Notion']" :key="tool" class="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">{{ tool }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAS D'USAGE -->
    <section id="cas-usage" class="py-24 md:py-32 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-violet-500/[0.02] to-transparent" />
      <div class="relative max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Cas d'usage</span>
          <h2 class="section-title">Des résultats <span class="gradient-text">concrets</span></h2>
          <p class="section-subtitle">Ce qu'on fait pour les PME de la Vienne, par secteur.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="(useCase, i) in useCases" :key="i" class="glass-card p-8 group">
            <div class="flex items-center gap-4 mb-5">
              <span class="text-3xl">{{ useCase.icon }}</span>
              <div>
                <h3 class="text-lg font-display font-bold">{{ useCase.title }}</h3>
                <span class="text-xs text-gray-500">{{ useCase.sector }}</span>
              </div>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-5">{{ useCase.description }}</p>
            <div class="flex items-center gap-2">
              <div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <div class="mt-5 flex items-center gap-2 text-sm font-medium text-emerald-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              {{ useCase.result }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section id="process" class="py-24 md:py-32 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Process</span>
          <h2 class="section-title">4 étapes, <span class="gradient-text">c'est tout</span></h2>
          <p class="section-subtitle">De l'appel à l'agent en production.</p>
        </div>

        <div class="relative">
          <!-- Connecting line -->
          <div class="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent -translate-y-1/2" />

          <div class="grid md:grid-cols-4 gap-8">
            <div v-for="(step, i) in steps" :key="i" class="relative text-center group">
              <div class="glass-card gradient-border p-8 h-full">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 border border-violet-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="font-display font-bold text-2xl gradient-text">{{ i + 1 }}</span>
                </div>
                <h3 class="font-display font-bold text-lg mb-3">{{ step.title }}</h3>
                <p class="text-sm text-gray-400 leading-relaxed">{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-24 md:py-32">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">FAQ</span>
          <h2 class="section-title">Questions <span class="gradient-text">fréquentes</span></h2>
        </div>

        <div class="space-y-3">
          <div v-for="(item, i) in faq" :key="i" class="glass-card overflow-hidden cursor-pointer" @click="openFaq === i ? openFaq = -1 : openFaq = i">
            <div class="p-6 flex items-center justify-between">
              <h3 class="font-medium pr-4">{{ item.q }}</h3>
              <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-all duration-300" :class="openFaq === i ? 'bg-violet-500/20 rotate-180' : ''">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <Transition enter-active-class="transition-all duration-300" enter-from-class="max-h-0 opacity-0" enter-to-class="max-h-96 opacity-100" leave-active-class="transition-all duration-200" leave-from-class="max-h-96 opacity-100" leave-to-class="max-h-0 opacity-0">
              <div v-show="openFaq === i" class="px-6 pb-6">
                <div class="h-px bg-white/5 mb-4" />
                <p class="text-sm text-gray-400 leading-relaxed">{{ item.a }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 md:py-32 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-violet-500/[0.05] via-blue-500/[0.03] to-transparent" />
        <div class="orb orb-1" style="opacity: 0.2" />
        <div class="orb orb-2" style="opacity: 0.15" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Prêt à passer au<br><span class="gradient-text">niveau supérieur ?</span>
        </h2>
        <p class="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          30 minutes. Gratuit. On identifie ensemble les tâches qui vous bouffent du temps et comment l'IA peut les gérer.
        </p>
        <a href="#contact" class="btn-primary text-lg px-10 py-5">
          Réserver mon appel gratuit
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-24 md:py-32 relative">
      <div class="max-w-2xl mx-auto px-6">
        <div class="text-center mb-12">
          <span class="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Contact</span>
          <h2 class="section-title">Parlons de <span class="gradient-text">votre projet</span></h2>
          <p class="text-gray-400 mt-4">On vous recontacte sous 24h.</p>
        </div>

        <div class="glass-card gradient-border p-8 md:p-10">
          <form class="space-y-5" @submit.prevent="submitForm">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Nom</label>
                <input v-model="form.name" type="text" placeholder="Jean Dupont" required class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-white placeholder-gray-600 transition" />
              </div>
              <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Entreprise</label>
                <input v-model="form.company" type="text" placeholder="Mon entreprise" required class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-white placeholder-gray-600 transition" />
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Email</label>
                <input v-model="form.email" type="email" placeholder="jean@entreprise.fr" required class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-white placeholder-gray-600 transition" />
              </div>
              <div>
                <label class="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Téléphone</label>
                <input v-model="form.phone" type="tel" placeholder="06 XX XX XX XX" class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-white placeholder-gray-600 transition" />
              </div>
            </div>
            <div>
              <label class="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Secteur</label>
              <select v-model="form.sector" class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-violet-500/50 focus:outline-none text-white transition appearance-none">
                <option value="" disabled class="bg-[#0a0a1a]">Choisir votre secteur</option>
                <option value="btp" class="bg-[#0a0a1a]">BTP / Artisanat</option>
                <option value="commerce" class="bg-[#0a0a1a]">Commerce / Retail</option>
                <option value="liberal" class="bg-[#0a0a1a]">Profession libérale</option>
                <option value="hotellerie" class="bg-[#0a0a1a]">Hôtellerie / Restauration</option>
                <option value="services" class="bg-[#0a0a1a]">Services</option>
                <option value="autre" class="bg-[#0a0a1a]">Autre</option>
              </select>
            </div>
            <div>
              <label class="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
              <textarea v-model="form.message" rows="4" placeholder="Décrivez brièvement votre besoin..." class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-xl focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/20 text-white placeholder-gray-600 resize-none transition" />
            </div>
            <button type="submit" class="btn-primary w-full text-base py-4" :disabled="submitted">
              {{ submitted ? 'Message envoyé !' : 'Envoyer ma demande' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- SEO LOCAL -->
    <section class="py-12 border-t border-white/5">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-xs text-gray-600 leading-relaxed">
          Nexoma accompagne les PME de Poitiers, Chasseneuil-du-Poitou, Buxerolles, Mignaloux-Beauvoir, Saint-Benoît, Biard, Ligugé, Fontaine-le-Comte, Montamisé, Jaunay-Marigny, Neuville-de-Poitou, Vivonne, Lusignan, Chauvigny, Loudun et toute la Vienne (86) dans leur transformation digitale grâce à l'intelligence artificielle. Agents IA, automatisation des processus, chatbots intelligents, génération de devis automatique, prospection B2B assistée par IA.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const openFaq = ref(-1)
const submitted = ref(false)
const form = reactive({
  name: '', company: '', email: '', phone: '', sector: '', message: ''
})

const marqueeItems = [
  'Agents IA sur-mesure', '•', 'Devis automatiques', '•', 'Support 24/7', '•',
  'Prospection IA', '•', 'ROI en 30 jours', '•', 'PME de la Vienne', '•',
  'Workflows automatisés', '•', 'Sans engagement', '•'
]

const useCases = [
  {
    icon: '🏗️', title: 'BTP & Artisanat', sector: 'Construction, plomberie, électricité...',
    description: 'Demande client par email → devis généré en 2 min → envoyé automatiquement → relance à J+3 si pas de réponse.',
    result: '+40% de devis signés, 5h/semaine gagnées'
  },
  {
    icon: '🏪', title: 'Commerce & Retail', sector: 'Boutiques, e-commerce, franchises...',
    description: 'Réponses auto aux questions clients, relance panier abandonné, programme fidélité automatisé, gestion des avis.',
    result: '+25% de récurrence client, support 24/7'
  },
  {
    icon: '⚖️', title: 'Professions libérales', sector: 'Avocats, comptables, consultants...',
    description: 'Prise de RDV intelligente, préparation de dossiers, rappels auto, tri et synthèse de documents.',
    result: '8h/semaine libérées sur l\'administratif'
  },
  {
    icon: '🏨', title: 'Hôtellerie & Restauration', sector: 'Hôtels, restaurants, traiteurs...',
    description: 'Gestion des réservations, réponses aux avis Google, commandes fournisseurs auto, planning équipe optimisé.',
    result: '-30% de no-shows, avis traités en 1h'
  }
]

const steps = [
  { title: 'Appel découverte', desc: 'On identifie vos tâches répétitives et les quick wins. 30 min, gratuit.' },
  { title: 'Proposition', desc: 'Agent recommandé, ROI estimé, planning clair. Prix fixe, zéro surprise.' },
  { title: 'Déploiement', desc: 'On construit et connecte l\'agent à vos outils. Vous validez chaque étape.' },
  { title: 'Résultats', desc: 'L\'agent tourne, vous gagnez du temps. On suit les métriques ensemble.' }
]

const faq = [
  { q: "Combien ça coûte ?", a: "Chaque projet est sur-mesure. Comptez à partir de 500€ pour un agent simple. L'appel découverte est gratuit et sans engagement." },
  { q: "C'est quoi un agent IA concrètement ?", a: "C'est un programme intelligent qui exécute des tâches à votre place : répondre aux emails, générer des devis, qualifier des prospects, relancer des clients... Connecté à vos outils existants." },
  { q: "Combien de temps pour mettre en place ?", a: "Entre 1 et 4 semaines selon la complexité. Un agent de devis auto peut être opérationnel en 1 semaine." },
  { q: "Je n'y connais rien en IA, c'est un problème ?", a: "Pas du tout. On gère tout de A à Z. Vous nous expliquez votre process, on le transforme en agent. Rien de technique à faire de votre côté." },
  { q: "Mes données sont-elles sécurisées ?", a: "Toutes les données sont hébergées en Europe, chiffrées, jamais partagées. 100% RGPD." },
  { q: "Et si ça ne marche pas ?", a: "On mesure les résultats ensemble dès le premier mois. Si le ROI n'est pas là, on ajuste ou on arrête. Pas d'engagement longue durée." },
  { q: "Quels outils sont compatibles ?", a: "Gmail, Outlook, Google Sheets, Excel, HubSpot, Pipedrive, WhatsApp, Slack, Notion, et bien d'autres. Si vous l'utilisez, on s'y connecte." }
]

function submitForm() {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 3000)
}
</script>
