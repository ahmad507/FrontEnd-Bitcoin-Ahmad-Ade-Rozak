const { default: axios } = require("axios");

const state = {
    btc: []
};
const getters = {
    allDataBtc: state =>{
        return state.btc
    }
};
const actions = {
    async getBtcData({commit}){
        const response = await axios.get('https://blockchain.info/ticker')
        console.log(response.data)
        commit('setDataBtc', response.data);
    }
};
const mutations = {
    setDataBtc: (state, payload) => {
        state.btc = payload
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}