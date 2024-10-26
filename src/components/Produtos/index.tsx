import logo from '../../gojira_projects_foto/gojira-logo.webp'
import skullRed from '../../gojira_projects_foto/mouth-skull-red.jpg'
import longSleeve from '../../gojira_projects_foto/long-sleeve.webp'
import whaleMoon from '../../gojira_projects_foto/whale-moon-sun.webp'
import power from '../../gojira_projects_foto/power-glov.webp'
import whaleMars from '../../gojira_projects_foto/whale-from-mars.webp'
import devilFire from '../../gojira_projects_foto/dragon-devil.webp'
import Botao from '../Botao'
import { CardProduto, ListaProdutos, LogoNome } from './styles'

const Produtos = () => (
  <>
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
              <h4>Mouth Skull (Red)</h4>
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
            <h4>Long Sleeve</h4>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={whaleMoon} />
            </div>
            <h4>Whale Moon</h4>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={power} />
            </div>
            <h4>Power Glove</h4>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={whaleMars} />
            </div>
            <h4>Whale from mars</h4>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
        <li>
          <CardProduto>
            <div>
              <img src={devilFire} />
            </div>
            <h4>Devil Fire</h4>
            <p>R$ 55, 75</p>
            <Botao />
          </CardProduto>
        </li>
      </ListaProdutos>
    </div>
  </>
)

export default Produtos
