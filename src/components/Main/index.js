import { Container } from "./styles"
import imageMain from '../../assets/main.jpg'

export default function Main() {
  return (
    <Container>
      <img src={imageMain} />

      <main>
        <h1>Entenda como funciona</h1>
      </main>
    </Container>
  )
}