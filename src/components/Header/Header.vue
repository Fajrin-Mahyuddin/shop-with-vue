<script lang="ts" setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
// import Button from 'primevue/button';
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
import OverlayBadge from "primevue/overlaybadge";
import Container from "@/components/Container.vue";
import logo from "@/assets/logo.svg";
import logoWhite from "@/assets/logo-white.svg";
import { headerStyle, headerColorScheme } from "./headerStyleConfig";
import { menuStyle } from "./menuStyleConfig";
import Login from "@/components/cards/dialogs/Login.vue";
// import { useRouter } from 'vue-router';

// const router = useRouter()

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "/",
  },
  {
    label: "Product",
    icon: "pi pi-star",
    route: "/products",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
        route: "/components",
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
const isopen = ref(false);

const settings = ref([
  {
    label: "Fajrin Mahyuddin",
    items: [
      { label: "Profile", icon: "pi pi-user" },
      {
        label: "Login",
        icon: "pi pi-sign-in",
        command: () => (isopen.value = true),
      },
      // { label: "Logout", icon: "pi pi-sign-out" },
    ],
  },
]);

const handleSettings = (event: MouseEvent) => {
  settingMenu.value.toggle(event);
};
</script>

<template>
  <Login v-model:is-open="isopen" />
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
        <template #item="{ item, props, hasSubmenu, root }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else href="# " v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <i
              v-if="hasSubmenu"
              :class="[
                'pi pi-angle-down text-[13px]',
                { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
              ]"
            ></i>
          </a>
        </template>
        <template #end>
          <button type="button" aria-label="Bookmark" class="mr-2">
            <OverlayBadge value="4" severity="danger" class="inline-flex">
              <Avatar icon="pi pi-shopping-cart" shape="circle" />
            </OverlayBadge>
          </button>
          <button type="button" class="flex-auto" @click="handleSettings">
            <Avatar icon="pi pi-user" shape="circle" />
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
