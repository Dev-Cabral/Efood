import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/restaurante" element={<Home />} />
    <Route path="/saibaMais" element={<Categories />} />
  </Routes>
)

export default Rotas
