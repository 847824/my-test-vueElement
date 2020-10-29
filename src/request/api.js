

import { get, post } from './http'
export const api1 = p1 => get('https://xxx/v5/weather?city=qingdao&key=1b47b16e4aa545eaa55a66f859ac0089', p1)
export const api2 = p2 => get('https://xxx/v5/weather?city=taian&key=1b47b16e4aa545eaa55a66f859ac0089', p2)
export const api3 = p => post('https://xxx/svserver/upload/', p)

// 组件调用方式：import { api1, api2, api3 } from '@/request/api'// 导入我们的api接口


 //原始的post方法
// this.$axios({
//   url: 'https://www.maomin.club/svserver/upload/',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   },
//   data: data
// }).then((response) => {
//   // success
// })
//   .catch((error) => {
//     // error
//     console.log(error)
//   })