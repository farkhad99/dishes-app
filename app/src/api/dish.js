import request from '@/utils/request'

export default {
  get: (params) =>
    request({
      url: '/dishes',
      method: 'get',
      params,
    }),

  create: (data) =>
    request({
      url: '/dishes',
      method: 'put',
      data,
    }),

  update: (id, data) =>
    request({
      url: `/dishes/${id}`,
      method: 'put',
      data,
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
