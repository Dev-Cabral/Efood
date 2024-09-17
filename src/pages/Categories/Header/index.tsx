import { Link } from 'react-router-dom'
import {
  Car,
  Container,
  ContainerHeader,
  Efood,
  Imagem2,
  Italiana,
  Titulo
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../../store/reducers/cart'

import bannerImg from '../../../asserts/images/fundo.png'
import logo from '../../../asserts/images/logo.png'
import { RootReducer } from '../../../store'
import { Cardapio } from '../../Home'

export type Props = {
  pratos: Cardapio | undefined
  children?: React.ReactNode // Adiciona children como opcional
}

const Header = ({ pratos }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Container>
        <img src={bannerImg} alt="" />
        <ContainerHeader className="overlay">
          <nav>
            <a href="">
              <Link to="/">Restaurantes</Link>
            </a>
          </nav>
          <Efood>
            <img src={logo} alt="EFOOD" />
          </Efood>
          <Car>
            <p onClick={openCart}> {items.length} - produtos(s) no carrinho</p>
          </Car>
        </ContainerHeader>
        <Imagem2>
          <Italiana>
            <h2>{pratos?.tipo}</h2>
          </Italiana>
          <Titulo>{pratos?.titulo}</Titulo>
          <img src={pratos?.capa} alt="" />
        </Imagem2>
      </Container>
    </>
  )
}

export default Header
