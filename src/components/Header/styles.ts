import { styled } from 'styled-components'
import { breakPoints } from '../../styles'

export const HeaderBar = styled.header`
  background-color: #575656;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;

  img {
    width: 125px;
    padding: 16px 30px;
  }
`

export const Links = styled.ul`
  display: flex;
  font-size: 12px;

  a {
    list-style: none;
    border-radius: 8px;
    padding: 8px;
    text-decoration: none;
    color: white;
    font-size: 16px;

    &:hover {
      background-color: #888888;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`

export const Link = styled.a`
  list-style: none;
  border-radius: 8px;
  padding: 8px;
  text-decoration: none;
  color: black;
  font-size: 16px;

  &:hover {
    background-color: #888888;
  }
`

export const LinkSect = styled.li`
  margin-right: 24px;
`
export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: #fff;
    margin-bottom: 4px;
  }

  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`
export const NavMob = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }

  > li {
    @media (max-width: ${breakPoints.tablet}) {
      a {
        display: block;
      }

      li {
        margin-top: 25px;
        padding: 12px;
        border-radius: 9px;
        background-color: #888888;
      }
    }
  }
`
