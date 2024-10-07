import { Banda, Desc } from './styles'
import Header from '../Header'
import Rodape from '../Footer'
import bandaOlim from '../../gojira_projects_foto/gojira-olympics.png'
import castelo from '../../gojira_projects_foto/gojira-castelo-olympics.jpg'
import liberte from '../../gojira_projects_foto/liberteOlimp.jpg'
import gojira1 from '../../gojira_projects_foto/gojiraAbout.jpg'
import gojira2 from '../../gojira_projects_foto/about2.jpg'
import gojira3 from '../../gojira_projects_foto/about3.jpg'

const Sobre = () => (
  <>
    <Header />
    <div id="carousel-sobre" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div data-bs-interval="1000" className="carousel-item active">
          <Banda style={{ marginTop: '60px' }} src={gojira1} />
        </div>
        <div className="carousel-item">
          <Banda style={{ marginTop: '60px' }} src={gojira2} />
        </div>
        <div className="carousel-item">
          <Banda style={{ marginTop: '60px' }} src={gojira3} />
        </div>
      </div>
      <button
        data-bs-target="#carousel-sobre"
        data-bs-slide="prev"
        className="carousel-control-prev"
        type="button"
      >
        <span
          style={{
            backgroundColor: 'black',
            padding: '24px',
            borderRadius: '50%'
          }}
          className="carousel-control-prev-icon"
        ></span>
      </button>
      <button
        data-bs-target="#carousel-sobre"
        data-bs-slide="next"
        className="carousel-control-next"
        type="button"
      >
        <span
          style={{
            backgroundColor: 'black',
            padding: '24px',
            borderRadius: '50%'
          }}
          className="carousel-control-next-icon"
        ></span>
      </button>
    </div>
    <div className="container">
      <h2>Sobre</h2>
      <Desc>
        Gojira é uma banda de death metal progressivo francesa formada em 1996
        em Baiona, França. Formado inicialmente com o nome de Godzilla, a banda
        alterou o nome em 2001. Gojira é composto pelo vocalista, guitarrista e
        compositor Joe Duplantier, seu irmão mais novo e baterista Mario
        Duplantier, Christian Andreu como segundo guitarrista, e Jean-Michel
        Labadie como baixista, formação esta que é a mesma desde que a banda
        mudou de nome. A banda é conhecida por ter letras que tratam da
        natureza, espiritualidade e morte. Atualmente o Gojira é uma das
        principais bandas do metal moderno ao lado de nomes como: Slipknot,
        Opeth, Lamb of God e Mastodon.
      </Desc>
    </div>
    <div
      id="carousel-sobre-segundo"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div data-bs-interval="1000" className="carousel-item active">
          <Banda style={{ marginTop: '60px' }} src={bandaOlim} />
        </div>
        <div className="carousel-item">
          <Banda style={{ marginTop: '60px' }} src={castelo} />
        </div>
        <div className="carousel-item">
          <Banda style={{ marginTop: '60px' }} src={liberte} />
        </div>
      </div>
      <button
        data-bs-target="#carousel-sobre-segundo"
        data-bs-slide="prev"
        className="carousel-control-prev"
        type="button"
      >
        <span
          style={{
            backgroundColor: 'black',
            padding: '24px',
            borderRadius: '50%'
          }}
          className="carousel-control-prev-icon"
        ></span>
      </button>
      <button
        data-bs-target="#carousel-sobre-segundo"
        data-bs-slide="next"
        className="carousel-control-next"
        type="button"
      >
        <span
          style={{
            backgroundColor: 'black',
            padding: '24px',
            borderRadius: '50%'
          }}
          className="carousel-control-next-icon"
        ></span>
      </button>
    </div>
    <div className="container">
      <h2>Olimpíadas</h2>
      <Desc>
        A performance do Gojira com a cantora de ópera Marina Viotti foi um dos
        momentos mais falados da cerimônia de abertura dos Jogos Olímpicos de
        Paris. Eles apresentaram uma versão de “Ah! Ça Ira”, canção popular da
        época da Revolução Francesa que ganhou força por sua mensagem de
        perseverança e resiliência.
      </Desc>
    </div>
    <Rodape />
  </>
)

export default Sobre
