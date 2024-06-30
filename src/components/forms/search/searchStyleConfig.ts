import mycolors from "@/assets/colors";

export const searchColorScheme = {
  colorScheme: {
    light: {
      border: {
        color: "none",
      },
      shadow: "none",
      root: {
        background: mycolors.mywhite.light,
      },
      addon: {
        background: mycolors.mywhite.light,
        border: {
          color: "none",
        },
      },
    },
    dark: {
      border: {
        color: "none",
      },
      shadow: "none",
      root: {
        background: mycolors.mywhite.dark,
      },
      addon: {
        background: mycolors.mywhite.dark,
        border: {
          color: "none",
        },
      },
    },
  },
};

export const addonColorScheme = {
  colorScheme: {
    light: {
      border: {
        color: "none",
      },
      shadow: "none",
      root: {
        background: mycolors.mywhite.light,
      },
    },
    dark: {
      border: {
        color: "none",
      },
      shadow: "none",
      root: {
        background: mycolors.mywhite.dark,
      },
    },
  },
};

export const chipStyle = {
  root: "bg-myorange-light dark:bg-myblue text-mywhite-light py-1 text-[13px]",
  removeIcon: "text-mywhite-light",
};
