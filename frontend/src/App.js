import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import UserScreen from './screens/UserScreen';
import UsersList from './screens/UsersList';



const  App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/user/:id' element={<UserScreen/>} exact />
            <Route path='/users/' element={<UsersList/>} exact />
            <Route path='/products/' element={<HomeScreen/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
