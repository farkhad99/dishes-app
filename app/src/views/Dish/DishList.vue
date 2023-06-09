<template>
  <v-card class="rounded-sm">
    {{ dishes }}
  </v-card>
  <DishViewCard
    v-for="dish in dishes"
    :key="dish._id"
  />
  <el-container
    v-if="!dishes.length"
  >
    <p class="no-text">
      No dishes.
    </p>
  </el-container>
</template>

<script setup>
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import DishViewCard from '../../components/DishViewCard.vue';

  const store = useStore()

  const dishes = computed(() => store.getters['dish/dishes'])

  onMounted(() => {
    store.dispatch('dish/getDishes')
  })
</script>

<style>
.no-text {
  width: 100%;
  text-align: center;
}
</style>
