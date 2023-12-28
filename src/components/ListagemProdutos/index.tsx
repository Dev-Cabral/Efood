import Game from '../../Models/Games'
import Produtos from '../../Models/Produtos'
import { Container } from '../Footer/styles'
import Produto from '../Produto'
import { List } from './styles'

export type Props = {
  title: string
  produtos: Produtos[]
}

const ListagemProdutos = ({ produtos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {produtos.map((produtos) => (
          <Produto
            key={produtos.id}
            description={produtos.description}
            image={produtos.image}
            title={produtos.title}
            category={''}
            system={''}
            infos={[]}
            estrela={''}
            destaque={''}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListagemProdutos
