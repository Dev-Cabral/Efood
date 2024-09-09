import ProductList from '../../components/ProductList'

import Hero from '../../components/Hero'
import { useGetHomeQuery } from '../../services/api'

export interface ItemProdutos {
  avaliacao: number
  foto: string
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
}

export type Cardapio = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemProdutos[]
}

const Home = () => {
  const { data: home } = useGetHomeQuery()

  return (
    <>
      <Hero />
      <ProductList prato={home} />
    </>
  )
}

export default Home
