import { createClient } from '@/utils/supabase/server';

export default async function Questions() {
  const supabase = await createClient();
  const { data: quiz_questions } = await supabase.from("quiz_questions").select();

  return <pre>{JSON.stringify(quiz_questions, null, 2)}</pre>
}