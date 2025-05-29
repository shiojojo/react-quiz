function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji = '';
  if (percentage === 100) {
    emoji = '🏆';
  } else if (percentage >= 80) {
    emoji = '🥇';
  } else if (percentage >= 50) {
    emoji = '🥈';
  } else {
    emoji = '🥉';
  }
  return (
    <div className="finish-screen">
      <h2>Quiz Finished!</h2>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
