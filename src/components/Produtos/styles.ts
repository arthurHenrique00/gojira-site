import styled from 'styled-components'

export const LogoNome = styled.div`
  text-align: center;
  margin-bottom: 120px;

  img {
    width: 200px;
  }
`
export const ListaProdutos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  text-align: center;
  margin-bottom: 120px;
`
export const CardProduto = styled.div`
  background-color: #fff;
  border-radius: 12px;
  -webkit-box-shadow: -8px 3px 24px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -8px 3px 24px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -8px 3px 24px -7px rgba(0, 0, 0, 0.75);
  padding: 12px;
`
