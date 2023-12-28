import { BrowserRouter } from 'react-router-dom'

// import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './pages/Categories/Header'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        {/* <Hero /> */}
        <Rotas />
        {/* <Header /> */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
