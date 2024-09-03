import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, ItemProdutos } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://fake-api-tau.vercel.app/api/efood/`
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Cardapio[], void>({
      query: () => 'restaurantes'
    }),
    getCategory: builder.query<ItemProdutos, number>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetHomeQuery, useGetCategoryQuery } = api

export default api
