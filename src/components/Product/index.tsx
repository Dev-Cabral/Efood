import Tag from '../Tag'
import estrela from '../../asserts/images/estrela.png'
import {
  Card,
  Categoria,
  Descricao,
  Destaque,
  Estrela,
  Infos,
  Titulo
} from './styles'

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

const Product = ({
  title,
  category,
  destaque,
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
    <Destaque>{destaque}</Destaque>
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
  </Card>
)

export default Product
