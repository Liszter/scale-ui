
import  paragraph from "./src/paragraph.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SParagraph = withInstall(paragraph)

export {
  SParagraph
}

export default SParagraph 

