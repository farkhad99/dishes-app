import { createStore } from 'vuex'
import dish from './modules/dish'

export default createStore({
  modules: {
    dish,
  },
})
