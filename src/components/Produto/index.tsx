import { useState } from 'react'

import {
  Card,
  Descricao,
  Botao,
  Titulo,
  ButtonCar,
  ModalContainer,
  PizzaImg,
  ContainerBody,
  HeaderModal,
  ContainerMod
} from './styles'
import close from '../../asserts/images/fechar.png'

import { ItemProdutos } from '../../pages/Home'

type ModalState = {
  isVisible: boolean
}

const Produto = ({ foto, descricao, nome, porcao, preco }: ItemProdutos) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const getDescricao = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 100) + '...'
    }
    return description
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <Card>
      <img src={foto} alt={foto} />
      <Titulo>{nome}</Titulo>
      <Descricao>{getDescricao(descricao)}</Descricao>
      <Botao
        onClick={() => {
          setModal({
            isVisible: true
          })
        }}
      >
        <p>Mais detalhes</p>
      </Botao>
      <ContainerMod className={modal.isVisible ? 'visible' : 'overlay'}>
        <ModalContainer>
          <PizzaImg>
            <img src={foto} alt="" />
          </PizzaImg>
          <ContainerBody>
            <HeaderModal>
              <h4>{nome}</h4>
              <img
                src={close}
                alt=""
                onClick={() => {
                  closeModal()
                }}
              />
            </HeaderModal>
            <p>
              {descricao} <br /> <br />
              Serve de: {porcao}
            </p>
            <ButtonCar>Adicionar ao carrinho - {preco}</ButtonCar>
          </ContainerBody>
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </ContainerMod>
    </Card>
  )
}

export default Produto
