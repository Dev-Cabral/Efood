import { Cardapio } from '../../pages/Home'
import { ProductContainer } from '../ProductList/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  produtos: Cardapio[]
}

const ListagemProdutos = ({ produtos }: Props) => {
  return (
    <ProductContainer>
      <List>
        {produtos.map((produtos) => (
          <Produto
            key={produtos.id}
            description={produtos.descricao}
            image={produtos.capa}
            title={produtos.titulo}
          />
        ))}
      </List>
    </ProductContainer>
  )
}

export default ListagemProdutos
