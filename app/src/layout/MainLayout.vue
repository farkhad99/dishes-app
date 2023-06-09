<template>
  <div class="main-layout">
    <el-container>
      <SideBar width="200px" />
      <el-container>
        <el-header class="main-header m-3 flex">
          <el-button
            class="main-header__new-button"
            @click="openNewDishModal"
          >
            New dish
          </el-button>
          <el-button
            v-if="$store.state.dish.dishes.length"
            type="danger"
            :icon="Delete"
            circle
            @click="onClearDishes"
          />
        </el-header>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
    <DishCreateModal />
    <DishDetailModal />
  </div>
</template>

<script setup>
import DishCreateModal from '../components/dish/DishCreateModal.vue'
import DishDetailModal from '../components/dish/DishDetailModal.vue'
import SideBar from './SideBar.vue'
import { ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

  const store = useStore()
  const route = useRoute();

  const openNewDishModal = () => {
    store.commit('dish/SET_NEW_DISH_MODAL_VISIBLE', true)
  }

  const onClearDishes = (done) => {
    ElMessageBox.confirm('Are you sure to remove all the dishes?')
      .then(() => {
        store.dispatch('dish/clearDishes')
        done()
      })
      .catch((err) => {
        console.log(err)
        // catch error
      })
  }

  watch(() => route.query.dish_id, () => {
    if (route.query.dish_id) {
      store.dispatch('dish/getDish', route.query.dish_id)
      store.commit('dish/SET_DISH_DETAIL_MODAL_VISIBLE', true)
    }
  })
</script>

<style lang="scss">
.main-layout {
  padding-top: 0;
  height: 100%;
}

.el-main {
  padding-top: 0!important;
}

.el-container {
  height: 100%;
}

.main-header {
  display: flex;
  justify-content: end;
  align-items: center;

  &__new-button {
    margin-right: 5px;
  }

  &__user {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 1px;
  }
}
</style>
