import Header from '../Header'
import whaleMoon from '../../gojira_projects_foto/whale-moon-sun.webp'
import { CardCarrinho, HeadCart, ProdutoFoto } from './styles'

import Rodape from '../Footer'

const Carrinho = () => (
  <>
    <Header />
    <div className="container">
      <HeadCart>
        <p>Itens no Carrinho: 0</p>
        <p>Valor R$ 275,00</p>
      </HeadCart>
      <CardCarrinho>
        <ProdutoFoto>
          <img src={whaleMoon} />
        </ProdutoFoto>
        <p>Whale Moon sun R$ 55,75</p>
      </CardCarrinho>
    </div>
    <Rodape />
  </>
)

export default Carrinho
