import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, open, remove } from '../../store/reducers/cart'

import { Link } from 'react-router-dom'
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

  const handleClick = () => {
    dispatch(open())
  }

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
        <ButtonAside
          onClick={() => handleClick()}
          title="Clique aqui para continuar comprando"
          type="button"
        >
          <Link className="buttom" to={'entrega'}>
            Continuar com a entrega
          </Link>
        </ButtonAside>
      </Sidebar>
    </ContainerCart>
  )
}

export default Cart
