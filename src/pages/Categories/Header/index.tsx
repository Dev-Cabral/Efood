import {
  Imagem,
  Efood,
  DivFrase,
  Imagem2,
  Restaurante,
  Car,
  Italiana,
  Titulo
} from './styles'

import logo from '../../../asserts/images/logo.png'
import bannerImg from '../../../asserts/images/fundo.png'
import presentacao from '../../../asserts/images/apresentacao-imagem-de-fundo.png'

import carrinho from '../../../asserts/images/carrinho.svg'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Restaurante>
      <p>Restaurantes</p>
    </Restaurante>
    <Efood>
      <img src={logo} alt="EFOOD" />
    </Efood>
    <Car>
      <a href="#"></a>0 - produtos(s) no carrinho
    </Car>
    <Imagem2>
      <Italiana>
        <h2>Italiana</h2>
      </Italiana>
      <Titulo>La Dolce Vita Trattoria</Titulo>
      <img src={presentacao} alt="Apresentação" />
    </Imagem2>
  </Imagem>
)

export default Header
