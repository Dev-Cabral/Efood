import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;

  margin: 24px 4px;
  background-color: ${cores.branca};
  border: 2px solid ${cores.vermelho};
  position: relative;

  img {
    width: 100%;
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
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  margin: 4px 4px;
`

export const Categoria = styled.div`
  background-color: ${cores.vermelho};
  width: 80px;
  top: 10px;
  left: 375px;
  position: absolute;
  display: flex;
  padding: 2px;
  text-align: center;

  h3 {
    color: ${cores.branca};
    font-size: 12px;
    padding: 4px;
    text-align: center;
    margin-left: 10px;
  }
`
export const Destaque = styled.h3`
  background-color: ${cores.vermelho};
  width: 150px;
  top: 435px;
  left: 540px;
  position: absolute;
  display: flex;
  color: ${cores.branca};
  font-size: 12px;
  padding: 4px;
  text-align: center;
  padding: 6px 16px;
`
export const Botao = styled.button`
  width: 82px;
  height: 24px;
  padding: 4px;
  margin-left: 4px;
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
