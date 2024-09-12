import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
position: absolute;
top 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.7;
`

export const ContainerCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;

  max-width: 360px;
  padding: 32px 8px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 314px;
  }
`
export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.rosaFundo};
`

export const ItemCart = styled.li`
  position: relative;
  display: flex;
  color: ${cores.vermelho};
  background-color: ${cores.rosa};
  width: 344px;
  height: 100px;
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  gap: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    h3 {
      margin-bottom: 16px;
      font-weight: 900;
      font-size: 18px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      padding: 8px 8px 0px;
      width: 296px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 70px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    border: none;
    background-image: url('https://efood-blue.vercel.app/assets/lixeira-icone-TIe-BsEG.svg');
    background-color: transparent;

    @media (max-width: 768px) {
      right: 14px;
    }
  }
`

export const ButtonAside = styled.button`
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.rosaFundo};
  color: ${cores.vermelho};
  border: none;
  cursor: pointer;
`
