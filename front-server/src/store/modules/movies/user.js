import axios from "axios";
//
import { API_URL } from "@/store/CONSTS";
import refresh from '@/store/modules/auths/refresh'

const state = () => {
  return {
    user: null,
    userList: null,
  }
};
const getters = {
};

const mutations = {
  GET_USER_LIST(state, userList) {
    console.log(userList)
    state.userList = userList
  },
  GET_USER(state, user) {
    state.user = user
  },
  REST_USER(state) {
    state.user = ''
  }
};

const actions = {
  resetUser(context) {
    context.commit('REST_USER')
  },
  getUserList(context) {
    const access = JSON.parse(localStorage.getItem('access'))
    axios({
      method: "post",
      url: `${API_URL}/profile/users/`,
      headers: {
        'Authorization': `Bearer ${access}`
      }
    })
      .then((res) => {
        // console.log(res.data)
        context.commit('GET_USER_LIST', res.data)
      })
      .catch((err) => { 
        if (err.response.status === 401 && access) {
          refresh.actions.token_refresh()
          context.dispatch('getUser')
        }
      })
  },
  getUser(context) {
    const access = JSON.parse(localStorage.getItem('access'))
    axios({
      method: "post",
      url: `${API_URL}/profile/user-data/`,
      headers: {
        'Authorization': `Bearer ${access}`
      }
    })
      .then((res) => {
        // console.log(res.data)
        context.commit('GET_USER', res.data)
      })
      .catch((err) => {
        if (err.response.status === 401 && access) {
          refresh.actions.token_refresh()
          context.dispatch('getUser')
        }
      })
  },
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
