import { styled } from 'styled-components'

export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
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
//   .container {
//   max-width: 1024px;
//   width: 100%;
//   margin: 0 auto;
// }
