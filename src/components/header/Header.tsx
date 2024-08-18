import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uncontrolled-form"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Uncontrolled Components
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hook-form"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Controlled Components
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
