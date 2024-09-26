import { Footer } from '../Footer/styles'
import Header from '../Header'
import whaleMoon from '../../gojira_projects_foto/whale-moon-sun.webp'
import { HeadCart } from './styles'

const Carrinho = () => (
  <>
    <Header />
    <HeadCart>
      <p>Itens no Carrinho: 0</p>
      <p>Valor R$ 275,00</p>
    </HeadCart>
    <div>
      <div>
        <img src={whaleMoon} />
      </div>
      <p>Whale Moon sun</p> <br />
      <p>R$ 55,75</p>
    </div>
    <Footer />
  </>
)

export default Carrinho
