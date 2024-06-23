<script lang="ts">
import Button from 'primevue/button';
import { defineComponent } from 'vue';
import Header from '@/components/Header/Header.vue';

export default defineComponent({
  components: {
    Button,
    Header
  },
  data: function () {
    return {
      arr:
        { name: "fajrin", age: 30 }

    }
  }
})
</script>

<template>
  <Header :menus="arr">
    <template #foo>
      <h2>tesasdf</h2>
    </template>
    <template #bar="{ name, age }">
      <h2>{{ name }} - {{ age }}</h2>
    </template>
  </Header>

</template>
