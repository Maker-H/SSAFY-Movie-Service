import axios from 'axios'
// 
import router from '@/router'
import { API_URL } from '@/store/CONSTS'


const state = () => {
  return {
    verificationCode: '',
  }
}
const getters = {
}
const mutations = {
}
const actions = {
  signupPwd(user) {
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
        localStorage.setItem('access', JSON.stringify(res.data.access))
        localStorage.setItem('refresh', JSON.stringify(res.data.refresh))
        router.push({name: 'HomeView'}).catch(() => {})
      })
      .catch(err => console.log(err))
  },
  signupMessage(userNumber) {
    axios({
      method: 'post',
      url: `${API_URL}/profile/message/`,
      data: {
        userNumber
      }
    })
      .then((res) => {
        console.log(res.data)
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