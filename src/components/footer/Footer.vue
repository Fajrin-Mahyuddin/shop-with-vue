<script lang="ts" setup>
import Container from "../Container.vue";
import logo from "@/assets/logo-white.svg";
import Avatar from "primevue/avatar";
import google from "@/assets/google.png";
import meta from "@/assets/meta.png";
import Divider from "primevue/divider";
import x from "@/assets/x.png";
</script>

<template>
  <Container bg-color="bg-myorange-light">
    <footer class="mt-[50px] py-[80px] text-mywhite text-[14px]">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="flex flex-col md:col-span-2">
          <img :src="logo" alt="main logo" class="self-center md:self-start" />
          <p class="my-3 text-center md:text-left">
            Simple E-commerce site using modern javascript library VueJS. This
            is just for portfolio purpose.
          </p>
          <div class="flex justify-center md:justify-start">
            <button title="X media social">
              <Avatar
                :image="x"
                class="mr-2 text-myorange bg-mywhite p-1"
                icon="pi pi-google"
                shape="circle"
              />
            </button>
            <button title="Meta">
              <Avatar
                :image="meta"
                class="mr-2 text-myorange bg-mywhite p-1"
                icon="pi pi-linkedin"
                shape="circle"
              />
            </button>
            <button title="Gmail">
              <Avatar
                :image="google"
                class="mr-2 text-myorange bg-mywhite p-1"
                icon="pi pi-github"
                shape="circle"
              />
            </button>
          </div>
        </div>
        <ul>
          <h1 class="text-[16px] font-medium">Lorem, ipsum.</h1>
          <li>Lorem ipsum dolor</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <ul>
          <h1 class="text-[16px] font-medium">Lorem, ipsum.</h1>
          <li>Lorem ipsum dolor</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </div>
      <Divider />
    </footer>
  </Container>
</template>
