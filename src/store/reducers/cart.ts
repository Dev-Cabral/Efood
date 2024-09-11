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
      state.items.push(action.payload)
      // const pratos = state.items.find((item) => item.id === action.payload.id)

      // if (!pratos) {
      // } else {
      //   alert('Este pedido ja consta em seu carrinho')
      // }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
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
