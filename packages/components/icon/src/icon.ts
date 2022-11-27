/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 11:52:18
 * @LastEditTime: 2022-11-27 11:54:57
 * @LastEditors: lishutao
 * @Description: 这里主要放的是组件的props， 以及一些公共的方法
 * @FilePath: \scale-ui\packages\components\icon\src\icon.ts
 */
import type { ExtractPropTypes } from "vue"

export const iconProps = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>

