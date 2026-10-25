import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TermsView from './views/TermsView.vue'
import PrivacyView from './views/PrivacyView.vue'
import HelpView from './views/HelpView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/terms', name: 'terms', component: TermsView },
    { path: '/privacy', name: 'privacy', component: PrivacyView },
    { path: '/help', name: 'help', component: HelpView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
