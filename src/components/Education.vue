<template>
    <section id="education" class="education">
        <div class="container">
            <div class="education__content">
                <SectionTitle :title="$t('sections.education')" />
                <div class="education__list">
                    <div class="education__list-item">
                        <div class="education__title">
                            <h3>Bachelor's Degree in Software Engineering</h3>
                            <div>
                                <p>Fergana State Technical University</p>
                                <p>2022 — 2026</p>
                            </div>
                        </div>
                        <p class="education__description">Built a foundation in software development and computer science while gaining practical experience through academic and personal projects. Developed skills in web development and modern programming technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
    components: {
        SectionTitle
    }
}
</script>

<style scoped>
.education__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.education__list {
    display: flex;
    flex-direction: column;
}

.education__list-item {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.education__title {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.education__title h3 {
    font-size: var(--text-xl);
}

.education__title p {
    font-size: var(--text-base);
    color: #12121280;
}

.education__description {
    font-size: var(--text-lg);
    color: var(--color-text);
}

@media(max-width: 1000px){
    .education__content {
        gap: 40px;
    }
    .education__description {
        font-size: var(--text-sm);
    }
    .education__title h3 {
        font-size: var(--text-base);
    }
    .education__title p {
        font-size: var(--text-sm);
    }
}
</style>