import Home from '../../Models/Home'
import { Cardapio } from '../../pages/Home'
import Product from '../Product'
import { List, ProductContainer } from './styles'

export type Props = {
  prato: Cardapio[]
}

const ProductList = ({ prato }: Props) => (
  <ProductContainer>
    <List>
      {prato.map((prato) => (
        <Product
          key={prato.id}
          nome={prato.nome}
          titulo={prato.titulo}
          destacado={prato.destacado}
          tipo={prato.tipo}
          avaliacao={prato.avaliacao}
          descricao={prato.descricao}
          capa={prato.capa}
        />
      ))}
    </List>
  </ProductContainer>
)

export default ProductList
