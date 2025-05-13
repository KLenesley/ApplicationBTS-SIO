import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hzfqkprivorhqpoueytc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: quiz_questions, error } = await supabase
  .from('quiz_questions')
  .select('question')
  .select('id')

let { data: quiz_answers } = await supabase
  .from('quiz_answers')
  .select('answer')
  .select('id')

export default function Quiz() {

    return (
        <div>
            <h1>Quiz</h1>

            
        </div>
    )

}