import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const ListaVinil = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 90px;
  height: 100%;

  @media (max-width: ${breakPoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  img {
    width: 300px;
  }

  a {
    margin: auto;
    display: block;
    margin-top: 24px;
    text-align: center;
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
  }
`
export const Preco = styled.p`
  font-weight: bold;
  text-align: right;
`
export const PrecoPromo = styled.p`
  margin-top: 16px;
  font-weight: bold;
  text-align: right;
  text-decoration: line-through;
`
