import Home from '../../Models/Home'
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
          highlight={home.highlight}
          category={home.category}
          description={home.description}
          image={home.image}
          title={home.title}
          foodType={home.foodType}
        />
      ))}
    </List>
  </ProductContainer>
)

export default ProductList
