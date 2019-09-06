import { VueConstructor } from "vue";
import { DirectiveOptions } from "vue/types/options";

export const VueMIcon: VueMIconConstructor;
export default VueMIcon;

export interface VueMIconProps {
  name: string;
  size: number;
  color: string;
}

export interface VueMIconConstructor extends VueConstructor {
  props: VueMIconProps;
}
