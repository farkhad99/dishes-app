import request from '@/utils/request'

export default {
  get: (params) =>
    request({
      url: '/dishes',
      method: 'get',
      params,
    }),

  create: (params) =>
    request({
      url: '/dishes',
      method: 'put',
      params,
    }),

  update: (id, params) =>
    request({
      url: `/dishes/${id}`,
      method: 'put',
      params,
    }),

  getDish: (id, params) =>
    request({
      url: `/dishes/${id}`,
      method: 'get',
      params,
    }),

  deleteDish: (id, params) =>
    request({
      url: `/dishes/${id}`,
      method: 'get',
      params,
    }),

  clearDishes: () =>
    request({
      url: '/dishes/clear',
      method: 'get',
    }),
}
