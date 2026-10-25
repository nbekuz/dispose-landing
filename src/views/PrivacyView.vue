<script setup>
import { computed } from 'vue'
import LegalDoc from '../components/LegalDoc.vue'
import { privacyEn, privacyRu } from '../content/legal'
import { useI18n } from '../i18n'

const { locale } = useI18n()
const raw = computed(() => (locale.value === 'rus' ? privacyRu : privacyEn))
</script>

<template>
  <LegalDoc :raw="raw" />
</template>
