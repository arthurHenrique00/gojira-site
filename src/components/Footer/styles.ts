import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const Footer = styled.footer`
  background-color: grey;
  color: white;
  border-radius: 8px;
  text-align: center;
  padding: 22px;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 14px;
  }
`
