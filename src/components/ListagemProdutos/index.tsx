// import { ItemProdutos } from '../../pages/Categories'
import { ItemProdutos } from '../../pages/Home'
import { ProductContainer } from '../ProductList/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  listagem: ItemProdutos[] | undefined
}

const ListagemProdutos = ({ listagem }: Props) => (
  <ProductContainer>
    <List>
      {listagem?.map((listagem) => (
        <li key={listagem.id}>
          <Produto
            foto={listagem.foto}
            descricao={listagem.descricao}
            porcao={listagem.porcao}
            nome={listagem.nome}
            preco={listagem.preco}
            id={listagem.id}
            avaliacao={listagem.avaliacao}
          />
        </li>
      ))}
    </List>
  </ProductContainer>
)

export default ListagemProdutos
