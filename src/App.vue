<script lang="ts">
import Button from "primevue/button";
import { defineComponent } from "vue";
import Header from "@/components/Header/Header.vue";
import Home from "@/pages/Home.vue";
import Subheader from "@/components/Subheader/Subheader.vue";

export default defineComponent({
  components: {
    Button,
    Header,
    Subheader,
    Home,
  },
  data: function () {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-envelope",
        },
        {
          label: "Products",
          icon: "pi pi-envelope",
        },
      ],
    };
  },
});
</script>

<template>
  <Header />
  <Subheader />
  <Home />
</template>
