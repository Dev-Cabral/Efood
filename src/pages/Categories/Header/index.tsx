import { Link, useParams } from 'react-router-dom'
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

import { Categoria } from '../../../components/Produto/styles'

const Header = () => {
  const [prato, setPrato] = useState<Cardapio>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/1`).then(
      (res) => res.json().then((res) => setPrato(res))
    )
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/2`).then(
      (res) => res.json().then((res) => setPrato(res))
    )
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/3`).then(
      (res) => res.json().then((res) => setPrato(res))
    )
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/4`).then(
      (res) => res.json().then((res) => setPrato(res))
    )
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/5`).then(
      (res) => res.json().then((res) => setPrato(res))
    )
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/6`).then(
      (res) => res.json().then((res) => setPrato(res))
    )
  }, [id])

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
          <h2>{prato?.tipo}</h2>
        </Italiana>
        <Titulo>{prato?.titulo}</Titulo>
        <img src={prato?.capa} alt="" />
      </Imagem2>
    </Container>
  )
}

export default Header
