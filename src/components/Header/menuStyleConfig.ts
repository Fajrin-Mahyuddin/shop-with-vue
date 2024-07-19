import { MenuPassThroughOptionType } from "primevue/menu";
import mycolors from "@/assets/colors";

export const menuColorSchema = {
  colorScheme: {
    light: {
      root: {
        background: mycolors.mywhite.light,
      },
      item: {
        focusBackground: mycolors.myorange.light,
        focusColor: mycolors.mywhite.light,
        icon: {
          focusColor: mycolors.mywhite.light,
          activeColor: mycolors.mywhite.light,
        },
      },
    },
    dark: {
      dark: {
        background: mycolors.mywhite.dark,
      },
      item: {
        focusBackground: mycolors.myorange.dark,
        focusColor: mycolors.mywhite.light,
        icon: {
          focusColor: mycolors.mywhite.light,
          activeColor: mycolors.mywhite.light,
        },
      },
    },
  },
};
export const menuStyle: MenuPassThroughOptionType = {
  // root: 'border-none bg-mywhite-light dark:bg-mywhite-dark',
  item: "text-[13px]",
  itemIcon: "text-[13px]",
  // itemContent: 'hover:bg-myorange-light dark:hover:bg-myorange-dark',
  // itemLabel: 'group-hover:text-[#fff]',
};
