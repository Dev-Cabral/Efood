import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  // margin: 0 auto;

  &.visible {
    display: flex;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  width: 1024px;
  height: 344px;
  z-index: 1;
  position: absolute;
  top: 154px;
  left: 166px;
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${cores.vermelho};
  display: flex;
  color: ${cores.branca};
  width: 100%;
`

export const ConteudoDoModal = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const PizzaImg = styled.div`
  width: 200%;

  img {
    width: 280px;
    height: 280px;
    margin: 0px 32px;
    object-fit: cover;
    // height: 254px;
    // width: 374px;
    // object-fit: cover;
  }
`

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: -64px;
  margin-bottom: 16px;

  h4 {
    margin-top: 16px;
    height: 22px;
    font-weight: bold;
  }

  img {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    // margin-bottom: 36px;
    // height: 16px;
    // cursor: pointer;
  }
`
export const ContainerBody = styled.div`
  p {
    width: 100%;
    font-size: 14px;
    margin-bottom: 16px;
  }

  button {
    widht: 218px;
    height: 24px;
    background-color: ${cores.rosaFundo};
    color: ${cores.vermelho};
    border: none;
    margin-bottom: 24px;
    // margin-top: 10px;
    font-weight: bold;
    padding: 4px;
  }
`
