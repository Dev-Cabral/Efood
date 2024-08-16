import { useState } from 'react'

import piza from '../../../asserts/images/pizza.png'
import close from '../../../asserts/images/fechar.png'

import {
  Container,
  ContainerBody,
  HeaderModal,
  ModalContainer,
  PizzaImg,
  ConteudoDoModal
} from './styles'

const Modal = () => {
  return (
    <Container>
      <ConteudoDoModal>
        <ModalContainer>
          <PizzaImg>
            <img src={piza} alt="" />
          </PizzaImg>
          <ContainerBody>
            <img src={close} alt="" />
            <HeaderModal>
              <h4>Pizza Marguerita</h4>
            </HeaderModal>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem... <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <button>Adicionar ao carrinho - R$ 60,90</button>
          </ContainerBody>
        </ModalContainer>
      </ConteudoDoModal>
    </Container>
  )
}

export default Modal
