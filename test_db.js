require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function test() {
  const { data, error } = await supabase
    .from('custom_requests')
    .insert([{ name: 'Test', phone: '123', description: 'Test' }])
    .select();
  
  if (error) {
    console.log('Insert Error Code:', error.code);
    console.log('Insert Error Message:', error.message);
  } else {
    console.log('Insert successful!');
    // Delete the test row
    await supabase.from('custom_requests').delete().eq('name', 'Test');
  }
}

test();
