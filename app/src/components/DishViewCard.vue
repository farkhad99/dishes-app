<template>
  <el-card
    :body-style="{ padding: '0px' }"
    class="dish-view-card"
  >
    <img
      :src="imageUrl"
      class="dish-view-card__image"
    >
    <div style="padding: 14px">
      <span>{{ props.name }}</span>
      <p
        text
        class="dish-view-card__price"
      >
        ${{ props.price }}.00
      </p>
      <div class="dish-view-card__description">
        {{ props.description }}
      </div>
    </div>
  </el-card>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    imageUrl: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  })
</script>

<style lang="scss">
.dish-view-card {
  max-height: 400px;

  &__price {
    font-size: 12px;
    color: #999;
    margin: 5px 0;
  }

  &__description {
    font-size: 12px;
  }

  &__image {
    width: 100%;
    display: block;
  }
}
</style>