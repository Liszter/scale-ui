
import  Image from "./src/imageCard.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SImage = withInstall(Image)

export {
  SImage
}

export default SImage 

