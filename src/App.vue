<script lang="ts">
import Button from "primevue/button";
import { defineComponent } from "vue";
import Header from "@/components/header/Header.vue";
import Subheader from "@/components/subheader/Subheader.vue";
import Footer from "@/components/footer/Footer.vue";

export default defineComponent({
  components: {
    Button,
    Header,
    Subheader,
    Footer,
  },
});
</script>

<template>
  <Header />
  <Subheader />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
