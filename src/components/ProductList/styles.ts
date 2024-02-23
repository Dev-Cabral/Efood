import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  }
`

export const List = styled.ul`
  color: ${cores.vermelho};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  border: 2px;
`

export const Title = styled.h2`
  font-size: 58px;
  font-weight: bold;
`
