<script lang="ts" setup>
import InputText from "primevue/inputtext";
// import { computed } from 'vue';

const { label, type, id, orientation, placeholder, name } = withDefaults(
  defineProps<{
    label: string;
    id: string;
    type: string;
    placeholder: string;
    name: string;
    orientation: "vertical" | "horizontal";
  }>(),
  { type: "text", orientation: "vertical", placeholder: "" },
);
// const getOriented = computed(() => {
// 	return orientation === "vertical" ? "flex-col" : "flex-row"
// })
</script>

<template>
  <div class="flex" v-bind:class="{ 'flex-col': orientation === 'vertical' }">
    <label :for="id" class="text-mywhite-dark font-semibold">{{ label }}</label>
    <InputText
      :id
      :name="name"
      class="w-80 focus:border-none hover:border-none border-none"
      :type="type"
      :placeholder="placeholder"
    >
    </InputText>
    <small class="text-[red] mt-1" id="username-help"
      >Enter your username to reset your password.</small
    >
  </div>
</template>
