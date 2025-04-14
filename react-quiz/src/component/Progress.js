function Progress({ index, numQuestions, points, possiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>
          {points} / {possiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
