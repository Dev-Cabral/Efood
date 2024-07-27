import { useState } from 'react'

import { Card, Descricao, Botao, Titulo, ButtonCar } from './styles'
import piza from '../../asserts/images/pizza.png'
import close from '../../asserts/images/fechar.png'

import {
  Container,
  ContainerBody,
  ConteudoDoModal,
  HeaderModal,
  ModalContainer,
  PizzaImg
} from '../../pages/Categories/Modal/styles'

type Props = {
  capa: string
  descricao: string
  tipo: string
  titulo: string
}

type ModalState = {
  isVisible: boolean
}

const Produto = ({ capa, descricao, tipo, titulo }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <Card>
      <img src={capa} alt={capa} />
      <Titulo>{tipo}</Titulo>
      <Descricao>{descricao}</Descricao>
      <Botao
        onClick={() => {
          setModal({
            isVisible: true
          })
        }}
      >
        <p>Mais detalhes</p>
      </Botao>
      <Container className={modal.isVisible ? 'visible' : ''}>
        <ConteudoDoModal>
          <ModalContainer>
            <PizzaImg>
              <img src={capa} alt="" />
            </PizzaImg>
            <ContainerBody>
              <HeaderModal>
                <h4>{titulo}</h4>
                <img
                  src={close}
                  alt=""
                  onClick={() => {
                    closeModal()
                  }}
                />
              </HeaderModal>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <ButtonCar>Adicionar ao carrinho - R$ 60,90</ButtonCar>
            </ContainerBody>
          </ModalContainer>
        </ConteudoDoModal>
      </Container>
    </Card>
  )
}

export default Produto
