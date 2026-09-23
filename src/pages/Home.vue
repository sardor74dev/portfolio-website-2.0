<script>
import HeroSection from '@/components/Hero.vue';
import AboutSection from '@/components/About.vue';
import SkillsSection from '@/components/Skills.vue';
import PortfolioSection from '@/components/Portfolio.vue';
import ContactSection from '@/components/Contact.vue';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    PortfolioSection,
    ContactSection,
    Experience,
    Education
  },
};
</script>

<template>
  <HeroSection v-reveal class="reveal" />
  <AboutSection v-reveal class="reveal" />
  <PortfolioSection v-reveal class="reveal" />
  <Experience v-reveal class="reveal" />
  <SkillsSection v-reveal class="reveal" />
  <Education v-reveal class="reveal" />
  <ContactSection v-reveal class="reveal" />
</template>

<style scoped>
/* .wrapper {
  position: relative;
  z-index: 2;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 100%), #fff;
} */
</style>