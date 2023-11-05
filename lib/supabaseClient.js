
require ("doenv").config()
const { createClient } = require('@supabase/supabase-js');

process.env.NYCKELNS_NAMN
// Create a single supabase client for interacting with your database
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
   );

module.exports = supabase;