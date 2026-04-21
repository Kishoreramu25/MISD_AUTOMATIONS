require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function checkTable() {
    console.log('--- Checking "feedbacks" table ---');
    const { data, error } = await supabase.from('feedbacks').select('*').limit(1);
    
    if (error) {
        if (error.code === '42P01') {
            console.error('Error: The "feedbacks" table does not exist in your Supabase database.');
            console.log('\nPlease run the following SQL in your Supabase SQL Editor:');
            console.log(`
CREATE TABLE feedbacks (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  feedback TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable access
ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON feedbacks FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON feedbacks FOR SELECT USING (true);
            `);
        } else {
            console.error('Database Error:', error.message);
        }
    } else {
        console.log('Success! The "feedbacks" table exists and is accessible.');
    }
}

checkTable();
