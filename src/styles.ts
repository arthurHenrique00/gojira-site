import { createGlobalStyle } from 'styled-components'

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
}

body {
background-color: #fff;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

@media (max-width: ${breakPoints.desktop}) {
  max-width: 80%;
  }

  @media (max-width: ${breakPoints.tablet}) {
  max-width: 100%;
  }
}
`
