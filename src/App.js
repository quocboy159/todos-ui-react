import React, { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/commons/Header";

const MainWrapper = styled.main`
padding: 60px 15px 0;
`;
// lazy loading reference to https://stackabuse.com/guide-to-lazy-loading-with-react/
const Home = lazy(() => import('./pages/Home'));
const UserDetails = lazy(() => import('./pages/UserDetails'));

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainWrapper>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="users/:id" element={<UserDetails />} />
            </Routes>
          </Suspense>
        </Container>
      </MainWrapper>
    </div>
  );
}

export default App;
