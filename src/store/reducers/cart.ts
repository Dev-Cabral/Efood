import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProdutos } from '../../pages/Home'

export type CartState = {
  items: ItemProdutos[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemProdutos>) => {
      const pratos = state.items.find((item) => item.id === action.payload.id)

      if (!pratos) {
        state.items.push(action.payload)
      } else {
        alert('Este pedido ja consta em seu carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)

      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },

    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
