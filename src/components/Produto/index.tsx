import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Card, Descricao, Botao, Titulo } from './styles'
// import { isVisible } from '@testing-library/user-event/dist/utils'

type Props = {
  title: string
  description: string
  image: string
}

type ModalState = {
  isVisible: boolean
}

const Produto = ({ title, description, image }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <Card className={modal.isVisible ? 'visible' : ''}>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <div>
        <Botao
          onClick={() => {
            setModal({
              isVisible: true
            })
          }}
        >
          <p>Mais detalhes</p>
        </Botao>
      </div>
      <div
        className="overlay"
        onClick={() => {
          closeModal()
        }}
      ></div>
    </Card>
  )
}

export default Produto
