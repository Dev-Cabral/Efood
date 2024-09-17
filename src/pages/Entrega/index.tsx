import { useParams } from 'react-router-dom'
import CartEntrega from '../../components/CartEntrega'
import ListagemProdutos from '../../components/ListagemProdutos'
import { useGetCategoryQuery } from '../../services/api'
import Header from '../Categories/Header'
import { Cardapio } from '../Home'

const Entrega = () => {
  const { id } = useParams<{ id: string }>()

  const parsedId = id !== undefined ? parseInt(id, 10) : undefined
  const { data: itemProdutos } = useGetCategoryQuery(parsedId as number)

  const cardapio: Cardapio | undefined = itemProdutos as unknown as Cardapio

  return (
    <>
      <Header pratos={cardapio} />
      <ListagemProdutos listagem={cardapio?.cardapio} />
      <CartEntrega />
    </>
  )
}

export default Entrega
