


import { createClient } from '@/app/lib/supabase/server'; // Adjust path as necessary
import { cookies } from 'next/headers';


export async function GET(request: Request) {
  const supabase = createClient(cookies())
  
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {    
    return Response.json({ users: await supabase.from('users').select("*",{count:'exact'}) });
  } catch (error) {
    supabase.rpc('ROLLBACK')
    // await sql`ROLLBACK`;
    return Response.json({ message: error?.message }, { status: 500 });
  }
}



