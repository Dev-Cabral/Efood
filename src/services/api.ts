import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, ItemProdutos } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getHomeCardapio: builder.query<Cardapio[], void>({
      query: () => 'id'
    }),
    getaCategory: builder.query<ItemProdutos[], void>({
      query: () => '/restaurantes/:id'
    })
  })
})

export const { useGetHomeCardapioQuery, useGetaCategoryQuery } = api

export default api
