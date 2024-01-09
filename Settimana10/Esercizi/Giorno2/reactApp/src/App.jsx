import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarDark from './components/NavBarDark';
import FooterDark from './components/FooterDark';
import {Container, Row} from 'react-bootstrap/';
import Jumbotron from './components/Jumbotron';
import Lista from './components/Lista';

function App() {

  return (
    <>
      <NavBarDark />
      <Container style={{ minHeight: '95vh' }}>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <Lista />
        </Row>
      </Container>
      <FooterDark />
    </>
  )
}

export default App
