import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key exists:", !!supabaseKey);

if (!supabaseUrl) {
  console.error("REACT_APP_SUPABASE_URL is missing");
}

if (!supabaseKey) {
  console.error("REACT_APP_SUPABASE_KEY is missing");
}

export const supabase = createClient(supabaseUrl, supabaseKey);