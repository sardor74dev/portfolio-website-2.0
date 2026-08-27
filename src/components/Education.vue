<template>
    <section class="education">
        <div class="container">
            <div class="education__content">
                <SectionTitle title="education" />
                <div class="education__list">
                    <div class="education__list-item">
                        <div class="education__title">
                            <h3>Bachelor of Science in Computer Science</h3>
                            <div>
                                <p>University of California, Berkeley</p>
                                <p>2008 — 2012</p>
                            </div>
                        </div>
                        <p class="education__description">Gained a solid foundation in software development overall. Focused on building mobile applications.</p>
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
</style>