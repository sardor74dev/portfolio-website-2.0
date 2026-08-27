<template>
    <section class="about">
        <div class="container">
            <div class="about__content">
                <SectionTitle title="About" />
                <div class="about__content-description">
                    <p>As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.</p>
                    <p>With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible</p>
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
</style>