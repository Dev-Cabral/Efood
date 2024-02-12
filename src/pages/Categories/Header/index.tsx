import { Link } from 'react-router-dom'
import {
  Container,
  Efood,
  Imagem2,
  Car,
  Italiana,
  Titulo,
  ContainerHeader
} from './styles'

import logo from '../../../asserts/images/logo.png'
import bannerImg from '../../../asserts/images/fundo.png'
import presentacao from '../../../asserts/images/apresentacao-imagem-de-fundo.png'

const Header = () => (
  <Container>
    <img src={bannerImg} alt="" />
    <ContainerHeader>
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
        <h2>Italiana</h2>
      </Italiana>
      <Titulo>La Dolce Vita Trattoria</Titulo>
      <img src={presentacao} alt="Apresentação" />
    </Imagem2>
  </Container>
)

export default Header
