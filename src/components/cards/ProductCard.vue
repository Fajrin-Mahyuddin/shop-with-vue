<script lang="ts" setup>
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Divider from "primevue/divider";

defineProps<{ description: string; imgs: string }>();
</script>

<template>
  <div
    class="flex flex-col shadow-sm rounded-md overflow-hidden justify-between bg-mywhite-light dark:bg-mywhite-dark"
  >
    <div class="w-full flex flex-col h-full">
      <div class="overflow-hidden">
        <img
          :src="imgs"
          alt="image one"
          class="w-full max-h-[200px] object-cover transition-all hover:scale-[1.2]"
        />
      </div>
      <div class="p-2 flex-[1]">
        <h2 class="font-medium">Example title</h2>
        <span class="text-[12px]">review</span>
        <p class="text-[13px] mt-3 line-clamp-2">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="p-2 flex flex-col">
      <div class="flex justify-end text-[17px] font-semibold">
        <span class="line-through text-mygray-dark">$10.000</span>
        <span>/ $6.000</span>
      </div>
      <Divider />
      <div class="flex justify-between items-center">
        <div>
          <button>
            <Avatar
              icon="pi pi-bookmark"
              class="mr-2 text-[12px] hover:bg-myblue-light hover:text-[#fff] dark:hover:bg-myorange-dark transition-all"
              size="xsmall"
              shape="circle"
            />
          </button>
          <button class="group">
            <Avatar
              icon="pi pi-heart"
              class="mr-2 hover:bg-[#ff000096] dark:hover:bg-myorange-dark hover:text-[#fff] transition-all"
              size="xsmall"
              shape="circle"
            />
          </button>
        </div>
        <Button
          severity="secondary"
          class="hover:text-[#fff] hover:bg-myorange-light dark:hover:bg-myorange-dark transition-all border-none"
          size="small"
          >Add <span class="pi pi-cart-plus"></span
        ></Button>
      </div>
    </div>
  </div>
</template>
