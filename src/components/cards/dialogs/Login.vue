<script lang="ts" setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import logo from "@/assets/logo.svg";
import google from "@/assets/google.png";
import meta from "@/assets/meta.png";
import x from "@/assets/x.png";
import TextInput from "@/components/forms/TextInput/TextInput.vue";

const isOpen = defineModel("isOpen", { default: false });
</script>

<template>
  <Dialog
    v-model:visible="isOpen"
    modal
    pt:root:class="!border-0"
    header="Login"
    pt:mask:class="backdrop-blur-sm"
  >
    <template #container="{ closeCallback }">
      <div class="flex flex-col px-8 py-8 gap-6 bg-mygray rounded-md">
        <button class="absolute right-5 top-4" @click="closeCallback">
          <span class="pi pi-times"></span>
        </button>
        <div class="flex justify-center">
          <img :src="logo" alt="main logo" />
        </div>
        <Divider class="py-0 my-0" />
        <div class="inline-flex flex-col gap-2">
          <TextInput
            id="username_id"
            label="Username"
            placeholder="Username here"
            name="username"
          />
        </div>
        <div class="inline-flex flex-col gap-2">
          <TextInput
            id="password_id"
            label="Password"
            type="password"
            placeholder="Password here"
            name="password"
          />
        </div>
        <div class="flex items-center gap-4">
          <Button
            label="Cancel"
            @click="closeCallback"
            text
            class="w-full bg-mywhite text-mywhite-dark"
          ></Button>
          <Button
            label="Sign-In"
            text
            class="w-full bg-myorange text-mywhite"
            icon="pi pi-sign-in"
          ></Button>
        </div>
        <Divider class="py-0 my-0" />
        <h5 class="text-center font-semibold text-[13px]">Or login with:</h5>
        <div class="flex justify-center">
          <button title="X media social">
            <Avatar
              :image="x"
              class="mr-2 bg-mywhite p-3"
              size="large"
              shape="circle"
            />
          </button>
          <button title="Meta">
            <Avatar
              :image="meta"
              class="mr-2 bg-mywhite p-1"
              size="large"
              shape="circle"
            />
          </button>
          <button title="Gmail">
            <Avatar
              :image="google"
              class="mr-2 bg-mywhite p-3"
              size="large"
              shape="circle"
            />
          </button>
        </div>
      </div>
    </template>
  </Dialog>
</template>
