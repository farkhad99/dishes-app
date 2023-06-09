<template>
  <div class="main-layout">
    <el-container>
      <SideBar width="200px" />
      <el-container>
        <el-header class="main-header m-3 flex">
          <el-button
            class="main-header__new-button"
          >
            New dish
          </el-button>
        </el-header>
        <el-main>
          <slot />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <DishCreateModal />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SideBar from './SideBar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SideBar,
  },
})
</script>

<style lang="scss">
.main-layout {
  height: 100%;
}

.el-container {
  height: 100%;
}

.main-header {
  display: flex;
  justify-content: end;
  align-items: center;

  &__new-button {
    margin-right: 15px;
  }

  &__user {
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 1px;
  }
}
</style>
