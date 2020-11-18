<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      :key="item.name"
      v-for="(item, index) in editableTabs"
      :label="item.title"
      :name="item.name"
    >
      <!-- {{item.content}} -->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    mounted(){
      this.$on('test',function(msg){//$on()和$emit()要放在同一个页面里才生效,而且$on()要放在这个方法里才能监听其他方法的触发
        console.log('wwwwwwww=>',msg)
      })
     
    },
    methods: {
      handleTabsEdit(targetName, action) {
        console.log('有没有进入此函数')
        this.$emit('test',{name:'这是组件事件监听测试'})
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      getces(){

        
      }
    }
  }
</script>
<style>
.el-tabs__new-tab{
color: #000;
height: 40px;
width: 40px;
line-height: 40px;
}
.el-tabs--card>.el-tabs__header {
    background: #fff;
}
</style>