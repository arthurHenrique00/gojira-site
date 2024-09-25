import bandaSobre from '../../gojira_projects_foto/gojira-banda.jpg'
import magma from '../../gojira_projects_foto/magma.jpg'
import woaf from '../../gojira_projects_foto/the-way-of-all-flesh.webp'
import fortitude from '../../gojira_projects_foto/fortitude.webp'
import theLink from '../../gojira_projects_foto/the-link.webp'
import marsSir from '../../gojira_projects_foto/from-mars-to-sirius.webp'
import lenfant from '../../gojira_projects_foto/lentant_sauvage.jpg'
import Botao from '../Botao'
import { Banda } from '../Sobre/styles'
import { ListaVinil, Preco, PrecoPromo } from './styles'

const Vinils = () => (
  <>
    <Banda src={bandaSobre} />
    <div className="container">
      <h1>Vinils</h1>
      <ListaVinil>
        <li>
          <div>
            <img src={magma} />
            <h3>Magma</h3>
            <p>
              Magma é o sexto álbum de estúdio da banda de metal francesa
              Gojira. O álbum foi lançado mundialmente no dia 17 de Junho de
              2016 pela gravadora Roadrunner Records.
            </p>
            <PrecoPromo>-25%OFF R$ 125,00</PrecoPromo>
            <Preco>R$ 31,25</Preco>
            <Botao />
          </div>
        </li>
        <li>
          <div>
            <img src={woaf} />
            <h3>The way of all Flesh</h3>
            <p>
              The Way of All Flesh é o quarto álbum de estúdio da banda francesa
              de heavy metal Gojira. O álbum foi lançado em 13 de outubro de
              2008 na Europa pela Listenable Records e em 14 de outubro nos
              Estados Unidos pela Prosthetic Records
            </p>
            <PrecoPromo>-25%OFF R$ 125,00</PrecoPromo>
            <Preco>R$ 31,25</Preco>
            <Botao />
          </div>
        </li>
        <li>
          <div>
            <img src={fortitude} />
            <h3>Fortitude</h3>
            <p>
              Fortitude é o sétimo álbum de estúdio da banda francesa de heavy
              metal Gojira. O álbum foi lançado em 30 de abril de 2021 pela
              Roadrunner Records.
            </p>
            <PrecoPromo>-25%OFF R$ 125,00</PrecoPromo>
            <Preco>R$ 31,25</Preco>
            <Botao />
          </div>
        </li>
        <li>
          <div>
            <img src={theLink} />
            <h3>The Link</h3>
            <p>
              The Link é o segundo álbum de estúdio da banda francesa de heavy
              metal Gojira. Uma edição remasterizada do álbum foi lançada em
              2005
            </p>
            <PrecoPromo>-25%OFF R$ 125,00</PrecoPromo>
            <Preco>R$ 31,25</Preco>
            <Botao />
          </div>
        </li>
        <li>
          <div>
            <img src={marsSir} />
            <h3>From Mars to Sirius</h3>
            <p>
              From Mars to Sirius é o terceiro álbum de estúdio da banda
              francesa de heavy metal Gojira. É um álbum conceitual que aborda
              questões ambientais
            </p>
            <PrecoPromo>-25%OFF R$ 125,00</PrecoPromo>
            <Preco>R$ 31,25</Preco>
            <Botao />
          </div>
        </li>
        <li>
          <div>
            <img src={lenfant} />
            <h3>The Link</h3>
            <p>
              L&apos:Enfant Sauvage é o quinto álbum de estúdio e estreia em uma
              grande gravadora da banda francesa de heavy metal Gojira. Foi
              lançado em 26 de junho de 2012
            </p>
            <PrecoPromo>-25%OFF R$ 125,00</PrecoPromo>
            <Preco>R$ 31,25</Preco>
            <Botao />
          </div>
        </li>
      </ListaVinil>
    </div>
  </>
)

export default Vinils
