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

import bannerImg from '../../../asserts/images/fundo.png'
import logo from '../../../asserts/images/logo.png'
import { Cardapio } from '../../Home'

import { useGetaCategoryQuery } from '../../../services/api'

type Props = {
  prato: Cardapio | undefined
}

const Header = ({ prato }: Props) => {
  const { data: home } = useGetaCategoryQuery(id!)

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
            <p>0 - produtos(s) no carrinho</p>
          </Car>
        </ContainerHeader>
        <Imagem2>
          <Italiana>
            <h2>{prato?.tipo}</h2>
          </Italiana>
          <Titulo>{prato?.titulo}</Titulo>
          <img src={prato?.capa} alt="" />
        </Imagem2>
      </Container>
    </>
  )
}

export default Header
