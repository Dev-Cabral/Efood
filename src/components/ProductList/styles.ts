import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  width: 1024px;
  color: ${cores.vermelho};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 28px;
  margin-top: 40px;
  border: 2px;
  margin-left: 172px;
`

export const Title = styled.h2`
  font-size: 58px;
  font-weight: bold;
`
