import { Link } from 'react-router-dom'

import { Card, Descricao, Botao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Produto = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <div>
      <Botao>
        <a href="">
          <Link to="/saibaMais">Adicionar ao carrinho</Link>
        </a>
      </Botao>
    </div>
  </Card>
)

export default Produto
