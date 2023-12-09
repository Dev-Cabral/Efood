import { Imagem, Efood, DivFrase } from './styles'

import logo from '../../asserts/images/logo.png'
import bannerImg from '../../asserts/images/fundo.png'

import { Frase } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Efood>
      <img src={logo} alt="EFOOD" />
    </Efood>
    <DivFrase>
      <Frase>Viva experiências gastronômicas no conforto da sua casa</Frase>
    </DivFrase>
  </Imagem>
)

export default Hero
