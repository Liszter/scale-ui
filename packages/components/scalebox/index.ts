
import  scalebox from "./src/scalebox.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SScalebox = withInstall(scalebox)

export {
  SScalebox
}

export default SScalebox 
