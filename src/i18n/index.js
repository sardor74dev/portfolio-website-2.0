import { createI18n } from 'vue-i18n';

import en from '@/locales/en';
import ru from '@/locales/ru';

const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
    legacy: true,
    locale: savedLocale,
    fallbackLocale: 'en',

    messages: {
        en,
        ru,
    },
});

document.documentElement.lang = savedLocale;

export default i18n;