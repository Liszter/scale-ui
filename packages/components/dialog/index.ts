
import  dialog from "./src/dialog.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SDialog = withInstall(dialog)

export {
  SDialog
}

export default SDialog 
