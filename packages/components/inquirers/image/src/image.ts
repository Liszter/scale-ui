
  
import type { ExtractPropTypes, PropType } from "vue"

export const imageProps = {
    /**
     *  image类型：
     **/
    type: {
      type: String,
    },

}
export type imageProps = ExtractPropTypes<typeof imageProps>
