import { Cardapio } from '../../pages/Home'
import Product from '../Product'
import { List, ProductContainer } from './styles'

export type Props = {
  prato: Cardapio[] | undefined
}

const ProductList = ({ prato }: Props) => {
  return (
    <ProductContainer>
      <List>
        {prato?.map((prato) => (
          <Product
            key={prato.id}
            id={prato.id}
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
}

export default ProductList
