import { BrowserRouter } from 'react-router-dom'
import { EstiloGlobal } from './styles'
import Rotas from './routes'
import Header from './components/Header'
import Rodape from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <EstiloGlobal />
      <Rotas />
      <Rodape />
    </BrowserRouter>
  )
}

export default App
