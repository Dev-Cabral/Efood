import { Link } from 'react-router-dom'

import estrela from '../../asserts/images/estrela.png'
import {
  Card,
  Categoria,
  Descricao,
  Destaque,
  Estrela,
  Botao,
  Titulo
} from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  image: string
}

const Product = ({ title, category, system, description, image }: Props) => (
  <div className="container">
    <Destaque>Destaque da semana</Destaque>
    <Card>
      <img src={image} alt={title} />
      <Categoria>
        <h3>{system}</h3>
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
  </div>
)

export default Product
