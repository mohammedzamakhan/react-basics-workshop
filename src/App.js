import React from 'react';
import { Router, Link } from '@reach/router';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

import * as Exercies from './exercises';
import TekzenitLogo from './TekzenitLogo';

import './styles.css';

const App = () => (
  <>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">
            <TekzenitLogo />
            <span className="workshop-name">React Basics Workshop</span>
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavDropdown title="Exercises" id="basic-nav-dropdown">
          {Exercies.exercises.map(exercise => (
            <MenuItem
              key={exercise}
              componentClass={Link}
              to={`${exercise}`}
              href={`/${exercise}`}
            >
              Exercise {exercise}
            </MenuItem>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar>
    <Router>
      {Exercies.exercises.map(exercise => {
        const Component = Exercies[`Exercise${exercise}`];
        return (
          <Component
            key={exercise}
            path={`${exercise}`}
            default={exercise === 1}
          />
        );
      })}
    </Router>
  </>
);

export default App;
