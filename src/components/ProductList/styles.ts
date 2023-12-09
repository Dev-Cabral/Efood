import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

// export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
//   padding: 32px 0;
//   // background-color: ${(props) =>
//     props.background === 'black' ? cores.preta : cores.vermelho};

//   ${Card} {
//     background-color: ${(props) =>
//       props.background === 'black' ? cores.cinza : cores.branca};
//   }
// `

export const List = styled.ul`
  width: 1024px;
  // background-color: ${cores.rosaFundo};
  color: ${cores.vermelho};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  border: 2px;
  margin-left: 172px;
  height: 1290px;
  width: 1024px;
`

export const Title = styled.h2`
  // color: ${cores.vermelho};
  font-size: 58px;
  font-weight: bold;
`
