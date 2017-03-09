import httpService from '../../common/httpService'
import config from '../../common/common.config.json'
// initial state
// shape: [{ id, quantity }]
const state = {   
    marketInfoList: { list: [] },
  	total:0
}

// getters
const getters = {   
    marketInfoList: state => state.marketInfoList,
    total: state => state.total
}

// actions
const actions = {
    getMarketInfoList({ commit, state }, param) {
        return new Promise((resolve, reject) => {
            httpService.commonPost(param.path, param.body,
                function(res) {
                    commit('getMarketInfoList', res);
                    // commit('formatOnShell');
                    resolve(res);
                },
                function(err) {
                    reject(err);
                })
        })
    },
    getChangePrice({ commit, state }, param) {
        return new Promise((resolve, reject) => {
            httpService.commonPost(param.path, param.body,
                function(res) {
                    resolve(res);
                },
                function(err) {
                    reject(err);
                })
        })
    },
    // getPpl({ commit, state }, param) {
    //     return new Promise((resolve, reject) => {
    //         httpService.commonPost(param.path, param.body,
    //             function(res) {
    //                 commit('initPpl', res);
    //                 resolve(res);
    //             },
    //             function(err) {
    //                 reject(err);
    //             })
    //     })
    // },
    // makeTop({ commit, state }, param) {
    //     return new Promise((resolve, reject) => {
    //         httpService.commonPost(param.path, param.body,
    //             function(res) {
    //                 resolve(res);
    //             },
    //             function(err) {
    //                 reject(err);
    //             })
    //     })
    // }

}

// mutations
const mutations = {
    // formatOnShell(state) {
    //     for (let i = 0; i < state.resourceList.list.length; i++) {
    //         let item = state.resourceList.list[i];
    //         item.onSell = config.onSell[item.onSell]
    //     }
    // },
    // getNeedList(state,res){
    //     state.needList = res.biz_result;
    //      for (let i = 0; i < state.needList.list.length; i++) {
    //         let item = state.needList.list[i];
    //         item.onSell = config.onSell[item.onSell]
    //     }
    // },
    getMarketInfoList(state, res) {
        state.marketInfoList = res.biz_result;
        state.total = res.biz_result.total;
    },
    // initPpl(state, res) {
    //     for(let i =0;i<res.biz_result.list.length;i++){
    //         let item = res.biz_result.list[i];
    //         item.value=item.keyWord;
    //     }
    //     state.ppl = res.biz_result;
    // }
}

export default {
    state,
    getters,
    actions,
    mutations
}
