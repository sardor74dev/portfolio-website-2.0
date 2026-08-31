import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './main.css'

import App from './App.vue'
import router from './router'

import i18n from './i18n'

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.documentElement.setAttribute(
        'data-theme',
        savedTheme
    );
} else {
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDark) {
        document.documentElement.setAttribute(
            'data-theme',
            'dark'
        );
    }
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
