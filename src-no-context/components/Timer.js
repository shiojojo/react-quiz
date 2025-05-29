import { useEffect } from 'react';

function Timer({ dispatch, remainingTime }) {
  const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
  const seconds = String(remainingTime % 60).padStart(2, '0');
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
}

export default Timer;
