<script lang="ts" setup>
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Chip from "primevue/chip";
import {
  searchColorScheme,
  chipStyle,
} from "@/components/forms/search/searchStyleConfig";
import { ref } from "vue";

const { isFilter } = withDefaults(defineProps<{ isFilter: boolean }>(), {
  isFilter: false,
});
const filtered = ref(["Computer"]);

const handleFilter = () => {
  console.log(filtered.value.length);
  if (filtered.value.length < 2) {
    filtered.value.push("New brand", "Jakarta");
  }
};
</script>

<template>
  <div class="mb-6">
    <InputGroup :dt="searchColorScheme">
      <InputGroupAddon>
        <InputIcon class="pi pi-search" />
      </InputGroupAddon>
      <InputText :dt="searchColorScheme" class="w-full" placeholder="Search" />
      <InputGroupAddon :dt="searchColorScheme">
        <button type="button" @click="handleFilter">
          <InputIcon class="pi pi-sliders-h" />
        </button>
      </InputGroupAddon>
    </InputGroup>
    <div v-if="isFilter" class="flex flex-row gap-1 mt-2">
      <Chip
        v-for="(item, i) in filtered"
        :key="i"
        :label="item"
        removable
        :pt="chipStyle"
      />
    </div>
  </div>
</template>
