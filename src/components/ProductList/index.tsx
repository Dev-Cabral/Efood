import Home from '../../Models/Home'
import { Container } from '../Footer/styles'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  title: string
  home: Home[]
}

const ProductList = ({ home }: Props) => (
  <Container>
    <div className="container">
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
    </div>
  </Container>
)

export default ProductList
