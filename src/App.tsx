import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Musicas from './components/Musicas'
import Produtos from './components/Produtos'
import Sobre from './components/Sobre'
import Vinils from './components/Vinils'
import { EstiloGlobal } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
