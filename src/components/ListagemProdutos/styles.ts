import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  background-color: ${cores.rosaFundo};
  color: ${cores.branca};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 28px;
  margin-top: 10px;
  border: 1px solide ${cores.vermelho};
  margin-left: 340px;
  height: 890px;
  width: 1024px;
`

export const Title = styled.h2`
  color: ${cores.branca};
  font-size: 58px;
  font-weight: bold;
`
