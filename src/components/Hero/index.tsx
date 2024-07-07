import { Imagem, Efood } from './styles'

import logo from '../../asserts/images/logo.png'
import bannerImg from '../../asserts/images/fundo.png'

import { Frase } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Efood>
      <img src={logo} alt="EFOOD" />
      <Frase>
        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
      </Frase>
    </Efood>
  </Imagem>
)

export default Hero
