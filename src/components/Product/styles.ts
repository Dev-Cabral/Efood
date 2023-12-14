import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  // widht: 472px;
  margin: 24px 4px;
  background-color: ${cores.branca};
  border: 2px solid ${cores.vermelho};
  position: relative;

  img {
    width: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
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
// color: ${cores.branca};
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
  color: ${cores.vermelho};
  // width: 256px;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  // display: block;
  display: flex;
  margin: 4px 4px;
`
export const Infos = styled.div`
  // background-color: ${cores.vermelho};
  // width: 160px;
  // top: 24px;
  // right: 120px;
  // position: absolute;
  // margin-left: 530px;
  // display: flex;
  // justify-content space-between;
  // align-items: center;
  // text-align: center;

  // img {
  //   // margin-top: 4px;
  //   width: 18px;
  //   height: 18px;
  // }
`
export const Categoria = styled.div`
  background-color: ${cores.vermelho};
  width: 80px;
  top: 20px;
  left: 390px;
  position: absolute;
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
  background-color: ${cores.vermelho};
  width: 150px;
  top: 20px;
  left: 220px;
  position: absolute;
  display: flex;
  color: ${cores.branca};
  font-size: 12px;
  padding: 4px;
  text-align: center;
  padding: 6px 16px;

  // h3 {
  //   color: ${cores.branca};
  //   font-size: 12px;
  //   padding: 4px;
  //   text-align: center;
  // }
`
export const Botao = styled.button`
  width: 82px;
  height: 24px;
  padding: 4px;
  margin-left: 8px;
  margin-bottom: 4px;
  background-color: ${cores.vermelho};
  border: none;
  font-weight: bold;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-size: 12px;
    text-align: center;
    border: none;
  }
`
