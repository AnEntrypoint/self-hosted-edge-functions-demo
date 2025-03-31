import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

interface reqPayload {
  name: string;
}

console.log('hello-world started');

serve(async (req: Request) => {
  return new Response(
        JSON.stringify({ msg: 'hi'}),
        { status: 200, headers: { "Content-Type": "application/json" } },
      )
}, { port: 9005 })
