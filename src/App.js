import React from 'react';
import './App.css';
import ServicesList from './features/services/ServicesList';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <ServicesList />
      </Container>
    </div>
  );
};

export default App;
