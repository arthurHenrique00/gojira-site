import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const LogoNome = styled.div`
  text-align: center;
  margin-bottom: 120px;
  margin-top: 60px;

  h1 {
    font-family: 'Devonshire', system-ui;
  }

  img {
    width: 200px;
  }
`
export const ListaProdutos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 32px;
  text-align: center;
  margin-bottom: 120px;

  @media (max-width: ${breakPoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`
export const CardProduto = styled.div`
  background-color: #fff;
  border-radius: 12px;
  -webkit-box-shadow: -8px 3px 24px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -8px 3px 24px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -8px 3px 24px -7px rgba(0, 0, 0, 0.75);
  padding: 12px;
  width: 270px;
  height: 325px;

  img {
    width: 200px;
  }

  p {
    margin: 12px;
  }

  a {
    margin-top: 12px;
  }
`
