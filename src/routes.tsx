import { Routes, Route } from 'react-router-dom'
import Sobre from './components/Sobre'
import Vinils from './components/Vinils'
import Musicas from './components/Musicas'
import Produtos from './components/Produtos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Sobre />} />
    <Route path="/vinils" element={<Vinils />} />
    <Route path="/musicas" element={<Musicas />} />
    <Route path="/produtos" element={<Produtos />} />
  </Routes>
)

export default Rotas
