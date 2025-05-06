'use client';

import { useState } from 'react';

export default function QuizClient({ quiz_questions, quiz_answers }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const handleNextQuestion = (next) => {
    next.preventDefault();
    const formData = new FormData(next.target);
    const selectedAnswer = formData.get(`question_${quiz_questions[currentQuestionIndex].id}`);
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quiz_questions[currentQuestionIndex].id]: selectedAnswer,
    }));
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
                  {quiz_answers.filter(answer => answer.question_id === question.id).map((answer, answerIndex) => (
                    <div key={answerIndex} className="flex items-center space-x-3">
                      <input type="radio" name={`question_${question.id}`} value={answer.answer} required className="form-radio text-purple-500 focus:ring-purple-400"/>
                      <label className="text-gray-300">{answer.answer}</label>
                    </div>
                  ))}
                  <button type="submit" className="mt-6 px-5 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition">
                    Suivant
                  </button>
                </form>
              </div>
            )
          ));
        } else {
          return (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Vos réponses</h2>
              <ul className="space-y-4">
                {quiz_questions.map((question) => (
                  <li key={question.id}>
                    <h3 className="font-semibold">{question.question}</h3>
                    <p className="text-gray-300">Votre réponse : {userAnswers[question.id]}</p>
                  </li>
                ))}
              </ul>
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
