<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-submenu :index="ind+1+''" v-for="(item,ind) in navData" :key="ind">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.name }}</span>
      </template>
      <el-submenu :index="(ind+1)+'-'+(ia1+1)" v-show="item.children.length" v-for="(ia,ia1) in item.children" :key="ia1">
        <template slot="title">{{ia.name}}</template>
        <el-menu-item :index="(ia1+1)+'-'+(iz1+1)" v-show="ia.children.length > 1" v-for="(iz,iz1) in ia.children" :key="iz1">{{iz.name}}</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'navMenu',
    data() {
      return {
        navData: [
          { 
            name: '首页', 
            path: '/', 
          },
          { 
            name: '用户管理', 
            path: '/userManage', 
            children: [
              { 
                name: '用户信息', 
                path: '/userManage/userInfo' 
              }, 
              { 
                name: '用户信息', 
                path: '/userManage/userInfo' 
              }
            ] 
          },
          {
            name: '订单管理', 
            path: '/orderManage', 
            children: [
              {
              name: '全部订单',
              path: '/orderManage/allOrder',
              children: [
                { 
                  name: '待配送', 
                  path: '/orderManage/wellSend' 
                }, 
                { 
                  name: '待配送', 
                  path: '/orderManage/wellSend' 
                }
              ]
            }]
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath){
        console.log('手动选择==》',key, keyPath)
      }
    }
  }
</script>
<style>

</style>