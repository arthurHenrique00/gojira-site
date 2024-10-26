import Banner from '../Banner'
import { Album, AlbumTit, Musica, PlayerMusc, titleSec as Tit } from './styles'

const Musicas = () => (
  <div style={{ backgroundColor: 'rgb(46, 46, 46)' }}>
    <Banner />
    <div className="container">
      <Tit>Melhores músicas dos melhor albums</Tit>
      <AlbumTit id="twoaf">The way of all flesh</AlbumTit>
      <Album>
        <Musica>
          <p>Toxic garbage island</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q2pCt6mnMWE?si=VfhfhF3dHyq-_RUc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>Sight to Behold</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qVJyBdGdYTc?si=vpDxw2_tP6OcZk90"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>The art of dying</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XCUSdcEKaCk?si=ZyYw6aEJ9drgrVXl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>The way of all flesh</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/A0UCunCKD2E?si=Smz-1Gpvb2bF-1Wc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
      </Album>
      <AlbumTit id="fmts">From Mars to Sirius</AlbumTit>
      <Album>
        <Musica>
          <p>Unicorn</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eg_OyqkITSE?si=dvBKOsu1tXhoGwy0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>Ocean Planet</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UvumbKmKuXM?si=hJEVOi38igEurYtD"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>Where dragons dwell</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-8nBLopOSg8?si=iacru24KR3YBNTI2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>Flying Whale</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eg_OyqkITSE?si=YOSo3UO8WfXc96IC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
      </Album>
      <AlbumTit id="mgm">Magma</AlbumTit>
      <Album>
        <Musica>
          <p>Silvera</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iVvXB-Vwnco?si=Ujd1esSNvi9RZgki"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>Stranded</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FNdC_3LR2AI?si=-maJmRgs8ttNjsOd"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>The cell</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/J13GI4Xik1o?si=UOH2rjtMQpetviiR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></PlayerMusc>
        </Musica>
        <Musica>
          <p>The shooting star</p>
          <PlayerMusc
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hnRv4azfris?si=euo2RY7VOPFSieK3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></PlayerMusc>
        </Musica>
      </Album>
    </div>
  </div>
)

export default Musicas
