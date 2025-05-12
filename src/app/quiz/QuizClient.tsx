'use client';

import { useState } from 'react';

export default function QuizClient({ quiz_questions, quiz_answers }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  let answerWeights = [];
  let numberOfQuestions = quiz_questions.length;
  let finalScore = null;
  let maxWeight = 4;
  let maxScore = numberOfQuestions * maxWeight;

  const handleNextQuestion = (next) => {
    next.preventDefault();
    const formData = new FormData(next.target);
    const selectedAnswer = formData.get(`question_${quiz_questions[currentQuestionIndex].id}`);
    const selectedAnswerWeight = quiz_answers.find((answer) => answer.question_id === quiz_questions[currentQuestionIndex].id && answer.answer === selectedAnswer).answerF;

    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [quiz_questions[currentQuestionIndex].id]: { answer: selectedAnswer, weight: selectedAnswerWeight, }, }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-100">Quiz</h1>
      {(() => {
        if (currentQuestionIndex < quiz_questions.length) {
          return quiz_questions.map((question, index) => (
            index === currentQuestionIndex && (
              <div key={index} className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
                <form onSubmit={handleNextQuestion} className="space-y-6">
                  <input type="hidden" name="id" value={question.id} />
                  <h2 className="text-xl font-bold">{index + 1}. {question.question}</h2>
                  {quiz_answers.filter((answer) => answer.question_id === question.id).map((answer, answerIndex) => (
                      <button key={answerIndex} type="button" onClick={() => {
                          const selectedAnswerWeight = quiz_answers.find((a) => a.question_id === question.id && a.answer === answer.answer).answerF;

                          setUserAnswers((prevAnswers) => ({...prevAnswers, [question.id]: { answer: answer.answer, weight: selectedAnswerWeight }, }));

                          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                        }}
                        className={`w-full p-4 text-left rounded-lg border ${ userAnswers[question.id]?.answer === answer.answer ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300" } hover:bg-purple-500 transition`} >
                        {answer.answer}
                      </button>
                    ))}
                </form>
              </div>
            )
          ));

        } else {
          answerWeights = Object.values(userAnswers).reduce((sum, answer) => sum + answer.weight, 0);
          finalScore = Math.round(((answerWeights / maxScore) * 100) * 100) / 100;

          return (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Vos réponses</h2>
              <ul className="space-y-4">
                {quiz_questions.map((question) => (
                  <li key={question.id}>
                    <h3 className="font-semibold">{question.question}</h3>
                    <p className="text-gray-300">Votre réponse : {userAnswers[question.id]?.answer}</p>
                    <p className="text-gray-300">Poids de la réponse : {userAnswers[question.id]?.weight}</p> {/* Temp, to be removed */}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mt-6">Résultat</h2>
              <p className="text-gray-300">Votre score : {finalScore} %</p>

              <button onClick={handleRestart} className="mt-6 px-5 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition">
                Recommencer
              </button>
            </div>
          );
        }
      })()}
    </div>
  );
}
