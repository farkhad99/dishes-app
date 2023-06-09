import dishApi from '@/api/dish'

const dish = {
  namespaced: true,

  state: {
    dishes: [],
    currentDish: null,
    isLoading: false,
    isDishLoading: false,
    isModalVisible: false,
    isDetailModalVisible: false,
  },

  mutations: {
    SET_DISHES: (state, dishes) => {
      console.log(dishes)
      state.dishes = dishes
    },

    SET_CURRENT_DISH: (state, dish) => {
      state.currentDish = dish
    },

    SET_LOADING: (state, value) => {
      state.isLoading = value
    },

    SET_DISH_LOADING: (state, value) => {
      state.isDishLoading = value
    },

    SET_NEW_DISH_MODAL_VISIBLE: (state, value) => {
      state.isModalVisible = value
    },

    SET_DISH_DETAIL_MODAL_VISIBLE: (state, value) => {
      state.isDetailModalVisible = value
    },
  },

  getters: {
    dishes: (state) => state.dishes,
    getCurrentDish: (state) => state.currentDish,
    isModalVisible: (state) => state.isModalVisible,
  },

  actions: {
    createDish: async ({ commit }, newDish) => {
      try {
        commit('SET_LOADING', true)
        console.log(newDish)
        const response = await dishApi.create(newDish)
        console.log(response)
        commit('SET_CURRENT_DISH', response.data)
        // eslint-disable-next-line no-useless-catch
      } catch (err) {
        throw err
      } finally {
        commit('SET_LOADING', false)
        commit('SET_NEW_DISH_MODAL_VISIBLE', false)
      }
    },

    getDishes: async ({ commit }) => {
      try {
        commit('SET_LOADING', true)
        const response = await dishApi.get()
        commit('SET_DISHES', response.data)
        // eslint-disable-next-line no-useless-catch
      } catch (err) {
        throw err
      } finally {
        commit('SET_LOADING', false)
      }
    },

    getDish: async ({ commit }, dishId) => {
      try {
        commit('SET_DISH_LOADING', true)
        const response = await dishApi.getDish(dishId)
        console.log('DISPATCH', response)
        commit('SET_CURRENT_DISH', response.data)
        // eslint-disable-next-line no-useless-catch
      } catch (err) {
        throw err
      } finally {
        commit('SET_DISH_LOADING', false)
      }
    },

    clearDishes: async ({ commit }) => {
      try {
        commit('SET_LOADING', true)
        const response = await dishApi.clearDishes()
        commit('SET_DISHES', response.data)
        // eslint-disable-next-line no-useless-catch
      } catch (err) {
        throw err
      } finally {
        commit('SET_LOADING', false)
      }
    },
  },
}

export default dish
