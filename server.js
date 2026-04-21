require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Supabase Configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload()); // Enable file uploads

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serving static files
app.use(express.static(path.join(__dirname, 'MISD_AUTOMATIONS-main/MISD_AUTOMATIONS-main')));

// --- CRUD API for Contacts using Supabase ---

app.get('/api/contacts', async (req, res) => {
  try {
    const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/contacts', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const { data, error } = await supabase.from('contacts').insert([{ name, email, message }]).select();
    if (error) throw error;
    res.json(data[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- CRUD API for Customizations with File Upload ---

app.post('/api/customizations', async (req, res) => {
  try {
    const { name, phone, description } = req.body;
    let document_url = 'None';

    // 1. Handle File Upload if exists
    if (req.files && req.files.document) {
      const file = req.files.document;
      const fileExt = path.extname(file.name);
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}${fileExt}`;
      const filePath = `custom_requests/${fileName}`;

      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('customizations')
        .upload(filePath, file.data, {
          contentType: file.mimetype,
          upsert: true
        });

      if (uploadError) throw uploadError;

      // Get Public URL
      const { data: urlData } = supabase.storage
        .from('customizations')
        .getPublicUrl(filePath);
      
      document_url = urlData.publicUrl;
    }

    // 2. Save to Database
    const { data: dbData, error: dbError } = await supabase
      .from('custom_requests')
      .insert([{ name, phone, description, document_url }])
      .select();

    if (dbError) throw dbError;

    res.json(dbData[0]);
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// --- CRUD API for Feedbacks using Supabase ---

app.get('/api/feedbacks', async (req, res) => {
  try {
    const { data, error } = await supabase.from('feedbacks').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    res.json(data);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/feedbacks', async (req, res) => {
  const { name, feedback, rating } = req.body;
  try {
    const { data, error } = await supabase
      .from('feedbacks')
      .insert([{ name, feedback, rating: rating || 5 }])
      .select();
    if (error) throw error;
    res.json(data[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Connected to Supabase');
});
