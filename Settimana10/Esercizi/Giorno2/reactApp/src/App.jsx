import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarDark from './components/NavBarDark'
import FooterDark from './components/FooterDark'
import Jumbotron from './components/Jumbotron'
import { Container } from 'react-bootstrap'
import Lista from './components/Lista'
import ListButtons from './components/ListButtons'

function App() {
  return (
    <Container>
      <NavBarDark />
      <Jumbotron />
      {/* <AllTheBooks /> */}
      <Lista books={ListaButtons} />
      <FooterDark />
    </Container>
  )
}

export default App

