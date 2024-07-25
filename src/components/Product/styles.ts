import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.rosaFundo};
  width: 100%;
  position: relative;
`

export const Card = styled.div`
  width: 472px;
  height: 438px;
  top: 40px;

  margin: 40px 24px;
  background-color: ${cores.branca};
  border: 2px solid ${cores.vermelho};
  position: relative;

  img {
    width: 472px;
    height: 217px;
    object-fit: cover;
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
  margin-left: 10px;
  font-weight: 400;
`

export const Categoria = styled.div`
  background-color: ${cores.vermelho};
  width: 80px;
  top: 12px;
  left: 368px;
  position: absolute;
  display: flex;
  padding: 6px;
  text-align: center;
  justify-content: center;

  h3 {
    color: ${cores.branca};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }

  // @media (max-width: 640px) {
  //   width: 80px;
  //   top: 10px;
  //   left: 585px;
  //   position: absolute;
  //   display: flex;
  //   padding: 2px;
  //   text-align: center;
  // }
`
export const Destaque = styled.div`
  position: absolute;
  top: 94px;
  right: 150px;
  background-color: ${cores.vermelho};
  display: flex;
  margin-rigth: 2px;
  color: ${cores.branca};
  font-size: 12px;
  text-align: center;
  padding: 6px;
  border: none;
  z-index: 1;
  font-weight: bold;
`
export const Japonesa = styled.div`
  position: absolute;
  background-color: ${cores.vermelho};
  top: 34px;
  right: 58px;
  color: ${cores.branca};
  font-size: 12px;
  text-align: center;
  padding: 6px 16px;
  border: none;
  z-index: 1;
`

export const Botao = styled.button`
  width: 82px;
  height: 24px;
  padding: 4px;
  margin-left: 10px;
  margin-bottom: 4px;
  background-color: ${cores.vermelho};
  border: none;
  font-weight: bold;
  margin-top: 32px;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    border: none;
  }
  }
`
