<template>
    <section id="education" class="education">
        <div class="container">
            <div class="education__content">
                <SectionTitle :title="$t('sections.education')" />
                <div class="education__list">
                    <div
                        v-for="education in education_data"
                        :key="education.id"
                        class="education__list-item"
                    >
                        <div class="education__title">
                            <h3>{{ education.translations?.[$i18n.locale].degree }}</h3>
                            <div>
                                <p>{{ education.translations?.[$i18n.locale].place }}</p>
                                <p>{{ education.period?.[$i18n.locale] }}</p>
                            </div>
                        </div>
                        <p class="education__description">{{ education.translations?.[$i18n.locale].description }}</p>
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
            education_data: null
        }
    },
    mounted(){
        this.getEducationData()
    },
    methods: {
        async getEducationData(){
            const response = await axios.get('https://071f4809201d9e24.mokky.dev/education')
            this.education_data = response.data
            console.log(this.education_data)
        }
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