<template>
  <el-dialog
    v-model="$store.state.dish.isDetailModalVisible"
    @closed="onClose"
  >
    <el-skeleton
      v-if="isLoading"
      :rows="5"
    />
    <el-descriptions
      v-else
      :title="currentDish.name"
      :column="1"
      border
    >
      <el-descriptions-item
        label="Image"
        width="50px"
        height="50px"
        label-align="left"
      >
        <img
          :src="currentDish.imageUrl"
          class="dish-view-card__image"
        >
      </el-descriptions-item>
      <el-descriptions-item
        label="Name"
        label-align="left"
        label-class-name="my-label"
        class-name="my-content"
        width="50px"
      >
        {{ currentDish.name }}
      </el-descriptions-item>
      <el-descriptions-item
        label="Price"
        label-align="left"
        label-class-name="my-label"
        class-name="my-content"
        width="50px"
      >
        {{ currentDish.price }}$
      </el-descriptions-item>
      <el-descriptions-item
        label="Wait time"
        label-align="left"
      >
        {{ currentDish.waitTime }} mins
      </el-descriptions-item>
      <el-descriptions-item
        label="Availability"
        label-align="left"
      >
        {{ currentDish.availableOn || 'always' }}
      </el-descriptions-item>
      <el-descriptions-item
        label="Category"
        label-align="left"
      >
        <el-tag size="small">
          {{ currentDish.category }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item
        label="Info"
        label-align="left"
      >
        {{ currentDish.description }}
      </el-descriptions-item>
    </el-descriptions>
    <el-container class="dish-detail-modal__footer">
      <el-button
        type="danger"
        @click="onDeleteDish"
      >
        Delete
      </el-button>
      <el-button type="info">
        Edit
      </el-button>
    </el-container>
  </el-dialog>
</template>
  
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import router from '@/router';
import { ElMessageBox } from 'element-plus'

const store = useStore()

const isLoading = computed(() => store.state.dish.isDishLoading)
const currentDish = computed(() => store.getters['dish/getCurrentDish'])

const onClose = () => {
  router.replace('/')
}

const onDeleteDish = (done) => {
    ElMessageBox.confirm(`Are you sure to delete ${currentDish.value.name}?`)
      .then(() => {
        store.dispatch('dish/deleteDish', currentDish.value._id)
        done()
      })
      .catch(() => {
        // catch error
      })
  }
</script>
  

<style lang="scss">
.dish-detail-modal__footer {
  display: flex;
  margin-top: 15px;
  justify-content: end;
}
</style>
