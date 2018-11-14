import Exercise1 from './exercise-1';
import Exercise2 from './exercise-2';
import Exercise3 from './exercise-3';
import Exercise4 from './exercise-4';

const exercises = [1, 2, 3, 4];

const getNextExercise = exercise => {
  return +exercise + 1;
};

const getPrevExercise = exercise => {
  return +exercise - 1;
};
export {
  exercises,
  getNextExercise,
  getPrevExercise,
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
};
