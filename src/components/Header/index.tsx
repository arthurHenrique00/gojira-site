import { Hamburguer, HeaderBar, Link, Links, NavMob } from './styles'
import logo from '../../gojira_projects_foto/gojira-logo.webp'
import { useState } from 'react'

const Header = () => {
  const [open, isOpen] = useState(false)

  return (
    <HeaderBar className="sticky-top">
      <a href="/">
        <img src={logo} />
      </a>
      <Links>
        <li>
          <Link href="/">Sobre</Link>
          <Link href="/vinils">Vinils</Link>
          <Link href="/musicas">Músicas</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/carrinho">Carrinho</Link>
        </li>
        <NavMob className={open ? 'is-open' : ''}>
          <li>
            <Link href="/">Sobre</Link>
            <Link href="/vinils">Vinils</Link>
            <Link href="/musicas">Músicas</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/carrinho">Carrinho</Link>
          </li>
        </NavMob>
      </Links>
      <Hamburguer onClick={() => isOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburguer>
    </HeaderBar>
  )
}

export default Header
