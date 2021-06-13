import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Route path='/' component={HomePage} exact></Route>
          <Route path='/product/:id' component={ProductPage}></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App
