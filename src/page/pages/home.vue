<template>
  <div id="main">
    <div id="pies" style="width: 400px;height: 400px;"></div>
    <br>
    <div id="histogram" style="width: 300px;height: 300px;"></div>
  </div>
</template>

<script>
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/pie');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    data() {
      return {
        CHUNK_COUNT: 32,
        dataCount: 0
      }
    },
    mounted() {

      this.getEachartsPie()
      this.getEachartsBar()
    },
    methods: {
      getEachartsPie() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pies'));
        // 绘制图表
        myChart.setOption({
          // title: {
          backgroundColor: '#2c343c',
          series: [{
            name: '销量',
            type: 'pie',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' },
              { value: 500, name: '百度百科' }
            ],
            label: {
              // 设置字体样式
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            },
            // 设置线条样式
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          }],
          itemStyle: {
            // 阴影的大小
            shadowBlur: 20,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: '#fff'
          }
        });
      },
      getEachartsBar() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('histogram'));
        // 绘制图表
        myChart.setOption({
          // backgroundColor: '#2c343c',
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }],
        });
      },
    },
  }
</script>
<style>

</style>