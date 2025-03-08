import styled, { createGlobalStyle } from 'styled-components'
import foto2 from './assets/images/foto2.jpeg'

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", serif;
    }
`

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 40px;
`

export const BkGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${foto2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -2;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0 80px;
`

export const Texto = styled.h1`
  font-family: 'Playwrite IT Moderna', cursive;
  font-weight: 200;
  font-size: 24px;
  text-align: center;
  color: rgb(165, 165, 165);
`

export const Fotos = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Galeria = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 40px;
  margin-bottom: 40px;
`
