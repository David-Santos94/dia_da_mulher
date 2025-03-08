import { Botao } from './styles'

const BotaoPlay = () => (
  <Botao>
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
)

export default BotaoPlay
