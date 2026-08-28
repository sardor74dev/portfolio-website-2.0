<template>
    <section id="about" class="about">
        <div class="container">
            <div class="about__content">
                <SectionTitle title="About" />
                <div class="about__content-description">
                    <p>I'm a Frontend Developer focused on building modern, responsive, and user-friendly web applications. I enjoy transforming ideas and designs into functional interfaces while paying attention to both visual details and usability.</p>
                    <p>My work involves developing and maintaining web applications, building responsive interfaces, integrating APIs, and working with modern frontend technologies such as Vue, Nuxt, and TypeScript.</p>
                    <p>I enjoy learning new technologies, improving my development approach, and exploring better ways to build clean, maintainable, and scalable applications.</p>
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