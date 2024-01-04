import styled from 'styled-components'
import { cores } from '../../../styles'

export const HeaderBar = styled.div`
  max-width: 1024px;
  // width: 100%;
`

export const Imagem = styled.div`
  height: 580px;
  margin-top: -120px;
  margin-bottom: 84px;

  img {
    width: 100%;
  }
`
export const Imagem2 = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 98px;

  position: absolute;
  top: 32px;

  // img {
  //   width: 100%;
  // }
`

export const Italiana = styled.div`
  width: 102px;
  height: 34px;
  position: absolute;
  top: 32px;

  margin-left: 170px;

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
  top: 288px;
  left: 170px;
`

export const Restaurante = styled.div`
  // width: 100%;
  height: 58px;
  padding-top: 150px;
  margin-left: 352px;
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
  // margin-right: 24px;
`

export const Efood = styled.div`
  height: 950px;
  margin: 0px 322px;

  img {
    width: 146px;
    padding-top: 10px;
    height: 100px;
  }
`
