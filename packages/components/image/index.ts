
import  image from "./src/image.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SImage = withInstall(image)

export {
  SImage
}

export default SImage 

