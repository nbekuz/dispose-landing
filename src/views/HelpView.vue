<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mx-auto max-w-3xl px-5 py-12">
    <p class="text-sm font-semibold tracking-tight text-brand-soft">Dispute</p>
    <h1 class="mt-2 font-serif text-4xl font-semibold tracking-tight text-white">
      {{ t.helpTitle }}
    </h1>
    <p class="mt-3 text-base leading-relaxed text-mist">{{ t.helpIntro }}</p>

    <div class="mt-10 space-y-4">
      <details
        v-for="(item, index) in t.helpItems"
        :key="index"
        class="group rounded-2xl border border-white/8 bg-card px-5 py-4 open:border-brand/40"
      >
        <summary
          class="cursor-pointer list-none text-base font-semibold text-white marker:content-none"
        >
          <span class="flex items-center justify-between gap-3">
            {{ item.q }}
            <span class="text-brand-soft transition group-open:rotate-45">+</span>
          </span>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-mist">{{ item.a }}</p>
      </details>
    </div>

    <router-link
      to="/contact"
      class="mt-10 inline-flex h-11 items-center rounded-xl bg-brand px-5 text-sm font-semibold text-white"
    >
      {{ t.ctaContact }}
    </router-link>
  </div>
</template>
