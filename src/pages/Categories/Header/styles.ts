import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  width: 100%;
  align-items: center;
  margin-top: -24px;
  text-align: center;

  img {
    width: 100%;
  }
`
export const Imagem2 = styled.div`
  width: 100%;
  height: 502px;
  margin-top: 98px;

  position: absolute;
  top: 32px;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
`

export const Italiana = styled.div`
  height: 34px;
  position: relative;
  top: 88px;
  right: 444px;
  z-index: 1;

  h2 {
    color: ${cores.cinza};
    line-height: 38px;
    font-size: 32px;
    font-weight: 100;
    margin-top: 24px;
  }
`
export const Titulo = styled.h1`
  color: ${cores.branca};
  line-height: 38px;
  font-weight: 900;
  font-size: 32px;
  position: relative;
  top: 232px;
  right: 344px;

  z-index: 1;
`

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -24px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  nav {
    margin-bottom: 114px;

    a {
      color: ${cores.vermelho};
      font-weight: 900;
      font-size: 18px;
      text-decoration: none;
      cursor: pointe;
    }
  }
`
export const Car = styled.div`
  height: 34px;
  position: relative;
  top: 0px;
  margin-bottom: 104px;

  p {
    color: ${cores.vermelho};
    z-index: 1;
    font-weight: 900;
    font-size: 18px;
  }
`

export const Efood = styled.div`
  margin-left: 84px;
  height: 336px;

  img {
    padding-top: 80px;
  }
`
