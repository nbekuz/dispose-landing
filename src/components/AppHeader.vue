<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n'
import LanguageMenu from './LanguageMenu.vue'

const { t } = useI18n()
const open = ref(false)

const links = [
  { name: 'terms', labelKey: 'navTerms' },
  { name: 'privacy', labelKey: 'navPrivacy' },
  { name: 'help', labelKey: 'navHelp' },
  { name: 'contact', labelKey: 'navContact' },
]
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-white/5 bg-ink/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
      <router-link to="/" class="text-lg font-extrabold tracking-[0.14em] text-white">
        {{ t.brand.toUpperCase() }}
      </router-link>

      <nav class="hidden items-center gap-6 text-sm font-medium text-mist md:flex">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.name }"
          class="transition hover:text-white"
          active-class="text-brand-soft"
        >
          {{ t[link.labelKey] }}
        </router-link>
        <LanguageMenu />
      </nav>

      <div class="flex items-center gap-2 md:hidden">
        <LanguageMenu />
        <button
          type="button"
          class="rounded-xl border border-white/10 px-3 py-1.5 text-sm text-white"
          :aria-expanded="open"
          @click="open = !open"
        >
          Menu
        </button>
      </div>
    </div>

    <div v-if="open" class="border-t border-white/5 px-5 py-3 md:hidden">
      <div class="flex flex-col gap-3 text-sm font-medium text-mist">
        <router-link
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.name }"
          class="py-1"
          @click="open = false"
        >
          {{ t[link.labelKey] }}
        </router-link>
      </div>
    </div>
  </header>
</template>
