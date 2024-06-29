import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { menuColorSchema } from "@/components/Header/menuStyleConfig";

const mypreset = definePreset(Aura, {
  components: {
    menu: menuColorSchema,
  },
});

export default mypreset;
