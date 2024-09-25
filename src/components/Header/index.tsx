import { HeaderBar, Link, Links } from './styles'
import logo from '../../gojira_projects_foto/gojira-logo.webp'

const Header = () => (
  <HeaderBar>
    <img src={logo} />
    <Links>
      <li>
        <Link href="">Sobre</Link>
        <Link href="">Vinils</Link>
        <Link href="">Músicas</Link>
        <Link href="">Produtos</Link>
      </li>
      <li>
        <a href="">Sign Up</a>
      </li>
    </Links>
  </HeaderBar>
)

export default Header
