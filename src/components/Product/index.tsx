import { Link } from 'react-router-dom'

import estrela from '../../asserts/images/estrela.png'
import {
  Card,
  Categoria,
  Descricao,
  Destaque,
  Estrela,
  Botao,
  Titulo,
  Container
} from './styles'

type Props = {
  highlight: boolean
  title: string
  category: string
  foodType: string
  description: string
  image: string
}

const Product = ({
  highlight,
  title,
  category,
  foodType,
  description,
  image
}: Props) => (
  <Container>
    {highlight && <Destaque>Destaque da semana</Destaque>}
    <Card>
      <img src={image} alt={title} />
      <Categoria>
        <h3>{foodType}</h3>
      </Categoria>
      <Titulo>
        {title}
        <Estrela>
          <h3>{category}</h3>
          <img src={estrela} alt="" />
        </Estrela>
      </Titulo>
      <Descricao>{description}</Descricao>
      <div>
        <nav>
          <Botao>
            <nav>
              <a href="">
                <Link to="/saibaMais">Saiba mais</Link>
              </a>
            </nav>
          </Botao>
        </nav>
      </div>
    </Card>
  </Container>
)

export default Product
