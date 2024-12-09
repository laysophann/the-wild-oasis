import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qicgrmuixfhvcfrrtlnp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpY2dybXVpeGZodmNmcnJ0bG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNzA4NjcsImV4cCI6MjA0ODk0Njg2N30.fkDDEb6w1G3p-zk0O252LWEZCWvRYQOtut_TD00zDew";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
