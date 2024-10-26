import styled from 'styled-components'
import bannerWhale from '../../gojira_projects_foto/magma-banner.jpg'
import { breakPoints } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background: linear-gradient(353deg, black, transparent), url(${bannerWhale});

  color: white;

  background-size: cover;

  .container {

  div {
  display: inline-block;
  margin-right: 32px;

  @media (max-width: ${breakPoints.desktop}) {
  margin-right: 0px;
  max-width: 80%;
  }
  }


  padding-top: 40px;
  text-align: center;

  img {
    max-width: 150px;
    width: 100%;
    border-radius: 50%;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    color: white;
    display: block;
    padding-top: 22px;
  }
`
export const TituloBanner = styled.h2`
  font-size: 32px;
  font-weight: bold;
  width: 500px;
  max-width: 100%;
  padding-top: 140px;
`
