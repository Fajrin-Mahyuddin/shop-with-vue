<script lang="ts" setup>
import Breadcrumb from "primevue/breadcrumb";
import { ref } from "vue";
const home = ref({
  icon: "pi pi-home",
});
const items = ref([{ label: "Dashboard" }]);
</script>

<template>
  <Breadcrumb
    :home="home"
    :model="items"
    :pt="{
      root: { class: 'bg-[transparent] p-0' },
      item: { class: 'text-mygray-dark dark:text-mygray-light' },
    }"
  >
    <template #item="{ item }">
      <span :class="item.icon"></span>
      <span class="text-[13px]">{{ item.label }}</span>
    </template>
    <template #separator>
      <span class="text-[10px] text-mygray-dark dark:text-mygray-light">/</span>
    </template>
  </Breadcrumb>
</template>
