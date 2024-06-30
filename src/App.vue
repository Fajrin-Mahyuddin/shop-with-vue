<script lang="ts">
import Button from "primevue/button";
import { defineComponent } from "vue";
import Header from "@/components/header/Header.vue";
import Subheader from "@/components/subheader/Subheader.vue";

export default defineComponent({
  components: {
    Button,
    Header,
    Subheader,
  },
});
</script>

<template>
  <Header />
  <Subheader />
  <main>
    <RouterView />
  </main>
</template>
