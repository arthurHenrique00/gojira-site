import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const titleSec = styled.h2`
  text-align: center;
  padding: 36px;
  color: white;
`
export const Musica = styled.li`
  text-align: center;
  border: 3px solid black;
  margin-bottom: 120px;
  font-size: 22px;
  border-radius: 9px;
  max-width: 450px;
  color: white;

  p {
    padding-top: 12px;
  }

  @media (max-width: ${breakPoints.desktop}) {
    margin-right: 16px;
  }
`

export const PlayerMusc = styled.iframe`
  border-radius: 9px;
  width: 350px;

  @media (max-width: ${breakPoints.desktop}) {
    width: 250px;
    height: 200px;
    padding: 16px;
  }
`
export const AlbumTit = styled.h2`
  font-size: 22px;
  margin-bottom: 120px;
  text-align: center;
  color: #dddd;
`
export const Album = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0;
`
