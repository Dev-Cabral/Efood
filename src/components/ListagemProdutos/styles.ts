import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  background-color: ${cores.rosaFundo};
  color: ${cores.branca};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  border: 1px solide ${cores.vermelho};
  padding: 250px 0 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 366px 0 50px;
  }
`

export const Title = styled.h2`
  color: ${cores.branca};
  font-size: 58px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.33);
`
