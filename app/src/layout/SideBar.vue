<template>
  <el-aside
    width="200px"
    height="100%"
    class="sidebar"
  >
    <el-menu
      active-text-color="#ffd04b"
      class="el-menu-vertical-demo"
      default-active="1"
    >
      <h1 class="sidebar__title">
        QUICK MENU
      </h1>
      <el-menu-item
        v-for="category,index in categories"
        :key="category"
        :type="category"
        link
        :index="index"
        @click="openCategory(category)"
      >
        <span>{{ category }}</span>
      </el-menu-item>

      <div class="sidebar__user">
        <el-avatar
          :size="32"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <p class="sidebar__user-text">
          User
        </p>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
import { defineComponent } from 'vue'
import { CATEGORIES } from '@/constants/dish'
import router from '@/router'

export default defineComponent({
  name: 'SideBar',

  setup() {
    const openCategory = (category) => {
      router.push({ name: 'DishList', query: { category } })
    }

    return {
      categories: ['All', ...CATEGORIES],
      openCategory
    }
  },
})
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}

.sidebar {
  &__title {
    padding-left: 20px;
    padding-top: 20px;
    margin: 0px;
    margin-bottom: 20px;
  }

  &__user {
    position: absolute;
    bottom: 0;
    display: flex;
    padding: 20px;
    align-items: center;
  }

  &__user-text {
    margin-left: 5px;
  }
}
</style>