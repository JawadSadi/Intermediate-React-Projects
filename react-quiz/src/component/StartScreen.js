function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastry</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
