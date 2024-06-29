<script lang="ts" setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
// import Button from 'primevue/button';
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
// import OverlayBadge from 'primevue/overlaybadge';
import Container from "@/components/Container.vue";
import logo from "@/assets/logo.svg";
import logoWhite from "@/assets/logo-white.svg";
import { headerStyle, headerColorScheme } from "./headerStyleConfig";
import { menuStyle } from "./menuStyleConfig";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
  {
    label: "Product",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
]);
const settingMenu = ref();
const settings = ref([
  {
    label: "Fajrin Mahyuddin",
    items: [
      { label: "Profile", icon: "pi pi-user" },
      { label: "Logout", icon: "pi pi-sign-out" },
    ],
  },
]);

const handleSettings = (event: MouseEvent) => {
  settingMenu.value.toggle(event);
};
</script>

<template>
  <Container>
    <template #default>
      <Menubar :model="items" :dt="headerColorScheme" :pt="headerStyle">
        <template #start>
          <a href="# " class="flex flex-row">
            <img
              :src="logo"
              alt="main logo"
              class="w-[60px] mr-2 inline-block dark:hidden"
            />
            <img
              :src="logoWhite"
              alt="main logo"
              class="w-[60px] mr-2 hidden dark:inline-block"
            />
          </a>
        </template>
        <template #end>
          <button type="button" class="flex-auto" @click="handleSettings">
            <Avatar icon="pi pi-user" shape="circle" />
            <!-- <OverlayBadge value="4" severity="danger" class="inline-flex">
						</OverlayBadge> -->
          </button>
          <Menu
            ref="settingMenu"
            id="overlay_menu"
            :model="settings"
            :pt="menuStyle"
            :popup="true"
          />
        </template>
      </Menubar>
    </template>
  </Container>
</template>
