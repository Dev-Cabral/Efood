import ProductList from '../../components/ProductList'

import Hero from '../../components/Hero'

import { useGetHomeCardapioQuery } from '../../services/api'

export interface ItemProdutos {
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
  const { prato: restaurante, isLoading } = useGetHomeCardapioQuery()

  // const [promocoes, setPromocoes] = useState<Cardapio[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
  //     (res) => res.json().then((res) => setPromocoes(res))
  //   )
  // }, [])

  return (
    <>
      <Hero />
      <ProductList prato={restaurante} />
    </>
  )
}

export default Home
