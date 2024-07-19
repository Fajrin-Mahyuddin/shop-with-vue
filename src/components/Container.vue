<script lang="ts" setup>
const { bgColor } = withDefaults(defineProps<{ bgColor?: string }>(), {
  bgColor: `bg-mywhite-light dark:bg-mywhite-dark`,
});
</script>

<template>
  <div :class="bgColor">
    <div class="max-w-[1440px] m-[auto] px-3 lg:px-0">
      <slot></slot>
    </div>
  </div>
</template>
