import { useState, useReducer } from 'react';

function DateCounter() {
  // const [count, setCount] = useState(0);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + state.step };
      case 'decrement':
        return { ...state, count: state.count - state.step };
      case 'setCount':
        return { ...state, count: action.payload };
      case 'setStep':
        return { ...state, step: action.payload };
      case 'reset':
        return { ...state, count: 0, step: 1 };
      default:
        throw new Error();
    }
  }

  // This mutates the date object.
  const date = new Date('june 21 2027');
  // date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    // dispatch({ type: 'decrement', payload: step });
    dispatch({ type: 'decrement' });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    // dispatch({ type: 'increment', payload: step });
    dispatch({ type: 'increment' });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    // dispatch({ type: 'setCount', payload: Number(e.target.value) });
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
    // dispatch({ type: 'reset' });
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
