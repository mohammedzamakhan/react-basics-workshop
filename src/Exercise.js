import React from 'react';
import { Link } from '@reach/router';
import { Grid, Col } from 'react-bootstrap';

import { getNextExercise, getPrevExercise } from './exercises';
const Exercise = props => {
  const StartComponent = props.start;
  const FinalComponent = props.final;
  return (
    <>
      <Grid>
        <Col xs={12}>
          <h2>Exercise {props.path}</h2>
          <Link
            to={`/${getNextExercise(props.path)}`}
            className="exercise-link next-exercise"
          >
            <span role="img" aria-label="next exercise">
              👉
            </span>
            Next Exercise
          </Link>

          <Link
            to={`/${getPrevExercise(props.path)}`}
            className="exercise-link previous-exercise"
          >
            <span role="img" aria-label="previous exercise">
              👈
            </span>
            Previous Exercise
          </Link>
        </Col>
      </Grid>
      <Grid>
        <Col xs={6}>
          <h4>Start</h4>
          <StartComponent />
        </Col>
        <Col xs={6}>
          <h4>Final</h4>
          <FinalComponent />
        </Col>
      </Grid>
      <Grid>
        <Col xs={12}>
          <Link
            to={`/${getNextExercise(props.path)}`}
            className="exercise-link next-exercise"
          >
            <span role="img" aria-label="next exercise">
              👉
            </span>
            Next Exercise
          </Link>
        </Col>
      </Grid>
    </>
  );
};

export default Exercise;
