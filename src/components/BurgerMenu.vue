<script>
export default {
    name: "BurgerMenu",
    props: {
        isMenuOpened: {
            type: Boolean,
            required: true
        },
        toggleMenu: {
            type: Function,
            required: true
        },
        menuItems: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeSection: window.location.hash.slice(1) || 'home'
        }
    },
    mounted() {
        window.addEventListener('hashchange', this.updateActiveSection)
    },
    beforeUnmount() {
        window.removeEventListener('hashchange', this.updateActiveSection)
    },
    methods: {
        updateActiveSection() {
            this.activeSection = window.location.hash.slice(1) || 'home'
        }
    }
}
</script>

<template>
    <nav
        v-show="isMenuOpened"
        id="mobile-menu"
        class="burger-menu"
        aria-label="Main navigation"
    >
        <button type="button" @click="toggleMenu" class="burger-menu__close" aria-label="Close navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
        <ul class="burger-menu__list">
            <li v-for="item in menuItems" :key="item" class="burger-menu__item">
                <a
                    @click="toggleMenu"
                    :href="`#${item.toLowerCase()}`"
                    :class="{ 'is-active': activeSection === item.toLowerCase() }"
                    :aria-current="activeSection === item.toLowerCase() ? 'page' : undefined"
                    class="burger-menu__link"
                >
                    {{ item }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.burger-menu {
    position: fixed;
    top: 1rem;
    z-index: 13;
    display: flex;
    flex-direction: column;
    min-width: 195px;
    padding: 1rem;
    justify-content: space-between;
    border-radius: 8px;
    background: var(--color-bg);
    color: #94a3b8;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);
    font-size: 1rem;
    font-weight: 600;
    transform: translateX(-1.25rem);
    transition: transform 0.5s ease;
}

.burger-menu__list {
    padding: 0;
    text-align: left;
    list-style: none;
}

.burger-menu__item {
    margin: 1rem 0;
}

.burger-menu__link {
    display: block;
    border-radius: 0.375rem;
    color: var(--color-text);
    font-family: var(--font-display);
    font-size: 34px;
    font-weight: 600;
    line-height: 1.5rem;
}

.burger-menu__link:hover {
    color: var(--color-accent);
}

.burger-menu__link.is-active {
    color: var(--color-text-secondary);
}

.burger-menu__close {
    padding: 0;
    color: var(--color-text);
    background: transparent;
}

.burger-menu__close svg {
    width: 50px;
    height: 50px;
}
</style>