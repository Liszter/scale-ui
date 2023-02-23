
import type { ExtractPropTypes, PropType } from "vue"
export const scaleboxProps = {
    /**
     *  scalebox类型：
     **/
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 1080
    },

    bgColor: {
      type: String,
      default: "transparent"
    },
}
export type scaleboxProps = ExtractPropTypes<typeof scaleboxProps>
