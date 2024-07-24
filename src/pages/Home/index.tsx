import ProductList from '../../components/ProductList'

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
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setPromocoes(res))
    )
  }, [])

  return (
    <>
      <Hero />
      <ProductList prato={promocoes} />
    </>
  )
}

export default Home
