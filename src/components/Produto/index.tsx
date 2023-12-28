import Tag from '../Tag'
import estrela from '../../asserts/images/estrela.png'
import {
  Card,
  Categoria,
  Descricao,
  Destaque,
  Estrela,
  Infos,
  Botao,
  Titulo
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  estrela: string
  destaque: string
}

const Produto = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
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
