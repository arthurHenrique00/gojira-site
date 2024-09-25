import Footer from './components/Footer'
import Header from './components/Header'
import Musicas from './components/Musicas'
import Produtos from './components/Produtos'
import Sobre from './components/Sobre'
import Vinils from './components/Vinils'
import { EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      {/* <Sobre /> */}
      {/* <Vinils /> */}
      {/* <Produtos /> */}
      <Musicas />
      <Footer />
    </>
  )
}

export default App
