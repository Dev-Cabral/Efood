import Produtos from '../../Models/Produtos'
import { Container } from '../Footer/styles'
import { ProductContainer } from '../ProductList/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  produtos: Produtos[]
}

const ListagemProdutos = ({ produtos }: Props) => (
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

export default ListagemProdutos
