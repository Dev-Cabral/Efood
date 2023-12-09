import Game from '../../Models/Games'
import { Container } from '../Footer/styles'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  title: string
  games: Game[]
}

const ProductList = ({ games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((games) => (
          <Product
            key={games.id}
            category={games.category}
            description={games.description}
            image={games.image}
            infos={games.infos}
            system={games.system}
            title={games.title}
            destaque={games.destaque}
            estrela={''}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
