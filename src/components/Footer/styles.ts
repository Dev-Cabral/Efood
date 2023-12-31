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

  @media (max-width: 640px) {
    margin-left: 510px;
    margin-top: 28px;
  }
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

    @media (max-width: 640px) {
      font-size: 10px;
      text-align: center;
      margin-top: 128px;
      width: 400px;
      margin-left: 354px;
  }
`
export const Efood = styled.div`
  width: 126px;
  height: 58px;
  padding-top: 40px;
  margin-left: 622px;

  @media (max-width: 640px) {
    width: 126px;
    height: 58px;
    margin-left: 494px;

    img {
      padding-top: 10px;
    }
`
