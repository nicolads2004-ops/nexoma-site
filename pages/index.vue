<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden py-24 md:py-32">
      <div class="absolute inset-0 bg-gradient-to-b from-primary-600/10 via-transparent to-transparent" />
      <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      <div class="relative max-w-6xl mx-auto px-4 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-400 text-sm mb-6">
          <span class="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          Agence IA pour PME — Poitiers &amp; Vienne (86)
        </div>
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Vos tâches répétitives,<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">automatisées par l'IA</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Nexoma crée des agents IA sur-mesure qui travaillent pour vous 24h/24.
          Devis, relances, prospection, support client — résultats visibles en 30 jours.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="btn-primary text-lg px-8 py-4">
            Réserver un appel découverte
          </a>
          <a href="#cas-usage" class="btn-secondary text-lg px-8 py-4">
            Voir les cas d'usage
          </a>
        </div>
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            Sans engagement
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            ROI garanti en 30 jours
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
            Accompagnement local
          </div>
        </div>
      </div>
    </section>

    <!-- CHIFFRES -->
    <section class="py-16 border-y border-white/5">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-primary-400">10h+</div>
            <div class="text-sm text-gray-400 mt-1">gagnées par semaine</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-primary-400">30j</div>
            <div class="text-sm text-gray-400 mt-1">pour voir les résultats</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-primary-400">24/7</div>
            <div class="text-sm text-gray-400 mt-1">vos agents ne dorment pas</div>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-primary-400">86</div>
            <div class="text-sm text-gray-400 mt-1">ancré dans la Vienne</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="services" class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="section-title">Ce qu'on automatise pour vous</h2>
        <p class="section-subtitle">Chaque agent est conçu sur-mesure pour votre métier et vos outils existants.</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="card">
            <div class="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Devis & Facturation</h3>
            <p class="text-gray-400 text-sm">Un client demande un devis ? L'agent le génère, l'envoie et relance automatiquement. Fini les devis oubliés.</p>
          </div>
          <div class="card">
            <div class="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Support & Relation Client</h3>
            <p class="text-gray-400 text-sm">Réponses instantanées aux questions fréquentes, prise de RDV automatique, suivi client personnalisé.</p>
          </div>
          <div class="card">
            <div class="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Prospection & Vente</h3>
            <p class="text-gray-400 text-sm">Emails personnalisés, qualification de leads, relances séquencées. Votre commercial IA tourne 24/7.</p>
          </div>
          <div class="card">
            <div class="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Planning & Organisation</h3>
            <p class="text-gray-400 text-sm">Gestion des plannings, rappels automatiques, coordination d'équipe. Plus aucun RDV manqué.</p>
          </div>
          <div class="card">
            <div class="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Reporting & Analyse</h3>
            <p class="text-gray-400 text-sm">Tableaux de bord automatiques, KPIs en temps réel, alertes intelligentes sur vos métriques clés.</p>
          </div>
          <div class="card">
            <div class="w-12 h-12 bg-primary-600/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">Workflows Sur-Mesure</h3>
            <p class="text-gray-400 text-sm">Un process métier unique ? On crée l'agent qui le gère. Connecté à vos outils : email, CRM, ERP, tableurs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CAS D'USAGE -->
    <section id="cas-usage" class="py-20 md:py-28 bg-dark-900/50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="section-title">Cas concrets par secteur</h2>
        <p class="section-subtitle">Des résultats mesurables pour les PME de la Vienne.</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">🏗️</span>
              <h3 class="text-lg font-semibold">BTP & Artisanat</h3>
            </div>
            <p class="text-gray-400 text-sm mb-4">Un artisan reçoit une demande par email → l'agent génère le devis en 2 min, l'envoie au client, et relance à J+3 si pas de réponse.</p>
            <div class="text-primary-400 text-sm font-medium">Résultat : +40% de devis signés, 5h/semaine gagnées</div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">🏪</span>
              <h3 class="text-lg font-semibold">Commerce & Retail</h3>
            </div>
            <p class="text-gray-400 text-sm mb-4">Réponses automatiques aux questions clients (horaires, stock, livraison), relance panier abandonné, programme fidélité automatisé.</p>
            <div class="text-primary-400 text-sm font-medium">Résultat : +25% de récurrence client, support 24/7</div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">⚖️</span>
              <h3 class="text-lg font-semibold">Professions libérales</h3>
            </div>
            <p class="text-gray-400 text-sm mb-4">Prise de RDV intelligente, préparation de dossiers, rappels automatiques aux clients, tri et synthèse de documents.</p>
            <div class="text-primary-400 text-sm font-medium">Résultat : 8h/semaine libérées sur l'administratif</div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">🏨</span>
              <h3 class="text-lg font-semibold">Hôtellerie & Restauration</h3>
            </div>
            <p class="text-gray-400 text-sm mb-4">Gestion des réservations, réponses aux avis Google, commandes fournisseurs automatiques, planning équipe optimisé.</p>
            <div class="text-primary-400 text-sm font-medium">Résultat : -30% de no-shows, avis traités en 1h</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section id="process" class="py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="section-title">Comment ça marche</h2>
        <p class="section-subtitle">De l'appel découverte à l'agent en production, en 4 étapes simples.</p>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-14 h-14 bg-primary-600/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-primary-400 font-bold text-lg">1</span>
            </div>
            <h3 class="font-semibold mb-2">Appel découverte</h3>
            <p class="text-sm text-gray-400">On identifie vos tâches répétitives et les quick wins. 30 min, sans engagement.</p>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 bg-primary-600/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-primary-400 font-bold text-lg">2</span>
            </div>
            <h3 class="font-semibold mb-2">Proposition</h3>
            <p class="text-sm text-gray-400">On vous présente l'agent recommandé, le ROI estimé et le planning. Prix fixe, pas de surprise.</p>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 bg-primary-600/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-primary-400 font-bold text-lg">3</span>
            </div>
            <h3 class="font-semibold mb-2">Déploiement</h3>
            <p class="text-sm text-gray-400">On construit et connecte l'agent à vos outils. Vous validez à chaque étape.</p>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 bg-primary-600/10 border border-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-primary-400 font-bold text-lg">4</span>
            </div>
            <h3 class="font-semibold mb-2">Résultats</h3>
            <p class="text-sm text-gray-400">L'agent tourne, vous gagnez du temps. On suit les métriques et on optimise.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-20 md:py-28 bg-dark-900/50">
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="section-title">Questions fréquentes</h2>
        <p class="section-subtitle">Tout ce que vous devez savoir avant de démarrer.</p>
        <div class="space-y-4">
          <div v-for="(item, i) in faq" :key="i" class="card cursor-pointer" @click="openFaq === i ? openFaq = -1 : openFaq = i">
            <div class="flex items-center justify-between">
              <h3 class="font-medium pr-4">{{ item.q }}</h3>
              <svg class="w-5 h-5 text-gray-400 shrink-0 transition-transform" :class="{ 'rotate-180': openFaq === i }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <p v-show="openFaq === i" class="mt-3 text-sm text-gray-400">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Prêt à automatiser<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">votre business ?</span>
        </h2>
        <p class="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Réservez un appel découverte gratuit de 30 minutes. On identifie ensemble vos quick wins.
        </p>
        <a href="#contact" class="btn-primary text-lg px-10 py-4">
          Réserver mon appel gratuit
        </a>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-20 md:py-28 bg-dark-900/50">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="section-title">Parlons de votre projet</h2>
        <p class="section-subtitle">Remplissez le formulaire, on vous recontacte sous 24h.</p>
        <form class="space-y-4" @submit.prevent="submitForm">
          <div class="grid md:grid-cols-2 gap-4">
            <input v-model="form.name" type="text" placeholder="Nom complet" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-500" />
            <input v-model="form.company" type="text" placeholder="Entreprise" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-500" />
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <input v-model="form.email" type="email" placeholder="Email" required class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-500" />
            <input v-model="form.phone" type="tel" placeholder="Téléphone" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-500" />
          </div>
          <select v-model="form.sector" class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none text-white">
            <option value="" disabled class="bg-dark-900">Votre secteur d'activité</option>
            <option value="btp" class="bg-dark-900">BTP / Artisanat</option>
            <option value="commerce" class="bg-dark-900">Commerce / Retail</option>
            <option value="liberal" class="bg-dark-900">Profession libérale</option>
            <option value="hotellerie" class="bg-dark-900">Hôtellerie / Restauration</option>
            <option value="services" class="bg-dark-900">Services aux entreprises</option>
            <option value="autre" class="bg-dark-900">Autre</option>
          </select>
          <textarea v-model="form.message" rows="4" placeholder="Décrivez brièvement votre besoin..." class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-500 resize-none" />
          <button type="submit" class="btn-primary w-full text-lg py-4" :disabled="submitted">
            {{ submitted ? 'Message envoyé !' : 'Envoyer ma demande' }}
          </button>
        </form>
      </div>
    </section>

    <!-- SEO LOCAL -->
    <section class="py-16 border-t border-white/5">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p class="text-sm text-gray-500 leading-relaxed">
          Nexoma accompagne les PME de <strong class="text-gray-400">Poitiers</strong>, Chasseneuil-du-Poitou, Buxerolles,
          Mignaloux-Beauvoir, Saint-Benoît, Biard, Ligugé, Fontaine-le-Comte, Montamisé, Jaunay-Marigny,
          Neuville-de-Poitou, Vivonne, Lusignan, Chauvigny, Loudun et toute la <strong class="text-gray-400">Vienne (86)</strong>
          dans leur transformation digitale grâce à l'intelligence artificielle. Agents IA, automatisation des processus,
          chatbots intelligents, génération de devis automatique, prospection B2B assistée par IA.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const openFaq = ref(-1)
const submitted = ref(false)
const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  sector: '',
  message: ''
})

const faq = [
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est sur-mesure. Comptez à partir de 500€ pour un agent simple (devis auto, chatbot). L'appel découverte est gratuit et sans engagement."
  },
  {
    q: "C'est quoi un agent IA concrètement ?",
    a: "C'est un programme intelligent qui exécute des tâches à votre place : répondre aux emails, générer des devis, qualifier des prospects, relancer des clients... Il est connecté à vos outils existants."
  },
  {
    q: "Combien de temps pour mettre en place ?",
    a: "Entre 1 et 4 semaines selon la complexité. Un agent de devis automatique peut être opérationnel en 1 semaine."
  },
  {
    q: "Je n'y connais rien en IA, c'est un problème ?",
    a: "Pas du tout. On gère tout de A à Z. Vous nous expliquez votre process, on le transforme en agent. Vous n'avez rien de technique à faire."
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Oui. Toutes les données sont hébergées en Europe, chiffrées, et ne sont jamais partagées. On respecte le RGPD à 100%."
  },
  {
    q: "Et si ça ne marche pas ?",
    a: "On mesure les résultats ensemble dès le premier mois. Si le ROI n'est pas au rendez-vous, on ajuste ou on arrête. Pas d'engagement longue durée."
  },
  {
    q: "Vous travaillez avec quels outils ?",
    a: "Gmail, Outlook, Google Sheets, Excel, CRM (HubSpot, Pipedrive...), WhatsApp, Slack, et bien d'autres. Si vous utilisez un outil, on s'y connecte."
  }
]

function submitForm() {
  submitted.value = true
  // TODO: Connect to Supabase or email service
  setTimeout(() => { submitted.value = false }, 3000)
}
</script>
