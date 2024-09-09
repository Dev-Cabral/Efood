import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Rotas />
          <Footer />
        </div>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
