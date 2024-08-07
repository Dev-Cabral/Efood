// import { ItemProdutos } from '../../pages/Categories'
import { Cardapio, ItemProdutos } from '../../pages/Home'
import { ProductContainer } from '../ProductList/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  listagem: ItemProdutos[]
  // lista: ItemProdutos[]
}

const ListagemProdutos = ({ listagem }: Props) => (
  <ProductContainer>
    <List>
      {listagem.map((listagem) => (
        <li key={listagem.id}>
          <Produto
            foto={listagem.foto}
            descricao={listagem.descricao}
            porcao={listagem.porcao}
            nome={listagem.nome}
            preco={listagem.preco}
            id={listagem.id}
          />
        </li>
      ))}
    </List>
  </ProductContainer>
)

export default ListagemProdutos
