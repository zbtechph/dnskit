import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL;
const anonkey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;

if(!url || !anonkey) throw new Error("Supabase credentials is missing")

export default createClient(url, anonkey)