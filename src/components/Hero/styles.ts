import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  margin-top: -24px;

  @media (max-width: 640px) {
    align-items: center;
    width: 1192px;
  }
`

export const Efood = styled.div`
  width: 126px;
  height: 58px;
  margin-left: 622px;

  img {
    padding-top: 80px;
  }

  @media (max-width: 640px) {
    width: 126px;
    height: 58px;
    margin-left: 484px;

    img {
      padding-top: 80px;
    }
  }
`

export const Frase = styled.h2`
  color: ${cores.vermelho};
  font-weight: 900;
  font-size: 35px;
  text-align: center;

  @media (max-width: 640px) {
    height: 100%;
    font-size: 1.9rem;
    text-alig-center;

  }
`
export const DivFrase = styled.div`
  width: 540px;
  height: 104px;
  display: block;
  margin-left: 414px;
  margin-top: 186px;

  @media (max-width: 640px) {
    margin-left: 254px;
  }
`
