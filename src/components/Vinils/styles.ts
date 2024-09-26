import styled from 'styled-components'

export const ListaVinil = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 90px;

  img {
    width: 300px;
  }

  a {
    margin: auto;
    display: block;
    margin-top: 24px;
    text-align: center;
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
