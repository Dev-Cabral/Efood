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
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  nome: string
  cardapio: string[]
}

const Product = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  nome,
  cardapio
}: Props) => (
  <Container>
    {destacado && <Destaque>Destaque da semana</Destaque>}
    <Card>
      <img src={capa} alt={capa} />
      <Categoria>
        <h3>{tipo}</h3>
      </Categoria>
      <Titulo>
        {titulo}
        <Estrela>
          <h3>{avaliacao}</h3>
          <img src={estrela} alt="" />
        </Estrela>
      </Titulo>
      <Descricao>{descricao}</Descricao>
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
