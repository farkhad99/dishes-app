<template>
  <p class="dish-list-title font-600 mr-3">
    {{ selectedCategory }}
  </p>
  <el-row :gutter="24">
    <el-col
      v-for="dish in dishes.filter(item => item.category === selectedCategory || selectedCategory === 'All')"
      :key="dish._id"
      :span="6"
    >
      <DishViewCard
        :name="dish.name"
        :description="dish.description"
        :price="dish.price"
        :image-url="dish.imageUrl"
        @click="onCardClick(dish)"
      />
    </el-col>
  </el-row>
  <el-container
    v-if="!dishes.filter(item => item.category === selectedCategory || selectedCategory === 'All').length"
  >
    <p class="no-text">
      No dishes.
    </p>
  </el-container>
</template>

<script setup>
  import { onMounted, computed, watch } from 'vue';
  import { useStore } from 'vuex'
  import DishViewCard from '../../components/dish/DishViewCard.vue';
  import { useRoute } from 'vue-router'
  import router from '@/router';

  const store = useStore()
  const route = useRoute()

  const selectedCategory = computed(() => route.query.category || 'All')
  const dishes = computed(() => store.getters['dish/dishes'])
  
  onMounted(() => {
    store.dispatch('dish/getDishes')
  })

  watch(selectedCategory, () => {
  },{immediate:true})

  const onCardClick = (dish) => {
    router.push({ name: 'DishList', query: { dish_id: dish._id } })
  }
</script>

<style>
.no-text {
  width: 100%;
  text-align: center;
}

.dish-list-title {
  font-size: 21px;
  font-weight: 800;
  margin-top: 0;
}
</style>
