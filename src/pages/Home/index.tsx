import Start from '../../Models/Home'
import ProductList from '../../components/ProductList'
import suchi from '../../asserts/images/imagem-suchi.png'
import macarrao from '../../asserts/images/macarrao.png'
import estrela from '../../asserts/images/estrela.png'

import Hero from '../../components/Hero'
import { useEffect, useState } from 'react'

export type Cardapio = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  nome: string
  cardapio: string[]
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/promocoes').then((res) =>
      res.json().then((res) => setPromocoes(res))
    )
  }, [])

  return (
    <>
      <Hero />
      <ProductList nome={nome} />
    </>
  )
}

export default Home
