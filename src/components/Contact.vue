<template>
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact__content">
                <SectionTitle title="Contact" />
                <p class="contact__content-description">Have a project or opportunity in mind? Feel free to reach out.</p>
                <div class="contact__content-details">
                    <span>Fergana, Uzbekistan</span>
                    <p><a href="mailto:sardoribragimov.7410@gmail.com">sardoribragimov.7410@gmail.com</a></p>
                    <p><a href="https://t.me/Ibragimov_410">@Ibragimov_410</a></p>
                    <p><a href="tel:+998910401485">+998 (91) 040-14-85</a></p>
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
    color: var(--color-text-secondary);
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