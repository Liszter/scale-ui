
import type { ExtractPropTypes, PropType } from "vue"
export const dialogProps = {
    /**
     *  dialog类型：
     **/
    type: {
      type: String,
    },
}
export type dialogProps = ExtractPropTypes<typeof dialogProps>
