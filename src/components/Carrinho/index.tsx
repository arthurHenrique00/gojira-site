import Header from '../Header'
import whaleMoon from '../../gojira_projects_foto/whale-moon-sun.webp'
import skullRed from '../../gojira_projects_foto/mouth-skull-red.jpg'
import longSleeve from '../../gojira_projects_foto/long-sleeve.webp'
import { BotaoCarrinho, CardCarrinho, HeadCart, ProdutoFoto } from './styles'

import Rodape from '../Footer'
const Carrinho = () => (
  <div style={{ backgroundColor: 'black', color: '#fff' }}>
    <Header />
    <div className="container">
      <HeadCart>
        <p>Itens no Carrinho: 3</p>
        <p>Valor R$ 275,00</p>
        <BotaoCarrinho>Continuar a compra</BotaoCarrinho>
      </HeadCart>
      <CardCarrinho>
        <ProdutoFoto>
          <img src={whaleMoon} />
        </ProdutoFoto>
        <p>Whale Moon sun R$ 55,75</p>
      </CardCarrinho>
      <CardCarrinho>
        <ProdutoFoto>
          <img style={{ borderRadius: '9px' }} src={skullRed} />
        </ProdutoFoto>
        <p>Whale Moon sun R$ 55,75</p>
      </CardCarrinho>
      <CardCarrinho>
        <ProdutoFoto>
          <img src={longSleeve} />
        </ProdutoFoto>
        <p>Whale Moon sun R$ 55,75</p>
      </CardCarrinho>
    </div>
    <Rodape />
  </div>
)

export default Carrinho
