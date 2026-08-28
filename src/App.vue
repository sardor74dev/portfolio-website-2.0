<script>
import Header from '@/components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<template>
  <div class="app">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 150px;
  padding: 180px 0;
}

@media (max-width: 1000px){
  .main {
    gap: 100px;
  }
}
</style>
