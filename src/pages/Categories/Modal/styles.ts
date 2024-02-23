import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  position: fixed;
  top: 250px;
  left: 166px;
  max-width: 1024px;
  width: 100%;
  height: 280px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: ${cores.vermelho};
`
export const ModalContainer = styled.div`
  display: flex;
  color: ${cores.branca};
  width: 100%;
`

export const PizzaImg = styled.div`
  img {
    height: 240px;
    width: 280px;
    margin: 22px;
    object-fit: cover;
  }
`

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;

  h4 {
    height: 22px;
    margin-bottom: 16px;
    font-weight: bold;
  }
`
export const ContainerBody = styled.div`
  width: 100%;

  img {
    widht: 16px;
    height: 16px;
    margin-left: 680px;
    margin-top: 4px;
    cursor: pointer;
  }

  p {
    width: 100%;
    font-size: 14px;
  }

  button {
    widht: 218px;
    height: 24px;
    background-color: ${cores.rosaFundo};
    color: ${cores.vermelho};
    border: none;
    margin-top: 24px;
    font-weight: bold;
    padding: 4px;
  }
`
