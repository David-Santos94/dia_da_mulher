import { useRef, useState } from 'react'
import { Botao, ContainerPlayer } from './styles'

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [progress, setProgress] = useState(0)

  // Reproduzir áudio
  const playAudio = () => {
    if (!audioRef.current) return // Se for null, sai da função
    audioRef.current.play()
  }

  // Atualizar progresso do áudio
  const updateProgress = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime
      const duration = audioRef.current.duration
      setProgress((currentTime / duration) * 100)
    }
  }

  // Alterar tempo de reprodução com o input range
  const changeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime =
        (Number(event.target.value) / 100) * audioRef.current.duration
      audioRef.current.currentTime = newTime
      setProgress(Number(event.target.value))
    }
  }

  return (
    <ContainerPlayer>
      {/* Elemento de áudio oculto */}
      <audio
        ref={audioRef}
        src="https://servidor-imagens-ten.vercel.app/audio1.mp3"
        onTimeUpdate={updateProgress}
      />

      {/* Controles */}
      <Botao onClick={playAudio}>
        <div className="container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider">
              <span className="title">Play</span>
              <span className="ball">
                <span className="icon">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 18V6l8 6-8 6Z"
                    ></path>
                  </svg>
                </span>
              </span>
            </span>
          </label>
        </div>
      </Botao>

      {/* Barra de progresso */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={changeTime}
        style={{ width: '300px', accentColor: 'rgb(41, 177, 102)' }}
      />
    </ContainerPlayer>
  )
}

export default AudioPlayer
