<template>
  <el-form
    ref="ruleFormRef"
    label-width="120px"
    :model="form"
    :rules="rules"
  >
    <el-form-item label="Name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Image URL">
      <el-input v-model="form.imageUrl" />
    </el-form-item>
    <el-form-item label="Price">
      <el-input
        v-model="form.price"
        type="number"
      />
    </el-form-item>
    <el-form-item label="Wait time (minutes)">
      <el-input
        v-model="form.waitTime"
        type="number"
      />
    </el-form-item>
    <el-form-item label="Category">
      <el-select
        v-model="form.category"
        placeholder="please select dish category"
      >
        <el-option
          v-for="category in CATEGORIES"
          :key="category"
          :label="category"
          :value="category"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Available time">
      <el-col :span="24">
        <el-checkbox
          v-model="isAlwasAvailable"
          label="Always"
          name="type"
          @change="form.availableOn = null"
        />
      </el-col>
      <el-select
        v-model="form.availableOn"
        :disabled="isAlwasAvailable"
        placeholder="please select period"
      >
        <el-option
          v-for="period in AVAILABILITY_PERIODS"
          :key="period"
          :label="period"
          :value="period"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Description">
      <el-input
        v-model="form.description"
        type="textarea"
      />
    </el-form-item>
    <el-form-item class="flex justify-end items-end">
      <el-button
        type="primary"
        @click="onSubmit(ruleFormRef)"
      >
        Create
      </el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script setup>
  import { reactive, ref } from 'vue'
  import { CATEGORIES, AVAILABILITY_PERIODS } from '@/constants/dish';
  import { useStore } from 'vuex';

  const isAlwasAvailable = ref(false)

  const ruleFormRef = ref()
  const form = reactive({
    name: null,
    description: '',
    category: '',
    availableOn: '',
    price: null,
    waitTime: null,
    imageUrl: ''
  })

  const rules = reactive({
    name: [{ required: true, message: 'Please select dish name', trigger: 'blur' }],
    description: [{ required: true, message: 'Please enter dish description', trigger: 'blur' }],
  })

  const store = useStore();

  const onSubmit = async (formEl) => {
    if (!formEl) return;

    const isValid = await formEl.validate()

    if (isValid) {
      store.dispatch('dish/createDish', form);
    }
  }
</script>