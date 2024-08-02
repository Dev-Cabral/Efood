import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Produto from './components/Produto'
import Header from './pages/Categories/Header'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Categories />} />
  </Routes>
)

export default Rotas
