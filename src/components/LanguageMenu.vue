<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { applyLocale, locales, useI18n } from '../i18n'

const open = ref(false)
const root = ref(null)
const { locale } = useI18n()

const selected = computed(
  () => locales.find((item) => item.code === locale.value) ?? locales[0],
)

function choose(code) {
  applyLocale(code)
  open.value = false
}

function onPointerDown(event) {
  if (!root.value?.contains(event.target)) open.value = false
}

onMounted(() => document.addEventListener('pointerdown', onPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerDown))
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="flex items-center gap-1.5 rounded-xl border border-white/10 bg-card/60 px-2.5 py-1.5 text-sm font-medium text-brand-soft transition hover:border-brand/40"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="open = !open"
    >
      <span class="text-base leading-none" aria-hidden="true">{{ selected.flag }}</span>
      <span>{{ selected.label }}</span>
      <span
        class="text-[10px] transition-transform"
        :class="open ? 'rotate-180' : ''"
        aria-hidden="true"
      >
        ▾
      </span>
    </button>

    <div
      v-if="open"
      role="listbox"
      class="absolute right-0 z-30 mt-2 w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a22] p-1.5 shadow-2xl shadow-black/50"
    >
      <button
        v-for="item in locales"
        :key="item.code"
        type="button"
        role="option"
        class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] transition"
        :class="
          item.code === locale
            ? 'bg-brand/20 font-bold text-white'
            : 'font-medium text-[#e5e7eb] hover:bg-white/5'
        "
        :aria-selected="item.code === locale"
        @click="choose(item.code)"
      >
        <span class="text-xl leading-none" aria-hidden="true">{{ item.flag }}</span>
        {{ item.label }}
      </button>
    </div>
  </div>
</template>
