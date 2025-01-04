// filepath: /workspaces/testmalik/fetchData.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://agbcslybppabetsbhoiv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnYmNzbHlicHBhYmV0c2Job2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mzc1MjQsImV4cCI6MjAxMzMxMzUyNH0.0LI0XQkDgFTx1Utt0ormLE240g-Z31CEHPPYlDISHQU';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchSections() {
  const { data, error } = await supabase
    .from('qrmenu')
    .select('section_name, section_content');

  if (error) {
    console.error('Error fetching data:', error);
    return [];
  }

  return data;
}