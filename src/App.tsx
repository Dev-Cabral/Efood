import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
