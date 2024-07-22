import {useQuiz} from "../contexts/QuizContext";

function Options({question}) {
  const {answer, dispatch} = useQuiz();
  const {options, correctOption} = question;
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({type: "newAnswer", payload: index})}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
