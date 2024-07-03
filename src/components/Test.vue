<script lang="ts">
export default {
  props: ["name"],
};
</script>

<template>
  <div class="text-20px">{{ name }}</div>
  <div v-if="name">Okay you name {{ name }}</div>
  <div v-else>no name</div>
</template>
