import React from 'react';

import Exercise from './../Exercise';

import Start from './start';
import Final from './final';

const Page = ({ path }) => <Exercise start={Start} final={Final} path={path} />;

export default Page;
