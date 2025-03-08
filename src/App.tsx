import AudioPlayer from './components/AudioPlayer'
import {
  BkGround,
  Container,
  GlobalCss,
  Overlay,
  Texto,
  Galeria,
  Fotos,
  Hero
} from './styles'
import foto from './assets/images/foto.jpeg'
import foto1 from './assets/images/foto1.jpeg'
import foto3 from './assets/images/foto3.jpeg'
import foto4 from './assets/images/foto4.jpeg'

function App() {
  return (
    <>
      <GlobalCss />
      <Overlay />
      <BkGround />
      <Container>
        <Hero>
          <Texto>
            Uma mulher de valor; feliz quem a encontrar! É muito mais valiosa
            que os rubis.
          </Texto>
          <AudioPlayer />
        </Hero>
        <Galeria>
          <Fotos src={foto} alt="foto" />
          <Fotos src={foto1} alt="foto1" />
          <Fotos src={foto4} alt="foto4" />
          <Fotos src={foto3} alt="foto3" />
        </Galeria>
        <Texto>Te amo demais xuxu!</Texto>
      </Container>
    </>
  )
}

export default App
