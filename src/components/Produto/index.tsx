/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'

import { add, open } from '../../store/reducers/cart'

import close from '../../asserts/images/fechar.png'
import {
  Botao,
  ButtonCar,
  Card,
  ContainerBody,
  ContainerMod,
  Descricao,
  HeaderModal,
  ModalContainer,
  PizzaImg,
  Titulo
} from './styles'

import { useDispatch } from 'react-redux'
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
  // const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(open())
    const itemToAdd: ItemProdutos = {
      foto,
      descricao,
      nome,
      porcao,
      preco,
      avaliacao: 0,
      id: 0
    }
    dispatch(add(itemToAdd))
    closeModal()
    closeModal()
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
            <ButtonCar onClick={() => handleClick()}>
              Adicionar ao carrinho - {preco}
            </ButtonCar>
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
