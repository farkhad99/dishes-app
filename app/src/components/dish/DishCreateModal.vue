<template>
  <el-dialog
    v-model="$store.state.dish.isModalVisible"
    title="Create new dish"
  >
    <DishCreateForm @cancel="$store.state.dish.isModalVisible = false" />
    <template #footer>
      <span class="dialog-footer" />
    </template>
  </el-dialog>
</template>
  
<script setup>
import DishCreateForm from './DishCreateForm.vue';
</script>
  