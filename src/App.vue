<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />

    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 750px;
  margin: auto;
}
</style>
