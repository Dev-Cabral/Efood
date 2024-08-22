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
import { useEffect, useState } from 'react'
import { Cardapio } from '../../Home'

type Props = {
  prato: Cardapio | undefined
}

const Header = ({ prato }: Props) => {
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
