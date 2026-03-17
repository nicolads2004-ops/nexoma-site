export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nexoma | Votre équipe IA sur-mesure — Poitiers & Vienne (86)',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nexoma installe des agents IA dans votre entreprise. Devis, relances, prospection, support — automatisés. Audit gratuit. PME de Poitiers et du 86.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        { src: 'https://assets.calendly.com/assets/external/widget.js', async: true }
      ]
    }
  }
})
