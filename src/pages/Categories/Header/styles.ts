import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  width: 100%;
  align-items: center;
  margin-top: -24px;
  text-align: center;
  // background-color: rgba(0, 0, 0, 0.73);

  img {
    width: 100%;
  }
`
export const Imagem2 = styled.div`
  width: 100%;
  height: 502px;
  margin-top: 98px;
  // background-color: rgba(0, 0, 0, 0.73);

  position: absolute;
  top: 32px;
`

export const Italiana = styled.div`
  height: 34px;
  position: relative;
  top: 88px;
  right: 444px;
  z-index: 1;

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
  // background-color: rgba(0, 0, 0, 0.73);

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
  // background-color: rgba(0, 0, 0, 0.73);

  height: 34px;
  position: relative;
  top: 0px;
  margin-bottom: 104px;
  // background-color: ${cores.rosa};

  p {
    color: ${cores.vermelho};
    z-index: 1;
    font-weight: 900;
    font-size: 18px;
    // background-color: rgba(0, 0, 0, 0.73);
  }
`

export const Efood = styled.div`
  // background-color: rgba(0, 0, 0, 0.73);

  height: 336px;

  img {
    padding-top: 80px;
    // background-color: rgba(0, 0, 0, 0.73);
  }
`
