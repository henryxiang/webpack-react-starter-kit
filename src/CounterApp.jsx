import React from 'react';
import Counter from './component/Counter';
import CounterModel from './model/CounterModel';

const counter1 = new CounterModel();
const counter2 = new CounterModel();
const counter3 = new CounterModel();

const app = (
  <div>
    <Counter counter={counter1} />
    <Counter counter={counter2} />
    <Counter counter={counter3} />
  </div>
);

export default app;