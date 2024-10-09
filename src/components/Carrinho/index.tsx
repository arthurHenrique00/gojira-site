import Header from '../Header'
import whaleMoon from '../../gojira_projects_foto/whale-moon-sun.webp'
import skullRed from '../../gojira_projects_foto/mouth-skull-red.jpg'
import longSleeve from '../../gojira_projects_foto/long-sleeve.webp'
import { CardCarrinho, HeadCart, ProdutoFoto } from './styles'

import Rodape from '../Footer'
import Botao from '../Botao'

const Carrinho = () => (
  <>
    <Header />
    <div className="container">
      <HeadCart>
        <p>Itens no Carrinho: 3</p>
        <p>Valor R$ 275,00</p> <Botao />
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
  </>
)

export default Carrinho
