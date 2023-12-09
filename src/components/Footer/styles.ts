import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa};
  // padding: 32px 0;
  font-size: 14px;
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
`

export const Link = styled.a`
  color: ${cores.vermelho};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  background-color: ${cores.rosa};

  margin-bottom: 64px;
`
