import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

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

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPreco = () => {
    return items
      .reduce((accumulator, valorAtual) => {
        return (accumulator += valorAtual.preco)
      }, 0)
      .toFixed(2)
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  return (
    <ContainerCart className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <ItemCart key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{item.preco}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </ItemCart>
          ))}
        </ul>
        <Prices>
          Valor Total <span> {getTotalPreco()}</span>
        </Prices>
        <ButtonAside title="Clique aqui para continuar comprando" type="button">
          Continuar com a entrega
        </ButtonAside>
      </Sidebar>
    </ContainerCart>
  )
}

export default Cart
