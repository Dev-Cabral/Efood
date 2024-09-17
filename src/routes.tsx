import { Route, Routes } from 'react-router-dom'

import Categories from './pages/Categories'
import Entrega from './pages/Entrega'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Categories />} />
    <Route path="/restaurantes/:id/entrega" element={<Entrega />} />
  </Routes>
)

export default Rotas
