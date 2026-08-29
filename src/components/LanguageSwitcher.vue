<template>
    <div class="language-switcher">
        <button
            v-for="language in languages"
            :key="language.code"
            class="language-switcher__button"
            :class="{
                active: currentLocale === language.code
            }"
            @click="changeLanguage(language.code)"
        >
            {{ language.label }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'LanguageSwitcher',

    data() {
        return {
            languages: [
                {
                    code: 'en',
                    label: 'EN',
                },
                {
                    code: 'ru',
                    label: 'RU',
                },
            ],
        };
    },

    computed: {
        currentLocale() {
            return this.$i18n.locale;
        },
    },

    methods: {
        changeLanguage(locale) {
            this.$i18n.locale = locale;

            localStorage.setItem('locale', locale);

            document.documentElement.lang = locale;
        },
    },
};
</script>

<style scoped>
.language-switcher {
    display: flex;
    align-items: center;
    gap: 8px;
}

.language-switcher__button {
    padding: 4px;

    border: none;
    background: transparent;

    cursor: pointer;

    opacity: 0.5;
    transition: opacity 0.2s ease;
}

.language-switcher__button:hover,
.language-switcher__button.active {
    opacity: 1;
}
</style>