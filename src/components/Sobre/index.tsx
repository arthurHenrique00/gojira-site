import bandaSobre from '../../gojira_projects_foto/gojira-banda.jpg'
import bandaOlim from '../../gojira_projects_foto/gojira-olympics.webp'
import castelo from '../../gojira_projects_foto/gojira-castelo-olympics.jpg'
import { Banda, Desc } from './styles'

const Sobre = () => (
  <>
    <Banda src={bandaOlim} />
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
    <Banda src={castelo} />
    <div className="container">
      <Desc>
        A performance do Gojira com a cantora de ópera Marina Viotti foi um dos
        momentos mais falados da cerimônia de abertura dos Jogos Olímpicos de
        Paris. Eles apresentaram uma versão de “Ah! Ça Ira”, canção popular da
        época da Revolução Francesa que ganhou força por sua mensagem de
        perseverança e resiliência.
      </Desc>
    </div>
  </>
)

export default Sobre
