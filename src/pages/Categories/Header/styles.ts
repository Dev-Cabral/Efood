import styled from 'styled-components'
import { cores } from '../../../styles'

export const HeaderBar = styled.div`
  // max-width: 1024px;
`

export const Imagem = styled.div`
  img {
    width: 100%;
  }
`
export const Imagem2 = styled.div`
  // width: 100%;
  height: 280px;
  margin-top: 98px;

  position: absolute;
  top: 32px;
`

export const Italiana = styled.div`
  width: 102px;
  height: 34px;
  position: absolute;
  top: 32px;
  left: 170px;

  h2 {
    color: ${cores.cinzaClaro};
    line-height: 38px;
    font-weight: 10;
    font-size: 32px;
  }
`
export const Titulo = styled.h1`
  color: ${cores.branca};
  line-height: 38px;
  font-weight: 900;
  font-size: 32px;
  position: absolute;
  top: 232px;
  left: 170px;
`

export const Restaurante = styled.div`
  height: 58px;
  padding-top: 150px;
  margin: -21px 164px;
  display: flex;
  justfy-content: space-betwenn;
  align-items: center;

  nav {
    padding-top: 54px;
    height: 950px;

    a {
      color: ${cores.vermelho};
      font-weight: 900;
      font-size: 18px;
      text-decoration: none;
    }
  }
`
export const Car = styled.div`
  height: 950px;
  padding-top: 50px;
  color: ${cores.vermelho};
  font-weight: 900;
  font-size: 18px;

  p {
    width: 220px;
  }
`

export const Efood = styled.div`
  height: 950px;
  margin: 0px 322px;

  img {
    width: 128px;
    height: 60px;
    margin-top: 32px;
  }
`
