function Question({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${answer === index ? 'answer' : ''} ${
              hasAnswered && index === question.correctOption
                ? 'correct'
                : 'wrong'
            }`}
            disabled={hasAnswered}
            key={option}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
