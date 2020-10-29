<template>
<el-container>
  <!-- 侧边栏 -->
  <el-aside width="180px">
    <navMenu />
  </el-aside>
  <el-container>
    <!-- 头部导航目录 -->
    <el-header>
    <headMenu />
    </el-header>
    <!-- 内容区域 -->
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</el-container>

</template>
<script>
import navMenu from '@/page/navMenu'
import headMenu from '@/page/headMenu'
export default{
    name:'Layout',
    components:{navMenu,headMenu},
    data () {
    return {
    }
  },
  mounted(){
      console.log('11111111111==>',headMenu)
  }
}
</script>

<style>
.el-header{
  padding: 0;
  z-index: 1000;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    background-color: #fff;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    position: absolute;
    height:100%; 
    top: 0px;
    left: 0px;
    bottom: 0;
  }
  .el-container{
      height:100%;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
      height:100%;
  }
</style>