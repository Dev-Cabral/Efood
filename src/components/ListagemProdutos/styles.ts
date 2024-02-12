import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  background-color: ${cores.rosaFundo};
  color: ${cores.branca};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;
  border: 1px solide ${cores.vermelho};
  padding-top: 190px;
`

export const Title = styled.h2`
  color: ${cores.branca};
  font-size: 58px;
  font-weight: bold;
`
