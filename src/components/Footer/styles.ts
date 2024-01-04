import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosa};
  font-size: 14px;
  align-items: center;

  @media (mim-width: 280px & max-width: 640px) {
    height: 640px;
  }
`
export const SectionTittle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weigth: bold;

  @media (mim-width: 280px & max-width: 640px) {
    width: 640px;
  }
`

export const Links = styled.ul`
  background-color: ${cores.rosa};

  display: flex;
  margin-top: 16px;
  width: 126px;
  height: 58px;
  padding-top: 40px;
  margin-left: 806px;
  margin-top: 24px;

  img {
    margin: 2px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 640px) {
    margin-left: 525px;
    margin-top: 32px;
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
    font-size: 12px;
    text-align: center;
    margin-top: 128px;
    margin-left: 80px;
  }

  @media (max-width: 640px) {
    text-align: center;
    margin-top: 128px;
    margin-left: 14px;
    margin-bottom: 50px;

    p {
      color: ${cores.vermelho};
      font-size: 1.3rem;
      text-align: center;
      margin-top: 50px;
      width: 640px;
      margin-left: 254px;
    }
  }
`
export const Efood = styled.div`
  width: 126px;
  height: 58px;
  padding-top: 40px;
  margin-left: 782px;

  @media (max-width: 640px) {
    width: 126px;
    height: 58px;
    margin-left: 508px;

    img {
      padding-top: 10px;
    }
`
