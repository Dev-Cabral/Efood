import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Card, Descricao, Botao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Produto = ({ title, description, image }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <Card className={modalAberto ? 'visible' : ''}>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <div>
        <Botao type="button" onClick={() => setModalAberto(true)}>
          Comprar
        </Botao>
      </div>
    </Card>
  )
}

export default Produto
