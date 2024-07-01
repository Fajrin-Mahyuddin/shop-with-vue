<script lang="ts" setup>
import { ref } from "vue";
import MegaMenu from "primevue/megamenu";
import Container from "@/components/Container.vue";
import {
  subheaderColorScheme,
  subheaderStyle,
} from "@/components/subheader/subheaderStyleConfig";

const items = ref([
  {
    label: "Furniture",
    icon: "pi pi-box",
    items: [
      [
        {
          label: "Living Room",
          items: [
            { label: "Accessories" },
            { label: "Armchair" },
            { label: "Coffee Table" },
            { label: "Couch" },
            { label: "TV Stand" },
          ],
        },
      ],
      [
        {
          label: "Kitchen",
          items: [
            { label: "Bar stool" },
            { label: "Chair" },
            { label: "Table" },
          ],
        },
        {
          label: "Bathroom",
          items: [{ label: "Accessories" }],
        },
      ],
      [
        {
          label: "Bedroom",
          items: [
            { label: "Bed" },
            { label: "Chaise lounge" },
            { label: "Cupboard" },
            { label: "Dresser" },
            { label: "Wardrobe" },
          ],
        },
      ],
      [
        {
          label: "Office",
          items: [
            { label: "Bookcase" },
            { label: "Cabinet" },
            { label: "Chair" },
            { label: "Desk" },
            { label: "Executive Chair" },
          ],
        },
      ],
    ],
  },
  {
    label: "Electronics",
    icon: "pi pi-mobile",
    items: [
      [
        {
          label: "Computer",
          items: [
            { label: "Monitor" },
            { label: "Mouse" },
            { label: "Notebook" },
            { label: "Keyboard" },
            { label: "Printer" },
            { label: "Storage" },
          ],
        },
      ],
      [
        {
          label: "Home Theater",
          items: [
            { label: "Projector" },
            { label: "Speakers" },
            { label: "TVs" },
          ],
        },
      ],
      [
        {
          label: "Gaming",
          items: [
            { label: "Accessories" },
            { label: "Console" },
            { label: "PC" },
            { label: "Video Games" },
          ],
        },
      ],
      [
        {
          label: "Appliances",
          items: [
            { label: "Coffee Machine" },
            { label: "Fridge" },
            { label: "Oven" },
            { label: "Vaccum Cleaner" },
            { label: "Washing Machine" },
          ],
        },
      ],
    ],
  },
  {
    label: "Sports",
    icon: "pi pi-clock",
    items: [
      [
        {
          label: "Football",
          items: [
            { label: "Kits" },
            { label: "Shoes" },
            { label: "Shorts" },
            { label: "Training" },
          ],
        },
      ],
      [
        {
          label: "Running",
          items: [
            { label: "Accessories" },
            { label: "Shoes" },
            { label: "T-Shirts" },
            { label: "Shorts" },
          ],
        },
      ],
      [
        {
          label: "Swimming",
          items: [
            { label: "Kickboard" },
            { label: "Nose Clip" },
            { label: "Swimsuits" },
            { label: "Paddles" },
          ],
        },
      ],
      [
        {
          label: "Tennis",
          items: [
            { label: "Balls" },
            { label: "Rackets" },
            { label: "Shoes" },
            { label: "Training" },
          ],
        },
      ],
    ],
  },
]);
</script>

<template>
  <Container bg-color="bg-mygray-light dark:bg-mygray-dark">
    <template #default>
      <MegaMenu :model="items" :dt="subheaderColorScheme" :pt="subheaderStyle">
        <!-- <template #end>
          <button type="button" class="bg-[transparent]">
            <span class="pi pi-sun"></span>
          </button>
        </template> -->
      </MegaMenu>
    </template>
  </Container>
</template>
