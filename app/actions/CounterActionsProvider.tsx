export type CounterAction = {
  type: string;
};

export const increamentCounter = () => ({
  type: 'INCREMENT',
});

export const decrementCounter = () => ({
  type: 'DECREMENT',
});
