<script setup>
import { computed } from 'vue'
import LegalDoc from '../components/LegalDoc.vue'
import { termsEn, termsRu } from '../content/legal'
import { useI18n } from '../i18n'

const { locale } = useI18n()
const raw = computed(() => (locale.value === 'rus' ? termsRu : termsEn))
</script>

<template>
  <LegalDoc :raw="raw" />
</template>
