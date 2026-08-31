<template>
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact__content">
                <SectionTitle :title="$t('sections.contact')" />
                <p class="contact__content-description">{{ contact_data.translations?.[$i18n.locale].text }}</p>
                <div class="contact__content-details">
                    <span>{{ contact_data.translations?.[$i18n.locale].location }}</span>
                    <p><a :href="`mailto:${contact_data.links?.email}`">{{ contact_data.links?.email }}</a></p>
                    <p><a :href="`https://t.me/${contact_data.links?.telegram}`">@{{ contact_data.links?.telegram }}</a></p>
                    <p><a :href="`tel:${contact_data.links?.mob}`">{{ contact_data.links?.mob }}</a></p>
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
            contact_data: {},
        }
    },
    mounted(){
        this.getContactData()
    },
    methods: {
        async getContactData(){
            const response = await axios.get('https://071f4809201d9e24.mokky.dev/contact')
            this.contact_data = response.data[0]
            console.log(response.data[0])
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.contact__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.contact__content-description {
    font-size: var(--text-mxl);
    color: var(--color-text);
}

.contact__content-details span {
    font-size: var(--text-lg);
    color: var(--color-text);
    line-height: 170%;
}

.contact__content-details p {
    font-size: var(--text-lg);
    color: var(--color-accent);
    line-height: 170%;
}

@media(max-width: 1000px){
    .contact__content {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .contact__content-description {
        font-size: var(--text-lg);
    }
    .contact__content-details span,
    .contact__content-details p {
        font-size: var(--text-sm);
    }
}
</style>