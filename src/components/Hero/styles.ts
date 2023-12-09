import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  // color: ${cores.vermelho};
  width: 100%;
  height: 384px;
  margin-top: -24px;
  // display: block;
  // background-repeat: no-repeat;
  // background-size: cover;
  // font-weight: bold;

  .container {
    // position: relative;
    // padding-top: 340px;
    // display: flex;
    // justify-content: space-between;
    // align-items: flex-end;
  }

  ${TagContainer} {
    // position: absolute;
    // top: 32px;
  }
`

export const Efood = styled.div`
  width: 126px;
  height: 58px;
  padding-top: 40px;
  margin-left: 622px;
`

export const Titulo = styled.h2`
  // font-size: 36px;
  // max-width: 450px;
`
export const Precos = styled.h2`
  // color: ${cores.vermelho};
  // font-size: 24px;
  // margin-top: 24px;

  // span {
  //   text-decoration: line-through;
  // }
`
export const Frase = styled.h2`
  color: ${cores.vermelho};
  font-weight: 900;
  font-size: 34px;
  text-align: center;
`
export const DivFrase = styled.div`
  width: 540px;
  height: 84px;
  display: block;
  margin-left: 414px;
  margin-top: 186px;
`
