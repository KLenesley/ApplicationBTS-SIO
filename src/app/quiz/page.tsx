import { createClient } from '../../../utils/supabase/server';
import QuizClient from './QuizClient';

export default async function Questions() {
  const supabaseQuestions = await createClient();
  const { data: quiz_questions } = await supabaseQuestions.from("quiz_questions").select('question, id');
  // question = text of the question
  // id = id of the question (primary key)

  const supabaseAnswers = await createClient();
  const { data: quiz_answers } = await supabaseAnswers.from("quiz_answers").select('answer, question_id, answerF');
  // answerF = weighted answer (0-4)
  // question_id = id of the question (foreign key)
  // answer = text of the answer

  return (
    <QuizClient quiz_questions={quiz_questions} quiz_answers={quiz_answers} />
  );
}