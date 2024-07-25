import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa};
  font-size: 14px;
  align-items: center;
`
export const SectionTittle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weigth: bold;
`

export const Links = styled.ul`
  background-color: ${cores.rosa};

  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;

  display: flex;
  margin-top: 16px;
  height: 58px;
  padding-top: 40px;
  margin-top: 24px;

  img {
    margin: 2px;
    width: 24px;
    height: 24px;
  }
`

export const FooterSection = styled.div`
  background-color: ${cores.rosa};

  margin-bottom: 2px;
  margin-top: 50px;
  align-items: center;
  height: 340px;

  p {
    color: ${cores.vermelho};
    font-size: 10px;
    text-align: center;
    margin-top: 128px;
  }
  }
`
export const Efood = styled.div`
  width: 100%;
  height: 58px;
  padding-top: 40px;
  text-align: center;
`

export const Rodape = styled.div`
  text-align: -webkit-center;
`
