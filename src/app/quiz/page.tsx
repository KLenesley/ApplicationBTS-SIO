import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 
const supabaseKey = 
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
