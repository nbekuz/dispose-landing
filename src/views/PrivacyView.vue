<script setup>
import LegalDoc from '../components/LegalDoc.vue'
import { privacyEn } from '../content/legal'
</script>

<template>
  <LegalDoc :raw="privacyEn" />
</template>
