import Vue from 'vue';
import Vuex from 'vuex';
import State from '@/store/state';
import Mutation from '@/store/mutations';
import Action from '@/store/actions';
import Getter from '@/store/getters';
 
Vue.use(Vuex);

if (module.hot) {
    // 使 action 和 mutation 成为可热重载模块
    module.hot.accept(['./mutations'], () => {
      // 获取更新后的模块
      // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
      const newMutations = require('./mutations').default;
      // 加载新模块
      store.hotUpdate({
        mutations: newMutations,
      })
    })
  }

export default new Vuex.Store({
    State,
    Mutation,
    Action,
    Getter
})