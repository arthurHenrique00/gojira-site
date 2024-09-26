import logo from '../../gojira_projects_foto/gojira-logo.webp'
import skullRed from '../../gojira_projects_foto/mouth-skull-red.jpg'
import longSleeve from '../../gojira_projects_foto/long-sleeve.webp'
import whaleMoon from '../../gojira_projects_foto/whale-moon-sun.webp'
import power from '../../gojira_projects_foto/power-glov.webp'
import whaleMars from '../../gojira_projects_foto/whale-from-mars.webp'
import devilFire from '../../gojira_projects_foto/dragon-devil.webp'
import Botao from '../Botao'
import { CardProduto, ListaProdutos, LogoNome } from './styles'
import { Footer } from '../Footer/styles'
import Header from '../Header'

const Produtos = () => (
  <>
    <Header />
    <div className="container">
      <LogoNome>
        <img src={logo} />
        <h1>Produtos</h1>
      </LogoNome>
      <ListaProdutos>
        <li>
          <CardProduto>
            <div>
              <img src={skullRed} />
              <h2>Mouth Skull (Red)</h2>
              <p>R$ 55, 75</p>
            </div>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={longSleeve} />
            </div>
            <h2>Long Sleeve</h2>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={whaleMoon} />
            </div>
            <h2>Whale Moon</h2>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={power} />
            </div>
            <h2>Power Glove</h2>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={whaleMars} />
            </div>
            <h2>Whale from mars</h2>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={devilFire} />
            </div>
            <h2>Devil Fire</h2>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
      </ListaProdutos>
    </div>
    <Footer />
  </>
)

export default Produtos
