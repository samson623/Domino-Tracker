const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const supabaseUrl = 'https://btceqqxcwyrkidyfrynu.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/health', async (req, res) => {
  try {
    const { data, error } = await supabase.from('games').select('*').limit(1);
    if (error) throw error;
    res.json({ status: 'ok', sample: data });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
