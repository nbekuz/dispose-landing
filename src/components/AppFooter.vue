<script setup>
import { useI18n } from '../i18n'
import { SUPPORT_EMAIL } from '../content/legal'

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-white/5 bg-surface">
    <div
      class="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <p class="text-sm font-extrabold tracking-[0.14em] text-white">
          {{ t.brand.toUpperCase() }}
        </p>
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-mist">{{ t.footerNote }}</p>
      </div>
      <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mist">
        <router-link to="/terms" class="hover:text-white">{{ t.navTerms }}</router-link>
        <router-link to="/privacy" class="hover:text-white">{{ t.navPrivacy }}</router-link>
        <router-link to="/help" class="hover:text-white">{{ t.navHelp }}</router-link>
        <router-link to="/contact" class="hover:text-white">{{ t.navContact }}</router-link>
        <a :href="`mailto:${SUPPORT_EMAIL}`" class="hover:text-brand-soft">{{ SUPPORT_EMAIL }}</a>
      </div>
    </div>
  </footer>
</template>
