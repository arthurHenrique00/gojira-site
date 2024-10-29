import { Imagem, TituloBanner } from './styles'

import TheWayAll from '../../gojira_projects_foto/twoaf.jpg'
import Magma from '../../gojira_projects_foto/mgm.jpg'
import WhaleSirius from '../../gojira_projects_foto/fmts.jpg'

const Banner = () => (
  <Imagem>
    <div className="container">
      <div>
        <a href="#twoaf">
          <img src={TheWayAll} />
        </a>
        <a href="#twoaf">The way of all flesh</a>
      </div>
      <div>
        <a href="#mgm">
          <img src={Magma} />
        </a>
        <a href="#mgm">Magma</a>
      </div>
      <div>
        <a href="#fmts">
          <img src={WhaleSirius} />
        </a>
        <a href="#fmts">From mars to sirius</a>
      </div>
      <TituloBanner>
        Escute agora as melhores músicas dos albums: The way of all flesh,
        Magma, e From Mars to Sirius
      </TituloBanner>
    </div>
  </Imagem>
)

export default Banner
