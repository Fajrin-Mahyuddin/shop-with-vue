<script lang="ts" setup>
import Container from "@/components/Container.vue";
import ProductCard from "@/components/cards/ProductCard.vue";
import Search from "@/components/forms/search/Search.vue";
import { ref } from "vue";

const products = ref([
  {
    imgs: "https://images.unsplash.com/photo-1718585708744-573c54a2c38c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis repellendus iusto asperiores fugiat odit harum minus reprehenderit, tempore quisquam.",
  },
  {
    imgs: "https://images.unsplash.com/photo-1599631438215-75bc2640feb8?q=80&w=2587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis repellendus.",
  },
  {
    imgs: "https://images.unsplash.com/photo-1718585708744-573c54a2c38c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis repellendus iusto asperiores fugiat odit harum.",
  },
  {
    imgs: "https://images.unsplash.com/photo-1709273085458-53815527ee20?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgs: "https://images.unsplash.com/photo-1517210122415-b0c70b2a09bf?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis repellendus iusto asperiores fugiat odit harum. Ab reiciendis repellendus iusto asperiores fugiat odit harum.",
  },
  {
    imgs: "https://images.unsplash.com/photo-1588030322267-24bcfd19a298?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis repellendus iusto asperiores fugiat odit harum. Ab reihciendis repellendus iusto asperiores fugiat odit harum.",
  },
  {
    imgs: "https://images.unsplash.com/photo-1718585708744-573c54a2c38c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab reiciendis repellendus iusto asperiores fugiat odit harum. Ab reiciendis repellendus iusto asperiores fugiat odit harum.",
  },
]);
</script>

<template>
  <Container bg-color="bg-mygray-light dark:bg-mygray-dark">
    <Search :is-filter="true" />
    <div class="h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <ProductCard v-for="(product, i) in products" :key="i" v-bind="product" />
    </div>
  </Container>
</template>
