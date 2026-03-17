<template>
  <div>

    <!-- ██ HERO ██ -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- BG -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0a1a15] to-[#0a0a0f]" />
        <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-600/[0.05] blur-[100px]" />
      </div>

      <div class="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-16 md:pt-32 md:pb-24">
        <div class="max-w-3xl">
          <!-- Social proof mini -->
          <div class="fade-up d1 flex items-center gap-3 mb-8">
            <div class="flex -space-x-2">
              <div v-for="n in 4" :key="n" class="w-8 h-8 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[10px] font-bold">
                {{ ['JD', 'ML', 'PA', 'SC'][n-1] }}
              </div>
            </div>
            <span class="text-sm text-gray-400">Déjà adopté par des PME de la Vienne</span>
          </div>

          <!-- Headline -->
          <h1 class="fade-up d2 text-[40px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6">
            Une équipe IA complète<br>
            <span class="text-emerald-400">pour le prix d'un freelance</span>
          </h1>

          <!-- Subhead -->
          <p class="fade-up d3 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mb-4">
            Vos devis partent en retard. Vos relances tombent à l'eau. Vos clients attendent.<br class="hidden md:block">
            <strong class="text-white">On installe des agents IA qui font tout ça à votre place, 24h/24.</strong>
          </p>

          <p class="fade-up d3 text-base text-gray-500 mb-8">
            Audit gratuit → On analyse votre business → On vous montre exactement ce qu'on peut automatiser et combien ça vous fait gagner.
          </p>

          <!-- CTA -->
          <div class="fade-up d4 flex flex-col sm:flex-row gap-4">
            <a href="#rdv" class="btn-main text-lg">
              Demander mon audit gratuit
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          <!-- Micro proof -->
          <div class="fade-up d4 mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              Gratuit, sans engagement
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              Résultats en 30 jours
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              On se déplace chez vous
            </span>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ PROBLÈME ██ -->
    <section class="py-20 md:py-28 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]" />
      <div class="relative max-w-4xl mx-auto px-5 text-center">
        <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Le problème</p>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-12">
          Vous perdez du temps (et de l'argent) chaque jour sur des tâches qu'une IA peut faire mieux que vous.
        </h2>
        <div class="grid md:grid-cols-3 gap-5">
          <div v-for="pain in pains" :key="pain.title" class="glass p-6 text-left">
            <span class="text-2xl mb-3 block">{{ pain.emoji }}</span>
            <h3 class="font-bold text-white mb-2">{{ pain.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ pain.desc }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ SOLUTION ██ -->
    <section class="py-20 md:py-28 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-[#0a0a0f] to-[#0a0a0f]" />
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[100px]" />

      <div class="relative max-w-5xl mx-auto px-5">
        <div class="text-center mb-14">
          <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">La solution</p>
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            On installe une équipe IA<br>dans votre entreprise
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Pas un outil de plus. Pas un chatbot gadget. Des agents intelligents qui exécutent vos tâches, connectés à vos outils, avec des résultats mesurables.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="s in solutions" :key="s.title" class="glass p-7 group hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <span class="text-emerald-400 text-lg">{{ s.icon }}</span>
              </div>
              <h3 class="font-bold text-white text-lg">{{ s.title }}</h3>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ s.desc }}</p>
            <div class="flex items-center gap-2 text-sm font-semibold text-emerald-400">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
              {{ s.result }}
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ COMMENT ÇA MARCHE ██ -->
    <section class="py-20 md:py-28">
      <div class="max-w-4xl mx-auto px-5">
        <div class="text-center mb-14">
          <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Comment ça marche</p>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
            3 étapes. C'est tout.
          </h2>
        </div>

        <div class="space-y-6">
          <div v-for="(step, i) in steps" :key="i" class="glass p-7 flex gap-6 items-start">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <span class="text-emerald-400 font-extrabold text-lg">{{ i + 1 }}</span>
            </div>
            <div>
              <h3 class="font-bold text-white text-lg mb-1">{{ step.title }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ CHIFFRES ██ -->
    <section class="py-16 relative">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500" />
      <div class="relative max-w-5xl mx-auto px-5">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-3xl md:text-4xl font-extrabold text-white">{{ stat.value }}</div>
            <div class="text-sm text-emerald-100 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ POUR QUI ██ -->
    <section class="py-20 md:py-28">
      <div class="max-w-5xl mx-auto px-5">
        <div class="text-center mb-14">
          <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Pour qui</p>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ça marche pour votre secteur ?<br>
            <span class="text-emerald-400">Oui.</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <div v-for="uc in useCases" :key="uc.title" class="glass p-7">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">{{ uc.icon }}</span>
              <h3 class="font-bold text-white">{{ uc.title }}</h3>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed mb-4">{{ uc.desc }}</p>
            <div class="pt-4 border-t border-white/5 text-sm font-semibold text-emerald-400">
              → {{ uc.result }}
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ FAQ ██ -->
    <section class="py-20 md:py-28 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]" />
      <div class="relative max-w-3xl mx-auto px-5">
        <div class="text-center mb-14">
          <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">FAQ</p>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
            Vos questions, nos réponses.
          </h2>
        </div>
        <div class="space-y-3">
          <div v-for="(item, i) in faq" :key="i" class="glass overflow-hidden cursor-pointer" @click="openFaq === i ? openFaq = -1 : openFaq = i">
            <div class="px-6 py-5 flex items-center justify-between gap-4">
              <h3 class="font-semibold text-white">{{ item.q }}</h3>
              <svg class="w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200" :class="openFaq === i ? 'rotate-180 text-emerald-400' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div v-show="openFaq === i" class="px-6 pb-5">
              <div class="h-px bg-white/5 mb-4" />
              <p class="text-sm text-gray-400 leading-relaxed">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ██ CTA + CALENDLY ██ -->
    <section id="rdv" class="py-20 md:py-28 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-[#0a0a0f] to-[#0a0a0f]" />
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.06] rounded-full blur-[120px]" />

      <div class="relative max-w-4xl mx-auto px-5">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            Réservez votre audit gratuit
          </h2>
          <p class="text-gray-400 text-lg max-w-xl mx-auto">
            30 minutes. On analyse votre business et on vous montre exactement ce qu'on peut automatiser. Sans engagement.
          </p>
        </div>

        <!-- Calendly -->
        <div class="glass p-2 md:p-4">
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/nico-lads-nexoma/appel-decouverte"
            style="min-width: 280px; height: 650px;"
          />
        </div>
      </div>
    </section>


    <!-- ██ SEO LOCAL ██ -->
    <section class="py-8 border-t border-white/5">
      <div class="max-w-4xl mx-auto px-5 text-center">
        <p class="text-[11px] text-gray-700 leading-relaxed">
          Nexoma accompagne les PME de Poitiers, Chasseneuil-du-Poitou, Buxerolles, Mignaloux-Beauvoir, Saint-Benoît, Biard, Ligugé, Fontaine-le-Comte, Montamisé, Jaunay-Marigny, Neuville-de-Poitou, Vivonne, Lusignan, Chauvigny, Loudun et toute la Vienne (86) dans l'automatisation de leurs processus grâce à l'intelligence artificielle.
        </p>
      </div>
    </section>

  </div>
</template>

<script setup>
const openFaq = ref(-1)

const pains = [
  { emoji: '⏱️', title: 'Devis en retard', desc: 'Un prospect demande un devis. Vous répondez 3 jours plus tard. Il est déjà chez le concurrent.' },
  { emoji: '📭', title: 'Relances oubliées', desc: 'Vos devis envoyés tombent dans l\'oubli. Personne ne relance. L\'argent dort sur la table.' },
  { emoji: '🔥', title: 'Vous êtes le goulet', desc: 'Tout passe par vous. Emails, plannings, SAV. Vous bossez DANS l\'entreprise au lieu de bosser SUR l\'entreprise.' },
]

const solutions = [
  {
    icon: '📄', title: 'Agent Devis',
    desc: 'Un client demande un devis → généré en 2 min → envoyé automatiquement → relancé à J+3 et J+7.',
    result: '+40% de devis signés'
  },
  {
    icon: '💬', title: 'Agent Support',
    desc: 'Vos clients ont une question ? Réponse instantanée 24h/24. Prise de RDV automatique. Zéro attente.',
    result: 'Support 24/7 sans embauche'
  },
  {
    icon: '📈', title: 'Agent Prospection',
    desc: 'Emails personnalisés envoyés à vos cibles. Qualification automatique. Relances séquencées.',
    result: '3x plus de leads qualifiés'
  },
  {
    icon: '⚙️', title: 'Agent Sur-Mesure',
    desc: 'Un process unique à votre métier ? On crée l\'agent qui le gère. Connecté à Gmail, Sheets, CRM, WhatsApp...',
    result: '10h+ économisées par semaine'
  },
]

const steps = [
  { title: 'Audit gratuit (30 min)', desc: 'On analyse votre business ensemble. On identifie les tâches répétitives et les quick wins. On vous montre exactement ce qu\'on peut automatiser et combien ça vous fait gagner.' },
  { title: 'On construit vos agents', desc: 'On développe les agents IA adaptés à votre métier et vos outils. Vous validez chaque étape. Déploiement en 1 à 4 semaines.' },
  { title: 'Vous récupérez votre temps', desc: 'Vos agents tournent 24/7. On suit les résultats ensemble et on optimise. Vous vous concentrez sur ce qui fait vraiment croître votre business.' },
]

const stats = [
  { value: '10h+', label: 'gagnées / semaine' },
  { value: '30j', label: 'pour voir le ROI' },
  { value: '24/7', label: 'agents actifs' },
  { value: '0€', label: 'si pas de résultat' },
]

const useCases = [
  { icon: '🏗️', title: 'BTP & Artisanat', desc: 'Devis auto, relances, planning chantier. Un artisan signe 40% de devis en plus quand il répond en 2 min au lieu de 3 jours.', result: '+40% de devis signés, 5h/sem récupérées' },
  { icon: '🏪', title: 'Commerce & Retail', desc: 'Réponses clients automatiques, relance panier, fidélisation. Votre boutique tourne même quand vous dormez.', result: '+25% de clients récurrents' },
  { icon: '⚖️', title: 'Professions libérales', desc: 'RDV intelligents, préparation de dossiers, rappels auto. Tout l\'administratif qui vous bouffe est géré.', result: '8h/sem libérées sur l\'admin' },
  { icon: '🏨', title: 'Hôtellerie & Restauration', desc: 'Réservations, avis Google, commandes fournisseurs. Moins de no-shows, plus de clients satisfaits.', result: '-30% de no-shows' },
]

const faq = [
  { q: "C'est quoi un agent IA concrètement ?", a: "C'est un programme intelligent qui exécute des tâches à votre place : envoyer des devis, relancer des clients, répondre aux emails, qualifier des prospects. Il est connecté à vos outils existants (Gmail, Sheets, WhatsApp, CRM...) et tourne 24h/24." },
  { q: "Combien ça coûte ?", a: "À partir de 500€ pour un agent simple. L'audit est 100% gratuit et sans engagement. On vous dit exactement combien ça coûte et combien ça rapporte avant de démarrer." },
  { q: "Combien de temps pour avoir des résultats ?", a: "Un agent simple (devis auto, chatbot) peut être opérationnel en 1 semaine. Les projets plus complexes prennent 2 à 4 semaines. Résultats mesurables dès le premier mois." },
  { q: "Je n'y connais rien en IA.", a: "C'est justement pour ça qu'on est là. Vous nous expliquez comment vous travaillez, on transforme ça en agent. Zéro technique de votre côté." },
  { q: "Mes données sont-elles sécurisées ?", a: "Tout est hébergé en Europe, chiffré, jamais partagé. 100% conforme RGPD." },
  { q: "Et si ça marche pas ?", a: "On mesure ensemble. Si le ROI n'est pas là au bout d'un mois, on ajuste ou on arrête. Pas d'engagement longue durée." },
]
</script>
