import ListagemProdutos from '../../components/ListagemProdutos'
import Header from './Header'

import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../../services/api'

const Category = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCategoryQuery(id!)

  // const { dados: listagem } = useGetCategoryCardapioQuery()

  // const [restaurante, setRestaurante] = useState<Cardapio>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
  //     (res) => res.json().then((res) => setRestaurante(res))
  //   )
  // }, [id])

  return (
    <>
      <Header prato={home} />
      <ListagemProdutos listagem={cardapio} />
    </>
  )
}

export default Category
