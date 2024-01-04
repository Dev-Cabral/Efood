import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#FFFFFFFF',
  verde: '#10ac84',
  cinzaClaro: '#a3a3a3',
  vermelho: ' #E66767',
  rosa: '#FFEBD9',
  rosaFundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .container {
    background-color: ${cores.rosaFundo};
    max-width: 1674px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
      width: 1188px;
      align-items: center;
    }
  }
`
