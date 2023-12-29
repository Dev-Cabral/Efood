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

  display: flex;
  margin-top: 16px;
  width: 126px;
  height: 58px;
  padding-top: 40px;
  margin-left: 642px;
  margin-top: 24px;

  img {
    margin: 2px;
    width: 24px;
    height: 24px;
  }
`

export const Link = styled.a`
  // color: ${cores.vermelho};
  // text-decoration: none;
  // margin-right: 8px;
  // align-items: center;
`

export const FooterSection = styled.div`
  background-color: ${cores.rosa};

  margin-bottom: 8px;
  margin-top: 50px;
  align-items: center;
  height: 340px;

  p {
    color: ${cores.vermelho};
    font-size: 10px;
    text-align: center;
    margin-top: 128px;
    width: 400px;
    margin-left: 494px;
  }
`
export const Efood = styled.div`
  width: 126px;
  height: 58px;
  padding-top: 40px;
  margin-left: 622px;
`
