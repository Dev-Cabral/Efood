import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import {
  ButtonAside,
  ContainerCart,
  ItemCart,
  Overlay,
  Prices,
  Sidebar
} from './styles'

const Cart = () => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  return (
    <ContainerCart className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <ItemCart>
            <img src="https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//3.webp" />
            <div>
              <h3>Shawarma de Frango</h3>
              <span>R$ 150,00</span>
            </div>
            <button type="button"></button>
          </ItemCart>
          <ItemCart>
            <img src="https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//3.webp" />
            <div>
              <h3>Shawarma de Frango</h3>
              <span>R$ 150,00</span>
            </div>
            <button type="button"></button>
          </ItemCart>
        </ul>
        {/* <Quantity> 2 jogos no carrinho</Quantity> */}
        <Prices>
          Valor Total <span> R$ 250,00</span>
        </Prices>
        <ButtonAside title="Clique aqui para continuar comprando" type="button">
          Continuar com a entrega
        </ButtonAside>
      </Sidebar>
    </ContainerCart>
  )
}

export default Cart
