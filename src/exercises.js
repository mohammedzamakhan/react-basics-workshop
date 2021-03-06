import Exercise1 from './exercise-1';
import Exercise2 from './exercise-2';
import Exercise3 from './exercise-3';
import Exercise4 from './exercise-4';
import Exercise5 from './exercise-5';
import Exercise6 from './exercise-6';
import Exercise7 from './exercise-7';

const exercises = [1, 2, 3, 4, 5, 6, 7];

const getNextExercise = exercise => {
  return +exercise + 1;
};

const getPrevExercise = exercise => {
  return +exercise - 1;
};
export { exercises, getNextExercise, getPrevExercise, Exercise1, Exercise2, Exercise3, Exercise4, Exercise5, Exercise6, Exercise7, };

