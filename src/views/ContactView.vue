<script setup>
import { ref, watch } from 'vue'
import { SUPPORT_EMAIL } from '../content/legal'
import { useI18n } from '../i18n'

const { t } = useI18n()
const email = ref('')
const subject = ref('')
const message = ref('')
const reason = ref(t.value.contactReasons[0])

watch(
  () => t.value.contactReasons,
  (reasons) => {
    if (!reasons.includes(reason.value)) reason.value = reasons[0]
  },
)

function send() {
  const r = reason.value || t.value.contactReasons[0]
  const body = [
    `From: ${email.value.trim()}`,
    `Reason: ${r}`,
    '',
    message.value.trim(),
  ].join('\n')
  const params = new URLSearchParams({
    subject: subject.value.trim() || r,
    body,
  })
  window.location.href = `mailto:${SUPPORT_EMAIL}?${params.toString()}`
}
</script>

<template>
  <div class="mx-auto max-w-xl px-5 py-12">
    <p class="text-sm font-semibold tracking-tight text-brand-soft">Dispute</p>
    <h1 class="mt-2 font-serif text-4xl font-semibold tracking-tight text-white">
      {{ t.contactTitle }}
    </h1>
    <p class="mt-3 text-base leading-relaxed text-mist">{{ t.contactIntro }}</p>

    <form class="mt-10 space-y-4" @submit.prevent="send">
      <label class="block">
        <span class="mb-2 block text-sm text-mist">{{ t.contactReasonLabel }}</span>
        <select
          v-model="reason"
          class="h-12 w-full rounded-xl border border-white/10 bg-card px-4 text-white outline-none focus:border-brand"
        >
          <option v-for="item in t.contactReasons" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </label>

      <label class="block">
        <span class="mb-2 block text-sm text-mist">{{ t.contactEmailLabel }}</span>
        <input
          v-model="email"
          type="email"
          required
          class="h-12 w-full rounded-xl border border-white/10 bg-card px-4 text-white outline-none placeholder:text-mist/60 focus:border-brand"
          placeholder="you@email.com"
        />
      </label>

      <label class="block">
        <span class="mb-2 block text-sm text-mist">{{ t.contactSubjectLabel }}</span>
        <input
          v-model="subject"
          type="text"
          required
          class="h-12 w-full rounded-xl border border-white/10 bg-card px-4 text-white outline-none placeholder:text-mist/60 focus:border-brand"
        />
      </label>

      <label class="block">
        <span class="mb-2 block text-sm text-mist">{{ t.contactMessageLabel }}</span>
        <textarea
          v-model="message"
          required
          rows="6"
          class="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-white outline-none placeholder:text-mist/60 focus:border-brand"
        />
      </label>

      <button
        type="submit"
        class="inline-flex h-12 w-full items-center justify-center rounded-xl bg-brand text-sm font-semibold text-white transition hover:bg-brand-soft"
      >
        {{ t.contactSend }}
      </button>
      <p class="text-center text-xs text-mist">{{ t.contactHint }}</p>
    </form>

    <p class="mt-8 text-center text-sm text-mist">
      {{ t.contactDirect }}
      <a :href="`mailto:${SUPPORT_EMAIL}`" class="font-semibold text-brand-soft">
        {{ SUPPORT_EMAIL }}
      </a>
    </p>
  </div>
</template>
