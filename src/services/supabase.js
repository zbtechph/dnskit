import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL;
const anonkey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;

export default createClient(url, anonkey)