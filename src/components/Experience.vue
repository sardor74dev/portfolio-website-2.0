<template>
    <section class="experience">
        <div class="container">
            <div class="experience__content">
                <SectionTitle title="Experience" />
                <div class="experience__list">
                    <div class="experience__list-item">
                        <div class="experience__title">
                            <h3>Senior UX/UI Designer</h3>
                            <div>
                                <p>SuperCo</p>
                                <p>2019 — Present</p>
                            </div>
                        </div>
                        <p class="experience__description">Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.</p>
                    </div>
                </div>
                <div class="experience__numbers">
                    <div class="experience__numbers-item">
                        <span>02+</span>
                        <p>Years of <br>Experience</p>
                    </div>
                    <div class="experience__numbers-item">
                        <span>03+</span>
                        <p>Commercial <br>Projects</p>
                    </div>
                    <div class="experience__numbers-item">
                        <span>10+</span>
                        <p>Technologies</p>
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
.experience__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.experience__list {
    display: flex;
    flex-direction: column;
}

.experience__list-item {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.experience__title {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.experience__title h3 {
    font-size: var(--text-xl);
}

.experience__title p {
    font-size: var(--text-base);
    color: #12121280;
}

.experience__description {
    font-size: var(--text-lg);
    color: var(--color-text);
}

.experience__numbers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.experience__numbers-item {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.experience__numbers > :not(:first-child) {
    border-left: 2px solid #1212121a;
    padding-left: 32px;
}

.experience__numbers-item span {
    font-size: 60px;
    color: var(--color-text-secondary);
    font-weight: 700;
}

.experience__numbers-item p {
    font-size: var(--text-lg);
    color: var(--color-text-secondary);
    line-height: 120%;
}
</style>