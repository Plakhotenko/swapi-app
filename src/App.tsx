import React, { FC } from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, RouteObject } from 'react-router-dom';
import { ErrorBar } from './components/ErrorBar';
import { Header } from './components/Header';
import { People } from './components/People';
import { Person } from './components/Person';
import { ErrorBarProvider } from './providers/error-bar.provider';
import { Films } from './components/Films';
import { Film } from './components/Film';
import { Starships } from './components/Starships';
import { Starship } from './components/Starship';
import { Vehicle } from './components/Vehicle';
import { Vehicles } from './components/Vehicles';
import { Species } from './components/Species';
import { Speccy } from './components/Speccy';
import { Planets } from './components/Planets';
import { Planet } from './components/Planet';
import { NotFound } from './components/NotFound';
import { StoreProvider } from './providers/store.provider';
import { reducers } from './store/root-reducer';

const routerItems: RouteObject[] = [
  {
    path: '/people',
    element: <People />,
  },
  {
    path: '/people/:id',
    element: <Person />,
  },
  {
    path: '/films',
    element: <Films />,
  },
  {
    path: '/films/:id',
    element: <Film />,
  },
  {
    path: '/starships',
    element: <Starships />,
  },
  {
    path: '/starships/:id',
    element: <Starship />,
  },
  {
    path: '/vehicles',
    element: <Vehicles />,
  },
  {
    path: '/vehicles/:id',
    element: <Vehicle />,
  },
  {
    path: '/species',
    element: <Species />,
  },
  {
    path: '/species/:id',
    element: <Speccy />,
  },
  {
    path: '/planets',
    element: <Planets />,
  },
  {
    path: '/planets/:id',
    element: <Planet />,
  },
  {
    path: '/not-found',
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to="/people" />,
  },
];

const App: FC = () => (
  <StoreProvider structure={reducers}>
    <ErrorBarProvider>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            {routerItems.map(({ path, element }) => (
              <Route key={path} element={element} path={path} />
            ))}
          </Routes>
          <ErrorBar />
        </BrowserRouter>
      </Container>
    </ErrorBarProvider>
  </StoreProvider>
);

export default App;
