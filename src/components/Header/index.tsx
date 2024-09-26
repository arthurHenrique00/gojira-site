import { HeaderBar, Link, Links } from './styles'
import logo from '../../gojira_projects_foto/gojira-logo.webp'
import cart from '../../gojira_projects_foto/shoppingcart.png'

const Header = () => (
  <HeaderBar>
    <img src={logo} />
    <Links>
      <li>
        <Link href="/">Sobre</Link>
        <Link href="/vinils">Vinils</Link>
        <Link href="/musicas">Músicas</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/carrinho">Carrinho</Link>
      </li>
    </Links>
  </HeaderBar>
)

export default Header
