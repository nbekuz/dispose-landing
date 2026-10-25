<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()

const features = [
  { titleKey: 'feature1Title', bodyKey: 'feature1Body' },
  { titleKey: 'feature2Title', bodyKey: 'feature2Body' },
  { titleKey: 'feature3Title', bodyKey: 'feature3Body' },
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(108,77,255,0.28),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.12),_transparent_45%)]"
      />
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.07]"
        style="
          background-image: linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
          background-size: 48px 48px;
        "
      />

      <div class="relative mx-auto flex min-h-[78dvh] max-w-5xl flex-col justify-center px-5 py-20">
        <p class="text-sm font-semibold tracking-[0.2em] text-brand-soft">
          {{ t.brand.toUpperCase() }}
        </p>
        <h1
          class="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
        >
          {{ t.heroTitle }}
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-mist">{{ t.heroBody }}</p>
        <div class="mt-10 flex flex-wrap gap-3">
          <router-link
            to="/contact"
            class="inline-flex h-12 items-center rounded-xl bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-soft"
          >
            {{ t.ctaContact }}
          </router-link>
          <router-link
            to="/help"
            class="inline-flex h-12 items-center rounded-xl border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-white/30"
          >
            {{ t.navHelp }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="border-t border-white/5 bg-surface">
      <div class="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:grid-cols-3">
        <div v-for="item in features" :key="item.titleKey">
          <h2 class="text-lg font-semibold text-white">{{ t[item.titleKey] }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-mist">{{ t[item.bodyKey] }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
