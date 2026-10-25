<script setup>
import { computed } from 'vue'
import { parseLegal } from '../content/legal'
import { useI18n } from '../i18n'

const props = defineProps({
  raw: { type: String, required: true },
})

const { t } = useI18n()
const doc = computed(() => parseLegal(props.raw))
</script>

<template>
  <article class="mx-auto max-w-3xl px-5 py-12">
    <p class="text-sm font-semibold tracking-tight text-brand-soft">Dispute</p>
    <h1 class="mt-2 font-serif text-4xl font-semibold tracking-tight text-white">
      {{ doc.title }}
    </h1>
    <p class="mt-3 text-sm text-mist">{{ t.updated }}</p>

    <div class="prose-legal mt-10">
      <section v-for="(section, index) in doc.sections" :key="index" class="mt-8 first:mt-0">
        <h2 v-if="section.heading">{{ section.heading }}</h2>
        <template v-for="(block, bi) in section.paragraphs" :key="bi">
          <p v-if="block.type === 'text'">{{ block.text }}</p>
          <ul v-else>
            <li v-for="(item, ii) in block.items" :key="ii">{{ item }}</li>
          </ul>
        </template>
      </section>
    </div>

    <router-link to="/" class="mt-12 inline-block text-sm font-semibold text-brand-soft">
      ← {{ t.back }}
    </router-link>
  </article>
</template>
