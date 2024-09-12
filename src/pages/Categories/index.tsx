import ListagemProdutos from '../../components/ListagemProdutos'
import Header from './Header'

import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../../services/api'

import Cart from '../../components/Cart'
import { Cardapio } from '../Home'

const Category = () => {
  const { id } = useParams<{ id: string }>()

  const parsedId = id !== undefined ? parseInt(id, 10) : undefined

  const { data: itemProdutos } = useGetCategoryQuery(parsedId as number)
  const cardapio: Cardapio | undefined = itemProdutos as unknown as Cardapio

  return (
    <>
      <Header pratos={cardapio} />
      <Cart />
      <ListagemProdutos listagem={cardapio?.cardapio} />
    </>
  )
}

export default Category
