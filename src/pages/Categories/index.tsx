import ListagemProdutos from '../../components/ListagemProdutos'
import Header from './Header'

import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../../services/api'

const Category = () => {
  const { id } = useParams()

  const parsedId = id !== undefined ? parseInt(id, 7) : undefined

  const { data: cardapio } = useGetCategoryQuery(parsedId as number)

  return (
    <>
      <Header pratos={cardapio} />
      <ListagemProdutos listagem={cardapio?.cardapio} />
    </>
  )
}

export default Category
