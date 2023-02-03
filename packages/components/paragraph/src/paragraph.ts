
  
import type { ExtractPropTypes, PropType } from "vue"

export const paragraphProps = {
    /**
     *  paragraph类型：
     **/
    type: {
      type: String,
    },

}
export type paragraphProps = ExtractPropTypes<typeof paragraphProps>
