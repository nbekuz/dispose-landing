import { computed, ref } from 'vue'

const messages = {
  eng: {
    htmlLang: 'en',
    brand: 'Dispute',
    navHome: 'Home',
    navTerms: 'Terms of Service',
    navPrivacy: 'Privacy Policy',
    navHelp: 'Help',
    navContact: 'Contact',
    heroTitle: 'Honest opinions on any link.',
    heroBody:
      'Search a URL, read community reviews, leave your own experience, and keep conversations constructive.',
    ctaApp: 'Open the app',
    ctaContact: 'Contact support',
    feature1Title: 'Search any URL',
    feature1Body: 'Look up a site, store, or page and see what people are saying.',
    feature2Title: 'Reviews & replies',
    feature2Body: 'Write reviews, react, reply, and report content that breaks the rules.',
    feature3Title: 'Safe by design',
    feature3Body: 'Moderation tools, blocking, and account controls help keep discussions usable.',
    footerNote: 'Independent discussion platform for the open web.',
    helpTitle: 'Help',
    helpIntro: 'Quick answers about Dispute. Still stuck? Reach us from Contact.',
    helpItems: [
      {
        q: 'Do I need an account?',
        a: 'You can search and read without an account. Writing reviews, reacting, reporting, and saving items require sign-in.',
      },
      {
        q: 'How do I leave a review?',
        a: 'Open a URL in the app, then write a review based on your real experience. Fake or paid reviews are not allowed.',
      },
      {
        q: 'How do I report content?',
        a: 'Use the Report button under a review. We try to respond within 24 hours.',
      },
      {
        q: 'How do I delete my account?',
        a: 'In the app go to Settings → Delete account. Related data is removed as described in the Privacy Policy.',
      },
      {
        q: 'Who can I contact?',
        a: 'Email dispute777@proton.me or use the Contact page form.',
      },
    ],
    contactTitle: 'Contact',
    contactIntro: 'Send a message and we will get back as soon as we can.',
    contactEmailLabel: 'Email',
    contactSubjectLabel: 'Subject',
    contactMessageLabel: 'Message',
    contactReasonLabel: 'Reason',
    contactReasons: ['Question', 'Bug', 'Idea', 'Other'],
    contactSend: 'Send message',
    contactHint: 'Opens your email app with the message ready to send.',
    contactDirect: 'Or write directly to',
    back: 'Back to home',
    updated: 'Last updated October 2026',
  },
  rus: {
    htmlLang: 'ru',
    brand: 'Dispute',
    navHome: 'Главная',
    navTerms: 'Условия использования',
    navPrivacy: 'Политика конфиденциальности',
    navHelp: 'Помощь',
    navContact: 'Контакты',
    heroTitle: 'Честные мнения о любой ссылке.',
    heroBody:
      'Ищите URL, читайте отзывы сообщества, делитесь своим опытом и держите обсуждения конструктивными.',
    ctaApp: 'Открыть приложение',
    ctaContact: 'Написать в поддержку',
    feature1Title: 'Поиск по URL',
    feature1Body: 'Проверяйте сайт, магазин или страницу и смотрите, что пишут люди.',
    feature2Title: 'Отзывы и ответы',
    feature2Body: 'Пишите отзывы, реагируйте, отвечайте и жалуйтесь на нарушения.',
    feature3Title: 'Безопасный формат',
    feature3Body: 'Модерация, блокировки и настройки аккаунта помогают сохранить диалог.',
    footerNote: 'Независимая платформа обсуждений для открытого интернета.',
    helpTitle: 'Помощь',
    helpIntro: 'Короткие ответы о Dispute. Если этого мало — напишите через Контакты.',
    helpItems: [
      {
        q: 'Нужен ли аккаунт?',
        a: 'Искать и читать можно без аккаунта. Чтобы писать отзывы, реагировать, жаловаться и сохранять, нужен вход.',
      },
      {
        q: 'Как оставить отзыв?',
        a: 'Откройте URL в приложении и напишите отзыв на основе реального опыта. Фейковые и оплаченные отзывы запрещены.',
      },
      {
        q: 'Как пожаловаться на контент?',
        a: 'Нажмите «Пожаловаться» под отзывом. Обычно мы отвечаем в течение 24 часов.',
      },
      {
        q: 'Как удалить аккаунт?',
        a: 'В приложении: Настройки → Удалить аккаунт. Данные удаляются по правилам Политики конфиденциальности.',
      },
      {
        q: 'Куда писать?',
        a: 'На dispute777@proton.me или через форму на странице Контакты.',
      },
    ],
    contactTitle: 'Контакты',
    contactIntro: 'Отправьте сообщение — мы ответим как можно скорее.',
    contactEmailLabel: 'Email',
    contactSubjectLabel: 'Тема',
    contactMessageLabel: 'Сообщение',
    contactReasonLabel: 'Причина',
    contactReasons: ['Вопрос', 'Ошибка', 'Идея', 'Другое'],
    contactSend: 'Отправить',
    contactHint: 'Откроется почтовое приложение с готовым письмом.',
    contactDirect: 'Или напишите напрямую на',
    back: 'На главную',
    updated: 'Обновлено в октябре 2026',
  },
}

export const locale = ref('eng')

export function applyLocale(code) {
  const next = code === 'rus' ? 'rus' : 'eng'
  locale.value = next
  document.documentElement.lang = messages[next].htmlLang
  localStorage.setItem('dispute-landing-lang', next)
}

export function detectLocale() {
  const saved = localStorage.getItem('dispute-landing-lang')
  if (saved === 'rus' || saved === 'eng') return saved
  if (navigator.language?.toLowerCase().startsWith('ru')) return 'rus'
  return 'eng'
}

export function useI18n() {
  const t = computed(() => messages[locale.value])
  return { locale, t }
}
