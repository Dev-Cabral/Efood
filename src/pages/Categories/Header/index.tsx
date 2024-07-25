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
import { useEffect, useState } from 'react'
import { Cardapio } from '../../Home'

const Header = () => {
  const [prato, setPrato] = useState<Cardapio>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setPrato(res))
    )
  }, [])

  return (
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
          <h2>{prato?.titulo}</h2>
        </Italiana>
        <Titulo>{prato?.tipo}</Titulo>
        <img src={presentacao} alt="Apresentação" />
      </Imagem2>
    </Container>
  )
}

export default Header
