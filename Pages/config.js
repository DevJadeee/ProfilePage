// config.js

// This checks if the site is running live on Vercel or locally on your machine
const SUPABASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? "https://znpjrdticwxcxxhsqnlf.supabase.co/rest/v1/messages" 
    : ""; // Leave empty; Vercel will inject this automatically when live!

const SUPABASE_ANON_KEY = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucGpyZHRpY3d4Y3h4aHNxbmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2Mjk2MjEsImV4cCI6MjA5ODIwNTYyMX0.gqo_ssjJ15U5jHDTSDTc6RDDaLzwdXCXyJRuS5O-3y0"
    : ""; // Leave empty; Vercel will inject this automatically when live!