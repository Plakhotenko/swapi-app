import React, { FC } from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { INavItem } from '../models';

const navItems: INavItem[] = [
  { text: 'People', path: '/people' },
  { text: 'Films', path: '/films' },
  { text: 'Starships', path: '/starships' },
  { text: 'Vehicles', path: '/vehicles' },
  { text: 'Species', path: '/species' },
  { text: 'Planets', path: '/planets' },
];

export const Nav: FC = () => (
  <nav className="main-nav">
    <ul className="main-nav__list">
      {navItems.map(({ text, path }) => (
        <li key={text} className="main-nav__list-item">
          <Link component={RouterLink} to={path} variant="button">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
