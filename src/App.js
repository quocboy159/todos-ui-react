import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/commons/Header";
import Home from "./pages/Home";
import UserDetails from './pages/UserDetails';

const MainWrapper = styled.main`
padding: 60px 15px 0;
`;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainWrapper>
        <Container>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="users/:id" element={<UserDetails />} />
          </Routes>
        </Container>
      </MainWrapper>
    </div>
  );
}

export default App;
