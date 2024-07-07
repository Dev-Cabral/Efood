import Produtos from '../../Models/Produtos'
import { ProductContainer } from '../ProductList/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  produtos: Produtos[]
}

const ListagemProdutos = ({ produtos }: Props) => {
  return (
    <ProductContainer>
      <List>
        {produtos.map((produtos) => (
          <Produto
            key={produtos.id}
            description={produtos.description}
            image={produtos.image}
            title={produtos.title}
          />
        ))}
      </List>
    </ProductContainer>
  )
}

export default ListagemProdutos
