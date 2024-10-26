import { Imagem, TituloBanner } from './styles'

import TheWayAll from '../../gojira_projects_foto/twoaf.jpg'
import Magma from '../../gojira_projects_foto/mgm.jpg'
import WhaleSirius from '../../gojira_projects_foto/fmts.jpg'

const Banner = () => (
  <Imagem>
    <div className="container">
      <div>
        <img src={TheWayAll} />
        <a href="#twoaf">The way of all flesh</a>
      </div>
      <div>
        <img src={Magma} />
        <a href="#mgm">Magma</a>
      </div>
      <div>
        <img src={WhaleSirius} />
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
