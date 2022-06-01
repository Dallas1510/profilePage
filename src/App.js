import React from 'react';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <ProfileInfo />
      </Container>
    </div>
  );
}

export default App;
