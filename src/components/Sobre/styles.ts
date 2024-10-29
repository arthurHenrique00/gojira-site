import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const Banda = styled.img`
  margin: 0 auto;
  display: block;
  width: 964px;
  height: 520px;
  border-radius: 9px;
  margin-bottom: 80px;

  @media (max-width: ${breakPoints.desktop}) {
    width: 660px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 350px;
    height: 250px;
  }
`

export const Desc = styled.p`
  margin-top: 32px;
  margin-bottom: 60px;
  line-height: 24px;
  padding: 24px;
  background-color: #8d8d8d;
  color: white;
  border-radius: 9px;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 12px;
    line-height: 16px;
  }
`
