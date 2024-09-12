import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.ul`
  background-color: ${cores.vermelho};
  border: 2px solid ${cores.vermelho};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  width: 320px;
  height: 348px;

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`

export const Estrela = styled.div`
  width: 15px;
  display: flex;
  margin-right: 6px;
  margin-top: 2px;
  margin-right: 44px;

  h3 {
    margin-right: 2px;
    font-size: 16px;
  }

  img {
    margin-left: 4px;
    height: 18px;
  }
`

export const Titulo = styled.h3`
color: ${cores.branca};
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  margin: 4px 6px;
  margin-bottom: 24px;
  display: flex;;
  justify-content space-between;
  align-items: center;


`

export const Descricao = styled.p`
  color: ${cores.branca};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`
export const Categoria = styled.div`
  background-color: ${cores.rosaFundo};
  width: 80px;
  top: 20px;
  left: 390px;
  display: flex;
  padding: 2px 8px;

  h3 {
    color: ${cores.branca};
    font-size: 12px;
    padding: 4px;
    text-align: center;
  }
`
export const Destaque = styled.h3`
  background-color: ${cores.branca};
  width: 150px;
  top: 20px;
  left: 220px;
  display: flex;
  color: ${cores.branca};
  font-size: 12px;
  padding: 4px;
  text-align: center;
  padding: 4px 16px;
`
export const Botao = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 14px;
  height: 24px;
  color: rgb(230, 103, 103);
  background-color: rgb(255, 235, 217);
  padding: 4px;

  p {
    color: ${cores.vermelho};
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    border: none;
    font-weight: 900;
    cursor: pointer;


    }
  }
`
export const ButtonCar = styled.button`
cursor pointer;
margin: 0;
width: 218px;
color: rgb(230, 103, 103);
background-color: rgb(255, 235, 217);


      @media (max-width: 768px) {
        position: absolute;
        top: 542px;
        left: 48px;
        font-size: 14px;
        font-weight: bold;
        border: none;
        padding: 4px;
    }

`

export const Container = styled.div`
  width: 1024px;
  height; 344px;
  top: 490px;
  left: 172px;
  background-color: ${cores.vermelho};

  `

export const ModalContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 1024px;
  height: 344px;
  z-index: 1;
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  width: 100%;
  position: relative;
  left: 0;

  @media (max-width: 768px) {
    width: 42%;
    height: 596px;
  }
`
export const PizzaImg = styled.div`
  img {
    width: 280px;
    height: 280px;
    margin: 0px 32px;
    object-fit: cover;

    @media (max-width: 768px) {
      position: absolute;
      width: 100%;
      top: 39px;
      left: -32px;
      height: 200px;
    }
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
    margin-top: -16px;
    height: 22px;
    font-weight: bold;

    @media (max-width: 768px) {
      position: absolute;
      top: 286px;
      left: 60px;
    }
  }

  img {
    position: absolute;
    top: 10px;
    right: 24px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    margin-bottom: 36px;
    height: 16px;
    cursor: pointer;
  }
`
export const ContainerBody = styled.div`
  p {
    width: 100%;
    font-size: 14px;
    margin-bottom: 16px;

        @media (max-width: 768px) {
      position: absolute;
      top: 320px;
      left: 10px;
      width: 255px;
  }

  button {
    widht: 218px;
    height: 24px;
    background-color: ${cores.rosaFundo};
    color: ${cores.vermelho};
    border: none;
    margin-bottom: 24px;
    font-weight: bold;
    padding: 4px;
  }
`
export const ContainerMod = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
