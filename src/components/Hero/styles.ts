import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: -24px;
  text-align: center;
`

export const Efood = styled.div`
  height: 388px;
  // margin-left: 80px;
  justify-content: space-evenly;

  img {
    padding-top: 80px;
  }
  }
`

export const Frase = styled.div`
  color: ${cores.vermelho};
    text-align: -webkit-center;  align-items:; center;
  margin: 90px 404px;

  h2 {

    font-weight: 900;
    font-size: 35px;
    width: 536px;
  }

    @media (max-width: 768px) {
    font-weight: 900;
      text-align: center;
  align-items:; center;
  margin: 100px 208px;
  }
`
export const DivFrase = styled.div`
  height: 104px;
  display: block;
`
