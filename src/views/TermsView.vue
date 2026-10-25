<script setup>
import LegalDoc from '../components/LegalDoc.vue'
import { termsEn } from '../content/legal'
</script>

<template>
  <LegalDoc :raw="termsEn" />
</template>
