<script lang="ts" setup>
import Carousel from "primevue/carousel";
import { ref } from "vue";
import { heroColorScheme } from "./heroStyleConfig";

const products = ref([
  {
    id: "1",
    srcImages:
      "https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    srcImages:
      "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    srcImages:
      "https://images.unsplash.com/photo-1647221598272-9aa015392c81?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    srcImages:
      "https://images.unsplash.com/photo-1647221598398-934ed5cb0e4f?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);
</script>

<template>
  <Carousel
    :value="products"
    :numVisible="1"
    :show-navigators="false"
    :autoplayInterval="5000"
    :dt="heroColorScheme"
  >
    <template #item="slotProps">
      <div class="w-full overflow-hidden rounded-md md:rounded-lg">
        <img
          :src="slotProps.data.srcImages"
          :alt="slotProps.data.id"
          class="w-full h-[300px] object-cover object-center"
        />
      </div>
    </template>
  </Carousel>
</template>
