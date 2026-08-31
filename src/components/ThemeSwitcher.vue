<template>
    <button
        class="theme-switcher"
        type="button"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
        <span>
            {{ isDark ? '☀' : '☾' }}
        </span>
    </button>
</template>

<script>
export default {
    name: 'ThemeSwitcher',

    data() {
        return {
            theme: 'light',
        };
    },

    computed: {
        isDark() {
            return this.theme === 'dark';
        },
    },

    methods: {
        toggleTheme() {
            this.theme = this.isDark ? 'light' : 'dark';

            this.applyTheme();

            localStorage.setItem('theme', this.theme);
        },

        applyTheme() {
            document.documentElement.setAttribute(
                'data-theme',
                this.theme
            );
        },
    },
};
</script>

<style scoped>
.theme-switcher {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-bg);
    color: var(--color-text);
    cursor: pointer;
    transition:
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease;
}

.theme-switcher:hover {
    background: var(--color-surface);
}

.theme-switcher span {
    font-size: 20px;
}
</style>