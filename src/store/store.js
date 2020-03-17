import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        produtos: [],
        quantidade: 0,
        preco: 0
    },
    getters: {
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
        quantidade: state => state.quantidade,
        preco: state => state.preco
    },
    mutations: {
        adicionarProduto(state, payload){
            return state.produtos.push(payload)
        },
        alteraQuantidade(state, payload){
            state.quantidade = payload
        },
        alteraPreco(state, payload){
            state.preco = payload
        }
    },
    actions: {
        adicionarProduto({ commit }, payload){
            commit('adicionarProduto', payload)
        },
    }
})