import axios from 'axios'
// 
import { API_URL } from '@/store/CONSTS'

const state = () => {
}
const getters = {
}
const mutations = {
}
const actions = {
  signup(context, user) {
    const username = user.username
    const password1 = user.password1
    const password2 = user.password2
    axios({
      method: 'post',
      url: `${API_URL}/login/registeration/`,
      data: {
        username, password1, password2
      }
    })
      .then((res) => {
        // console.log(res)
        localStorage.setItem('access', JSON.stringify(res.data.access));
        localStorage.setItem('refresh', JSON.stringify(res.data.refresh));
      })
      .catch(err => console.log(err))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}