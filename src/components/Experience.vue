<template>
    <section id="experience" class="experience">
        <div class="container">
            <div class="experience__content">
                <SectionTitle title="Experience" />
                <div class="experience__list">
                    <div class="experience__list-item">
                        <div class="experience__title">
                            <h3>Frontend Developer</h3>
                            <div>
                                <p>WEB-MOLOT</p>
                                <p>2024 — Present</p>
                            </div>
                        </div>
                        <p class="experience__description">Developing and maintaining the frontend of web applications. Building responsive interfaces, implementing new features, working with APIs, and improving existing functionality. Working closely with backend development to deliver complete and functional solutions.</p>
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

@media (max-width: 1200px){
    .experience__numbers-item span {
        font-size: 46px;
        color: var(--color-text-secondary);
        font-weight: 700;
    }

    .experience__numbers-item p {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        line-height: 120%;
    }
}

@media (max-width: 1000px){
    .experience__content {
        gap: 40px;
    }
    .experience__description {
        font-size: var(--text-sm);
    }
    .experience__title h3 {
        font-size: var(--text-base);
    }
    .experience__title p {
        font-size: var(--text-sm);
    }
    .experience__numbers {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .experience__numbers > :not(:first-child) {
        border: none;
        padding: 0;
    }
}
</style>