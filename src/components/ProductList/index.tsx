import Home from '../../Models/Home'
import { Container } from '../Footer/styles'
import Product from '../Product'
import { List, ProductContainer } from './styles'

export type Props = {
  title: string
  home: Home[]
}

const ProductList = ({ home }: Props) => (
  <ProductContainer>
    <List>
      {home.map((home) => (
        <Product
          key={home.id}
          category={home.category}
          description={home.description}
          image={home.image}
          title={home.title}
          system={home.system}
        />
      ))}
    </List>
  </ProductContainer>
)

export default ProductList
