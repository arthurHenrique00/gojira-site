import bannerWhale from '../../gojira_projects_foto/flying-whale-10st.jpeg'
import cdFlesh from '../../gojira_projects_foto/twoaf.jpg'
import cdWhale from '../../gojira_projects_foto/whale-from-mars.webp'
import cdMagma from '../../gojira_projects_foto/magma.jpg'

const Musicas = () => (
  <div className="container">
    <h2>Melhores músicas dos melhor albums</h2>
    <img src={bannerWhale} />
    <div>
      <h2>The way of all flesh</h2>
      <ul>
        <li>
          <img src={cdFlesh} />
          <p>Toxic garbage island</p>
        </li>
        <li>
          <img src={cdFlesh} />
          <p>Orobouros</p>
        </li>
        <li>
          <img src={cdFlesh} />
          <p>The art of dying</p>
        </li>
        <li>
          <img src={cdFlesh} />
          <p>The way of all flesh</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>From Mars to Sirius</h2>
      <ul>
        <li>
          <img src={cdWhale} />
          <p>Unicorn</p>
        </li>
        <li>
          <img src={cdWhale} />
          <p>Flying Whales</p>
        </li>
        <li>
          <img src={cdWhale} />
          <p>Ocean Planet</p>
        </li>
        <li>
          <img src={cdWhale} />
          <p>Where dragons dwell</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>Magma</h2>
      <ul>
        <li>
          <img src={cdMagma} />
          <p>Silvera</p>
        </li>
        <li>
          <img src={cdMagma} />
          <p>Stranded</p>
        </li>
        <li>
          <img src={cdMagma} />
          <p>The cell</p>
        </li>
        <li>
          <img src={cdMagma} />
          <p>The shooting star</p>
        </li>
      </ul>
    </div>
  </div>
)

export default Musicas
