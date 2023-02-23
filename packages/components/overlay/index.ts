
import  overlay from "./src/overlay.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SOverlay = withInstall(overlay)

export {
  SOverlay
}

export default SOverlay 
