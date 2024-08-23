import ListagemProdutos from '../../components/ListagemProdutos'
import Header from './Header'

import { useGetaCategoryQuery } from '../../services/api'

const Category = () => {
  const { data: restaurante, isLoading } = useGetaCategoryQuery()

  // const { dados: listagem } = useGetCategoryCardapioQuery()

  // const { id } = useParams()

  // const [restaurante, setRestaurante] = useState<Cardapio>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
  //     (res) => res.json().then((res) => setRestaurante(res))
  //   )
  // }, [id])

  return (
    <>
      <Header prato={restaurante} />
      <ListagemProdutos listagem={restaurante?.cardapio} />
    </>
  )
}

export default Category
