// import { ItemProdutos } from '../../pages/Categories'
import { Cardapio, ItemProdutos } from '../../pages/Home'
import { ProductContainer } from '../ProductList/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  listagem: Cardapio[]
  lista: ItemProdutos[]
}

const ListagemProdutos = ({ listagem }: Props) => (
  <ProductContainer>
    <List>
      {listagem.map((lista) => (
        <li key={lista.id}>
          <Produto
            foto={lista.foto}
            descricao={lista.descricao}
            porcao={lista.porcao}
            nome={lista.nome}
            preco={lista.preco}
            id={lista.id}
          />
        </li>
      ))}
    </List>
  </ProductContainer>
)

export default ListagemProdutos
