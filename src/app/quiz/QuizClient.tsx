'use client';

import { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
}
interface QuizAnswer {
  question_id: number;
  answer: string;
  answerF: number;
}

export default function QuizClient({ quiz_questions, quiz_answers }: { quiz_questions: QuizQuestion[]; quiz_answers: QuizAnswer[] }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, { answer: string; weight: number }>>({});
  let answerWeights = 0;
  let numberOfQuestions = quiz_questions.length;
  let finalScore = null;
  let maxWeight = 4;
  let maxScore = numberOfQuestions * maxWeight;

  const handleNextQuestion = (next: React.FormEvent<HTMLFormElement>) => {
    next.preventDefault();
    const formData = new FormData(next.target as HTMLFormElement);
    const selectedAnswer = formData.get(`question_${quiz_questions[currentQuestionIndex].id}`) as string;
    const selectedAnswerWeight = quiz_answers.find((answer) => answer.question_id === quiz_questions[currentQuestionIndex].id && answer.answer === selectedAnswer)?.answerF ?? 0;

    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [quiz_questions[currentQuestionIndex].id]: { answer: selectedAnswer, weight: selectedAnswerWeight, }, }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#233554] via-[#334155] to-[#1e293b] text-slate-200 py-16 px-4 overflow-hidden font-sans">
      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-700 rounded-full opacity-20 blur-2xl z-0" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-700 rounded-full opacity-30 blur-2xl z-0" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 drop-shadow text-center mb-8">
          Quiz
        </h1>
        {(() => {
          if (currentQuestionIndex < quiz_questions.length) {
            return quiz_questions.map((question: QuizQuestion, index: number) => (
              index === currentQuestionIndex && (
                <div key={index} className="mb-8 bg-[#334155]/80 border border-cyan-700 rounded-xl shadow-xl p-8 animate-fade-in">
                  <form onSubmit={handleNextQuestion} className="space-y-6">
                    <input type="hidden" name="id" value={question.id} />
                    <h2 className="text-xl font-bold text-cyan-300 mb-4 text-center">{index + 1}. {question.question}</h2>
                    <div className="flex flex-col gap-4 items-center">
                      {quiz_answers.filter((answer: QuizAnswer) => answer.question_id === question.id).map((answer: QuizAnswer, answerIndex: number) => (
                        <button key={answerIndex} type="button" onClick={() => {
                            const selectedAnswerWeight = quiz_answers.find((a: QuizAnswer) => a.question_id === question.id && a.answer === answer.answer)?.answerF ?? 0;
                            setUserAnswers((prevAnswers) => ({...prevAnswers, [question.id]: { answer: answer.answer, weight: selectedAnswerWeight }, }));
                            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                          }}
                          className={`w-full sm:w-2/3 p-4 text-lg rounded-lg border-2 font-semibold transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400
                            ${ userAnswers[question.id]?.answer === answer.answer
                                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-purple-400 shadow-lg scale-105"
                                : "bg-gray-700 text-gray-200 border-gray-600 hover:bg-cyan-700 hover:text-white hover:border-cyan-400" }`}
                        >
                          {answer.answer}
                        </button>
                      ))}
                    </div>
                  </form>
                </div>
              )
            ));
          } else {
            answerWeights = Object.values(userAnswers).reduce((sum, answer) => sum + (answer?.weight ?? 0), 0);
            finalScore = Math.round(((answerWeights / maxScore) * 100) * 100) / 100;
            return (
              <div className="bg-[#334155]/80 border border-cyan-700 rounded-xl shadow-xl p-8 animate-fade-in">
                <h2 className="text-2xl font-bold mb-4 text-cyan-300 text-center">Vos réponses</h2>
                <ul className="space-y-4 mb-6">
                  {quiz_questions.map((question: QuizQuestion) => (
                    <li key={question.id} className="bg-gray-700/80 rounded-lg p-4 shadow border border-gray-600">
                      <h3 className="font-semibold text-cyan-200">{question.question}</h3>
                      <p className="text-gray-300">Votre réponse : <span className="font-bold text-cyan-300">{userAnswers[question.id]?.answer}</span></p>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <h2 className="text-2xl font-bold mt-6 text-cyan-300">Résultat</h2>
                  <p className="text-3xl font-extrabold text-cyan-400 mt-2 mb-4">{finalScore} %</p>
                  <button onClick={handleRestart} className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full shadow-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200">
                    Recommencer
                  </button>
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}