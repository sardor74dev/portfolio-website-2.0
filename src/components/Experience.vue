<template>
    <section id="experience" class="experience">
        <div class="container">
            <div class="experience__content">
                <SectionTitle :title="$t('sections.experience')" />
                <div class="experience__list">
                    <div
                        v-for="job in jobs"
                        :key="job.id"
                        class="experience__list-item"
                    >
                        <div class="experience__title">
                            <h3>{{ job.translations?.[$i18n.locale].position }}</h3>
                            <div>
                                <p>{{ job.company }}</p>
                                <p>{{ job.period?.[$i18n.locale] }}</p>
                            </div>
                        </div>
                        <p class="experience__description">{{ job.translations?.[$i18n.locale].description }}</p>
                    </div>
                </div>
                <div class="experience__numbers">
                    <div
                        v-for="(number, index) in numbers"
                        :key="index"
                        class="experience__numbers-item"
                    >
                        <span>{{ number.number }}</span>
                        <p>{{ number.translations?.[$i18n.locale] }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

export default {
    components: {
        SectionTitle
    },
    data(){
        return {
            jobs: null,
            numbers: null
        }
    },
    mounted(){
        this.getExperienceData()
    },
    methods: {
        async getExperienceData(){
            const response = await axios.get('https://071f4809201d9e24.mokky.dev/experience')
            this.jobs = response.data[0]
            this.numbers = response.data[1]
            console.log(this.jobs, this.numbers)
        }
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
    color: var(--color-text-secondary);
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
    color: var(--color-accent);
    font-weight: 700;
}

.experience__numbers-item p {
    font-size: var(--text-lg);
    color: var(--color-accent);
    line-height: 120%;
}

@media (max-width: 1200px){
    .experience__numbers-item span {
        font-size: 46px;
        color: var(--color-accent);
        font-weight: 700;
    }

    .experience__numbers-item p {
        font-size: var(--text-sm);
        color: var(--color-accent);
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