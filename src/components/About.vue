<template>
    <section id="about" class="about">
        <div class="container">
            <div class="about__content">
                <SectionTitle :title="$t('sections.about')" />
                <div class="about__content-description">
                    <p v-for="(info, index) in about_data" :key="index">
                        {{ info?.translations?.[$i18n.locale] }}    
                    </p>
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
            about_data: null
        }
    },
    mounted(){
        this.getAboutData()
    },
    methods: {
        async getAboutData(){
            const response = await axios.get('https://071f4809201d9e24.mokky.dev/about')
            this.about_data = response.data
            console.log(this.about_data)
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.about__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.about__content-description {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.about__content-description p {
    font-size: var(--text-lg);
    color: var(--color-text);
}

@media(max-width: 1000px){
    .about__content-description p {
        font-size: var(--text-sm);
    }
    .about__content {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
}
</style>