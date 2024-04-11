<script>
import { ref, computed } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
import BlocksPage from './components/pages/BlocksPage.vue';
import NotFoundPage from './components/pages/NotFoundPage.vue';
import MainPage from './components/pages/MainPage.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterPage
  },
  setup() {
    const routes = {
      '/': MainPage,
      '/blocks': BlocksPage
    };

    const currentPath = ref(window.location.hash.slice(1) || '/');

    window.addEventListener('hashchange', () => {
      currentPath.value = window.location.hash.slice(1) || '/';
    });

    const currentView = computed(() => {
      return routes[currentPath.value] || NotFoundPage;
    });

    return {
      currentView
    };
  }
}
</script>

<template>

  <NavBar />
  <component :is="currentView" />

  <FooterPage />
</template>



<style></style>
