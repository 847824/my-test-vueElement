const { default: state } = require("./state")

const mutations = {
    getToken(state,data) {
        state.token = data
    },
    getUserInfo(state,data){
        state.userInfo = data
    },
    loginSuccess(state,data){
        state.login =  data
    }
}

export default mutations