<script lang="ts">
import Button from 'primevue/button';
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue';

export default defineComponent({
  components: {
    Button,
    Header,
  },
  data: function () {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-envelope"
        },
        {
          label: "Products",
          icon: "pi pi-envelope"
        }
      ]
    }
  },
})
</script>

<template>
  <Header />
  <h2>ss</h2>
</template>
