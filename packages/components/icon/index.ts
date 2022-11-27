/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 12:04:45
 * @LastEditTime: 2022-11-27 16:52:02
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\icon\index.ts
 */
import  icon from "./src/icon.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SIcon = withInstall(icon)

export {
  SIcon
}

export default SIcon 